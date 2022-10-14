package com.kate.web2;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.annotation.WebServlet;
import java.io.IOException;
import java.util.logging.Logger;

@WebFilter(value = "/controller")
public class MyFilter implements Filter {
    private ServletContext context;
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.context = filterConfig.getServletContext();
    }

    @Override
    public synchronized void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        Integer count = (Integer) context.getAttribute("count");
        if (count == null) {
            count = 0;
            context.setAttribute("count", count);
        }
        count++;
        context.setAttribute("count", count);
        context.log("count = " + count);
        filterChain.doFilter(servletRequest, servletResponse);
    }
}
