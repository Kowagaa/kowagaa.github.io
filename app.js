//import ApexCharts from 'apexcharts/ssr'
// Languages chart
const categories = [
        "6/2026",
        "7/2026",
        "8/2026"
    ];
const colorStops = [
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
var options1 = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Snom Cards Owned",
            data: [4, 13, 13]
        },
        {
            name: "English Snom Cards Owned",
            data: [1, 10, 10]
        },
        {
            name: "Spanish Snom Cards Owned",
            data: [3, 3, 3]
        }
    ],
    xaxis: {
        categories: categories
    },
    fill: {
    type: "gradient",
    gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: colorStops * 3
    }
    }
};
//Holo Chart
var options2 = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Snom Cards Owned",
            data: [4, 13, 13]
        },
        {
            name: "Reverse Holo Snom Cards Owned",
            data: [1, 1, 1]
        },
        {
            name: "Illustration Rare Snom Cards Owned",
            data: [0, 1, 1]
        },
        {
            name: "Other Snom Cards Owned",
            data: [3, 11, 11]
        }
    ],
    xaxis: {
        categories: categories
    },
    fill: {
        type: "gradient",
    gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: colorStops * 4
    }
    }
};

//Type Chart
var options3 = {
    chart: {
        height: 280,
        type: "area"
    },
    dataLabels: {
        enabled: false
    },
    series: [
        {
            name: "Snom Cards Owned",
            data: [4, 13, 13]
        },
        {
            name: "Snom 42/132 [Mega Evolution]",
            data: [2, 10, 10]
        },
        {
            name: "Snom 45/162 [Temporal Forces]",
            data: [1, 1, 1]
        },
        {
            name: "Snom 52/217 [Ascended Heroes]",
            data: [1, 1, 1]
        },
        {
            name: "Snom 168/162 [Temporal Forces]",
            data: [0, 1, 1]
        }
    ],
    xaxis: {
        categories: categories
    },
    fill: {
    type: "gradient",
    gradient: {
        shadeIntensity: 1,
        type: "vertical",
        colorStops: colorStops * 5
    }
    }
};
const chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();
const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
chart3.render();
