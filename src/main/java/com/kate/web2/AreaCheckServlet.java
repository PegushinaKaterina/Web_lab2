package com.kate.web2;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@WebServlet(value = "/checker")
public class AreaCheckServlet extends HttpServlet {

    private ObjectMapper objectMapper;

    @Override
    public void init() throws ServletException {
        objectMapper = new ObjectMapper();
        objectMapper.findAndRegisterModules();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Long startTime = System.nanoTime();
        if (req.getParameter("x") == null
                || req.getParameter("y") == null
                || req.getParameter("r") == null
                || req.getParameter("utc") == null) {
//            PrintWriter printWriter = resp.getWriter();
//            printWriter.println("Значения не корректны, " +
//                    "некоторые из предоставленных данных пусты, повторите запрос");
//            printWriter.close();
//            resp.setStatus(400);
            resp.sendError(400, "Значения не корректны, " +
                    "некоторые из предоставленных данных пусты, повторите запрос");
        } else {
            try {
                float x = Float.parseFloat(req.getParameter("x"));
//              Integer x = Integer.valueOf(req.getParameter("x"));
                Float y = Float.valueOf(req.getParameter("y"));
                Float r = Float.valueOf(req.getParameter("r"));
                Integer utc = Integer.valueOf(req.getParameter("utc"));
                HttpSession session = req.getSession();
                Table table = (Table) session.getAttribute("table");
                if (table == null) {
                    table = new Table();
                    session.setAttribute("table", table);
                }
                String result = hitInArea(x, y, r);
                TableRow tableRow = new TableRow(x, y, r, result,
                        (System.nanoTime() - startTime) / 1000,
                        LocalDateTime.now(ZoneId.of("GMT")).plusMinutes(-utc));
                // uts
                table.addRow(tableRow);
//                String json = new Gson().toJson(table);
                String json = objectMapper.writeValueAsString(table);
                resp.setContentType("application/json");
                resp.setCharacterEncoding("UTF-8");
                PrintWriter printWriter = resp.getWriter();
                printWriter.println(json);
                printWriter.close();
            } catch (NumberFormatException e) {
//                PrintWriter printWriter = resp.getWriter();
//                printWriter.println("Значения не корректны, " +
//                        "проверьте совпадение типов данных и повторите запрос");
//                printWriter.close();
//                resp.setStatus(404);
                resp.sendError(404, "Значения не корректны, " +
                        "проверьте совпадение типов данных и повторите запрос");
            }
        }
    }

//    public String hitInArea(int x, float y, float r){
//        boolean hitInSecondQuarter = (x >= -r) && (x <= 0)
//                && (y >= 0) && (y <= r);
//        boolean hitInThirdQuarter = (x <= 0) && (y <= 0)
//                && ((2 * y + x) >= (-r));
//        boolean hitInFourthQuarter = (x >= 0) && (y <= 0)
//                && ((x * x + y * y) <= (r * r / 4));
//        if (hitInSecondQuarter || hitInThirdQuarter || hitInFourthQuarter){
//            return "Попадание";
//        } else {
//            return "Промах";
//        }
//    }
    public String hitInArea(float x, float y, float r){
        boolean hitInSecondQuarter = (x >= -r) && (x <= 0)
                && (y >= 0) && (y <= r);
        boolean hitInThirdQuarter = (x <= 0) && (y <= 0)
                && ((2 * y + x) >= (-r));
        boolean hitInFourthQuarter = (x >= 0) && (y <= 0)
                && ((x * x + y * y) <= (r * r / 4));
        if (hitInSecondQuarter || hitInThirdQuarter || hitInFourthQuarter){
            return "Попадание";
        } else {
            return "Промах";
        }
    }
}
