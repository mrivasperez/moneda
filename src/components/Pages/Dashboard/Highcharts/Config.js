const Config = (historical) => {
  return {
    title: {
      text: "Historical Price Data",
    },
    credits: false,
    subtitle: {
      text: "Source: cryptocompare.com",
    },

    yAxis: {
      title: {
        text: "Price (USD)",
      },
    },

    xAxis: {
      type: "datetime",
    },

    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: historical,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
};

export default Config;
