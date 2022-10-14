<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Веб-программирование: Лабораторная №2</title>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/table.css" rel="stylesheet" type="text/css">
    <link href="css/form.css" rel="stylesheet" type="text/css">
    <link href="css/graph.css" rel="stylesheet" type="text/css">
    <link href="css/color2.css" rel="stylesheet" type="text/css">
</head>
<body onload="init()">
<header>
    <h2>Лабораторная работа №2</h2>
    <h6>Выполнила: Пегушина Екатерина Александровна</h6>
    <h6>
        Номер группы: 32121 Номер варианта: 1314
    </h6>
</header>
<main>
    <div class="parent">
        <div class="child child-one">
            <form name="coordinates" onsubmit="submitForm(); return false">
                <fieldset id="inputX" class="input">
                    <legend>Значение X</legend>
                    <button type="button" name="x" value="-3">-3</button>
                    <button type="button" name="x" value="-2">-2</button>
                    <button type="button" name="x" value="-1">-1</button>
                    <button type="button" name="x" value="0">0</button>
                    <button type="button" name="x" value="1">1</button>
                    <button type="button" name="x" value="2">2</button>
                    <button type="button" name="x" value="3">3</button>
                    <button type="button" name="x" value="4">4</button>
                    <button type="button" name="x" value="5">5</button>
                </fieldset>
                <fieldset id="inputY" class="input">
                    <legend>Значение Y</legend>
                    <text>Допустимые значечения Y: (-5; 3)</text>
                    <input id="y" name="y" type="text">
                </fieldset>
                <fieldset id="inputR" class="input">
                    <legend>Значение R</legend>
                    <label>1<input name="r" type="radio" value="1"></label>
                    <label>1.5<input name="r" type="radio" value="1.5"></label>
                    <label>2<input name="r" type="radio" value="2"></label>
                    <label>2.5<input name="r" type="radio" value="2.5"></label>
                    <label>3<input name="r" type="radio" value="3"></label>
                </fieldset>
                <fieldset id="input">
                    <button type="reset" id="reset">Сбросить</button>
                    <button type="submit" id="submit" >Отправить</button>
                </fieldset>
            </form>
        </div>
        <div class="child child-two">
            <svg class="svg" viewBox="0 0 300 300">
                <g class="figures">
                    <rect x="50" y="50" width="100" height="100" class="square"></rect>
                    <path d="M150,150 h50 A50,50 90 0,1 150,200 z"></path>
                    <polyline points="150,150 150,200 50,150 150,150"></polyline>
                </g>
                <g class="axis">
                    <g class="axis-X">
                        <line x1="150" y1="25" x2="150" y2="275"></line>
                        <line x1="150" y1="25" x2="140" y2="35"></line>
                        <line x1="150" y1="25" x2="160" y2="35"></line>
                        <line x1="140" y1="50" x2="160" y2="50"></line>
                        <line x1="140" y1="100" x2="160" y2="100"></line>
                        <line x1="140" y1="200" x2="160" y2="200"></line>
                        <line x1="140" y1="250" x2="160" y2="250"></line>
                    </g>
                    <g class="axis-y">
                        <line x1="25" y1="150" x2="275" y2="150"></line>
                        <line x1="265" y1="140" x2="275" y2="150"></line>
                        <line x1="265" y1="160" x2="275" y2="150"></line>
                        <line x1="50" y1="140" x2="50" y2="160"></line>
                        <line x1="100" y1="140" x2="100" y2="160"></line>
                        <line x1="200" y1="140" x2="200" y2="160"></line>
                        <line x1="250" y1="140" x2="250" y2="160"></line>
                    </g>
                </g>
                <g class="circles">
                </g>
                <g class="circles">
                </g>
                <g class="graph-text">
                    <text x="163" y="35">Y</text>
                    <text x="163" y="54">R</text>
                    <text x="163" y="104">R/2</text>
                    <text x="163" y="204">-R/2</text>
                    <text x="163" y="254">-R</text>
                    <text x="265" y="137">X</text>
                    <text x="50" y="137" text-anchor="middle">-R</text>
                    <text x="100" y="137" text-anchor="middle">-R/2</text>
                    <text x="200" y="137" text-anchor="middle">R/2</text>
                    <text x="250" y="137" text-anchor="middle">R</text>
                </g>
                <circle class="circle" r="0" cx="150" cy="150" fill="black"></circle>
            </svg>
        </div>

        <div class="child child-three">
            <div class="child child-three-one">
                <div class="table">
                    <div class="table-row table-header-group">
                        <div>X</div>
                        <div>Y</div>
                        <div>R</div>
                        <div>Результат</div>
                        <div>Текущее время</div>
                        <div>Время работы скрипта, мкс</div>
                    </div>
                </div>
            </div>
            <button type="button" id="cleanTable" class="clear">Очистить таблицу</button>
        </div>
    </div>
</main>
<footer>
</footer>
</body>

<script src="js/help/regular.js"></script>
<script src="js/help/Validator.js"></script>
<script src="js/input/ResetForm.js"></script>
<script src="js/ServerCommunication.js"></script>
<script src="js/print/TableWorker.js"></script>
<script src="js/print/Circles.js"></script>
<script src="js/print/GraphText.js"></script>
<script src="js/Init.js"></script>
<script src="js/help/CheckHit.js"></script>
<script src="js/input/ClickOnGraph.js"></script>
<script src="js/input/InputX.js"></script>
<script src="js/input/InputY.js"></script>
<script src="js/input/InputR.js"></script>
<script src="js/input/SubmitForm.js"></script>
</html>