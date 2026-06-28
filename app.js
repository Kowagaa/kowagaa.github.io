// Languages chart
var options = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Snom Cards owned",
            data: [4]
        },
        {
            name: "English Snom Cards owned",
            data: [1]
        },
        {
            name: "Spanish Snom Cards owned",
            data: [3]
        }
    ],
    fill: {
    type: "gradient",
    gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: [
            [
                {
                    offset: 0,
                    color: "#348aeb",
                    opacity: 10.8
                },
                {
                    offset: 70,
                    color: "#6510F8",
                    opacity: 0.2
                },
                {
                    offset: 97,
                    color: "#3e0f8e",
                    opacity: 0.0
                }
            ]
        ]
    }
    },
    xaxis: {
        categories: [
            "6/2026"
        ]
    }
}
var chart1 = new ApexCharts(document.querySelector("#chart1"), options);
chart1.render();




