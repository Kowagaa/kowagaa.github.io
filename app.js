var options = [
    // Languages chart
    {
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
},
//Holo Chart
{
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
            name: "Holo Snom Cards owned",
            data: [1]
        },
        {
            name: "Non-Holo Snom Cards owned",
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
},
//Type Chart
{
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
            name: "Snom 42/132 [Mega Evolution]",
            data: [2]
        },
        {
            name: "Snom 45/162 [Temporal Forces]",
            data: [1]
        },
        {
            name: "Snom 52/217 [Ascended Heroes]",
            data: [1]
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
},
];
var chart1 = new ApexCharts(document.querySelector("#chart"), options[0]);
var chart2 = new ApexCharts(document.querySelector("#chart"), options[1]);
var chart3 = new ApexCharts(document.querySelector("#chart"), options[2]);
chart1.render();




