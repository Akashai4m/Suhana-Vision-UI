import React from 'react'
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

function AnalticsPageBarChart(props) {
  return (
    <div>


<VerticalBarChart
  title={props.name}
  data={[{
    name: "Sales by age",
    data: [20, 30, 40, 20, 45, 30],
  }]}
  options={{
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
      theme: "dark",
    },
    xaxis: {
      categories: ["16-20", "21-25", "26-30", "31-35", "36-42", "42+"],
      show: true,
      labels: {
        show: true,
        style: {
          colors: "#A0AEC0",
          fontSize: "10px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      color: "black",
      labels: {
        show: true,
        style: {
          colors: "#A0AEC0",
          fontSize: "10px",
        },
      },
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#56577A",
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: "solid",
    //   colors: info.main ,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        columnWidth: "40px",
      },
    },
  }}
/>


    </div>
  )
}

export default AnalticsPageBarChart