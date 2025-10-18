import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
function cargarSeriesEnTabla(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>   \n                            <td>").concat(s.name, "</td>\n                            <td>").concat(s.channel, "</td>\n                            <td>").concat(s.seasons, "</td>\n                            <td>").concat(s.description, "</td>\n                            <td><a href=\"").concat(s.link, "\" class=\"btn btn-primary\" target=\"_blank\">Ver</a></td>");
        seriesTbody.appendChild(trElement);
    });
    agregarFilaPromedio(series);
}
function agregarFilaPromedio(series) {
    var promedio = calcularPromedioTemporadas(series);
    var trPromedio = document.createElement("tr");
    trPromedio.className = "filaProm";
    trPromedio.innerHTML = "<td colspan=\"3\">Seasons average:</td>\n                            <td>".concat(promedio, "</td>\n                            <td colspan=\"2\"></td>");
    seriesTbody.appendChild(trPromedio);
}
function calcularPromedioTemporadas(series) {
    var total = series.reduce(function (sum, s) { return sum + s.seasons; }, 0);
    return total / series.length;
}
cargarSeriesEnTabla(series);
//# sourceMappingURL=main.js.map