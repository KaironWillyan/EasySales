 import React, { useEffect, useRef } from 'react';
import Chart from 'apexcharts';





const ColumnChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      // Defina os dados para o gráfico
      const chartData = {
        series: [
          {
            name: 'Série 1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          },
          {
            name: 'Série 2',
            data: [45, 35, 65, 20, 40, 30, 55, 60, 95]
          }
        ],
        xaxis: {
          categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
        }
      };
  
      // Defina as opções do gráfico
      const chartOptions = {
        chart: {
          type: 'bar', // Define o tipo de gráfico como colunas (bar)
          height: 350 // Define a altura do gráfico
          
        },
        series: chartData.series,
        xaxis: chartData.xaxis
      };
  
      // Crie uma instância do gráfico
      const chart = new Chart(chartRef.current, chartOptions);
  
      // Renderize o gráfico
      chart.render();
  
      // Retorne uma função de limpeza para destruir o gráfico quando o componente for desmontado
      return () => {
        chart.destroy();
      };
    }, []);
  
    return <div ref={chartRef}></div>;
  };
  
