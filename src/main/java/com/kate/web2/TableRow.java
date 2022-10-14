package com.kate.web2;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class TableRow implements Serializable {
    private float x;
//    private int x;
    private float y;
    private float r;
    private String result;
    private Long computationTime;
    // duration
    private LocalDateTime currentTime;
    //offset, instant

    public TableRow(float x, float y, float r, String result, Long computationTime, LocalDateTime currentTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.result = result;
        this.computationTime = computationTime;
        this.currentTime = currentTime;
        //проверку
    }
//    public TableRow(int x, float y, float r, String result, Long computationTime, LocalDateTime currentTime) {
//        this.x = x;
//        this.y = y;
//        this.r = r;
//        this.result = result;
//        this.computationTime = computationTime;
//        this.currentTime = currentTime;
//    }


    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getR() {
        return r;
    }

    public void setR(float r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Long getComputationTime() {
        return computationTime;
    }

    public void setComputationTime(Long computationTime) {
        this.computationTime = computationTime;
    }

    public LocalDateTime getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(LocalDateTime currentTime) {
        this.currentTime = currentTime;
    }
}
