package com.kate.web2;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public final class Table implements Serializable {

    private final List<TableRow> table;

    public Table() {
        table = new ArrayList<>();
    }

    public void addRow (TableRow tableRow){
        table.add(tableRow);
    }

    public List<TableRow> getTable() {
        return table;
        //копию
    }
}
