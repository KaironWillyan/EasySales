import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import "../Grafico/graficos.css";

function VendasEfetuadas() {
  const [fontSize, setFontSize] = useState(16);

  const data = {
    series: [55, 21],
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

  const increaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevFontSize) => prevFontSize - 2);
  };

  return (
    <div className='container2'>
  <div className="button-container3">
    <button onClick={increaseFontSize}>Aumentar Fonte</button>
    <button onClick={decreaseFontSize}>Diminuir Fonte</button>
  </div>
    <div className='containerR1' style={{ fontSize: `${fontSize}px` }}>
      <div className='grafico'>
        <Chart className="grafico1"
          options={data.options}
          series={data.series}
          type="donut"
          width={500}
          height={500}
        />
      </div>

      <div className="tags">
        <p className='tags1'>Cliente com maior número de pendências: {/* nome do cliente */} Ana </p>
        <p className='tags1'>Cliente com menor número de pendências: Xuxa </p>
      </div>
      <Link to={"/Relatorio"}>
        <button className='botao-voltar'>
          Voltar
        </button>
      </Link>
    </div>
    </div>
  );
}

export default VendasEfetuadas;
