import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import  "../Grafico/graficos.css"

function VendasEfetuadas() {
    const data = {
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    

    return (
        <div className='containerR'>
        <div className='grafico'>
            <Chart className= {"grafico1"}
                options={data.options}
                series={data.series}
                type="donut"
                width={500}
                height={320}
            />
        </div>

        <div class="tags">
            <p>Cliente com maior numero de pendencias: </p>
            <p>Cliente com menor numero de pendencias: </p>
        </div>
        <Link to = {"/Relatorio"}>
            <button className='botao-voltar'>
                Voltar 
            </button>
        </Link>
        </div>
    );
}


export default VendasEfetuadas;


