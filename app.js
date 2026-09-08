//const snoms = await import('./snoms.json', { assert: { type: 'json' } });

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


// Languages chart
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
            data: [0]
        },
        {
            name: "English Snom Cards Owned",
            data: [0]
        },
        {
            name: "Spanish Snom Cards Owned",
            data: [0]
        }
    ],
    xaxis: {
        categories: [0]
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
            data: [0]
        },
        {
            name: "Reverse Holo Snom Cards Owned",
            data: [0]
        },
        {
            name: "Illustration Rare Snom Cards Owned",
            data: [0]
        },
        {
            name: "Holo Snom Cards Owned",
            data: [0]
        },
        {
            name: "Normal Snom Cards Owned",
            data: [0]
        }
    ],
    xaxis: {
        categories: [0]
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
            data: [0]
        },
        {
            name: "Snom 42/132 [Mega Evolution]",
            data: [0]
        },
        {
            name: "Snom 45/162 [Temporal Forces]",
            data: [0]
        },
        {
            name: "Snom 52/217 [Ascended Heroes]",
            data: [0]
        },
        {
            name: "Snom 168/162 [Temporal Forces]",
            data: [0]
        }
    ],
    xaxis: {
        categories: [0]
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
/*
chart1.updateSeries([
    {
        name: "Snom Cards Owned",
        data: snoms.Total   
    },
    {
        name: "English Snom Cards Owned",
        data: snoms.ByLang.en
    },
    {
        name: "Spanish Snom Cards Owned",
        data: snoms.ByLang.es
    }
]);
chart2.updateSeries([
    {
        name: "Snom Cards Owned",
        data: snoms.Total
    },
    {
        name: "Reverse Holo Snom Cards Owned",
        data: snoms.ByRarity.ReverseHolo
    },
    {
        name: "Illustration Rare Snom Cards Owned",
        data: snoms.ByRarity.IllustrationRare
    },
    {
        name: "Holo Snom Cards Owned",
        data: snoms.ByRarity.Holo
    },
    {
        name: "Normal Snom Cards Owned",
        data: snoms.ByRarity.Normal
    }
]);
chart3.updateSeries([
    {
        name: "Snom Cards Owned",
        data: snoms.Total
    },
    {
        name: "Snom 42/132 [Mega Evolution]",
        data: snoms.ByCard.MegaEvolutions["42/132"]
    },
    {
        name: "Snom 45/162 [Temporal Forces]",
        data: snoms.ByCard.TemporalForces["45/162"]
    },
    {
        name: "Snom 52/217 [Ascended Heroes]",
        data: snoms.ByCard.AscendedHeroes["52/217"]
    },
    {
        name: "Snom 168/162 [Temporal Forces]",
        data: snoms.ByCard.TemporalForces["168/162"]
    }
]);
*/