import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import "../Grafico/graficos.css";

function VendasEfetuadas() {
  const [fontSize, setFontSize] = useState(16);

  const data = {
    series: [55, 21, 67, 12],
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
        <p className='tagsp'>Fornecedor que obteve maior quantidade de produtos vendidos: {/* nome do cliente */} Ana </p>
        <p className='tagsp'>Número total de vendas </p>
        <p className='tagsp'>Fornecedor que obteve menor número de vendas: Xuxa </p>
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
