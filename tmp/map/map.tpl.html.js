angular.module("map/map.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("map/map.tpl.html",
    "<div gmap=\"main\"></div>" +
    "<div class=\"map-control\">" +
    "    <ul class=\"mapsyslist\">" +
    "        <li ng-repeat=\"s in account.account.skeys\">" +
    "            <span class=\"desc\">" +
    "                {{ account.account.systems[s].desc }}" +
    "            </span>" +
    "            <!--span class=\"imei\">" +
    "                {{ account.account.systems[s].imei }}" +
    "            </span-->" +
    "            <span class=\"status\">" +
    "                Стоит" +
    "            </span>" +
    "            <span class=\"signal\">" +
    "                24/05/2013 24:55" +
    "            </span>" +
    "            <br>" +
    "            <span class=\"status\">" +
    "                <span title=\"Основное питание\"><i class=\"icon-ambulance\"></i><strong>12В</strong></span>" +
    "                <span title=\"Резервное питание\"><i class=\"icon-bolt\"></i><strong>4.2В</strong></span>" +
    "                <span title=\"Сигнал GSM\"><i class=\"icon-signal\"></i></span>" +
    "                <i title=\"Сигнал GPS\" class=\"fonticon\">e</i>" +
    "            </span>" +
    "        </li>" +
    "    </ul>" +
    "    <div class=\"mapcalendar\">" +
    "      <!--div ng-model=\"date\" value=\"02-16-2012\" data-date=\"12-02-2012\" data-date-format=\"dd-mm-yyyy\" ui-date regional=\"ru\"></div-->" +
    "      <div id=\"datepicker\" data-date-language=\"ru\" data-date-weekstart=\"1\"></div>" +
    "      <!--div class=\"input-append date\" id=\"datepicker\" data-date=\"12-02-2012\" data-date-format=\"dd-mm-yyyy\">" +
    "            <input size=\"16\" type=\"text\" value=\"12-02-2012\" readonly>" +
    "            <span class=\"add-on\"><i class=\"icon-th\"></i></span>" +
    "        </div-->" +
    "    </div>" +
    "" +
    "" +
    "</div>" +
    "" +
    "<div class=\"map-timeline\">" +
    "    Шкала" +
    "    <div style=\"width: 40000px;\">uu</div>" +
    "</div>" +
    "" +
    "</div>" +
    "");
}]);