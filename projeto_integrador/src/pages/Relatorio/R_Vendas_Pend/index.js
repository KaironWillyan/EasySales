import React from 'react';
import Chart from 'react-apexcharts';
import { Link, useActionData } from 'react-router-dom';
import  "../Grafico/graficos.css"

function VendasPendentes() {
    const data = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: 'series-1',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }
        ]
    };

    return (
        <div className='containerR'>
        <div className='grafico'>
            <Chart className= {"grafico1"}
                options={data.options}
                series={data.series}
                type="bar"
                width={600}
                height={520}
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

export default VendasPendentes;



