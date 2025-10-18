import { series } from "./data.js";
import type { Serie } from "./serie";

const seriesTbody : HTMLElement = document.getElementById('series')!;

function cargarSeriesEnTabla(series: Serie[]): void {
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>   
                            <td>${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>
                            <td>${s.description}</td>
                            <td><a href="${s.link}" class="btn btn-primary" target="_blank">Ver</a></td>`;
        seriesTbody.appendChild(trElement);
    });
     agregarFilaPromedio(series);
}
function agregarFilaPromedio(series: Serie[]): void {
    const promedio = calcularPromedioTemporadas(series);
    
    let trPromedio = document.createElement("tr");
    trPromedio.className = "filaProm";
    trPromedio.innerHTML = `<td colspan="3">Seasons average:</td>
                            <td>${promedio}</td>
                            <td colspan="2"></td>`;
    seriesTbody.appendChild(trPromedio);
}

function calcularPromedioTemporadas(series: Serie[]): number {
    const total = series.reduce((sum, s) => sum + s.seasons, 0);
    return total / series.length;
}

cargarSeriesEnTabla(series);