window.addEventListener('load', (event) => {
    Chart.defaults.font.size = 18;
    barChartGrouped();
    barChart();
    barChartLessData();
    horizontalChart();
    horizontalGroupedChart();
    pieChart();
    lineChart();
});

function barChartGrouped() {
    const ctx4 = document.getElementById('bar-chart-grouped').getContext('2d');
    const myChart = new Chart(ctx4, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: ['1900', '1950', '1999', '2050'],
            datasets: [
                {
                    label: 'Africa',
                    backgroundColor: 'rgba(255,99,132,1)',
                    data: [133, 221, 783, 2478],
                },
                {
                    label: 'Europe',
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                    data: [408, 547, 675, 1734],
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                },
            },
            title: {
                display: true,
                text: 'Population growth (millions)',
            },
            legend: {
                display: false,
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 18,
                        },
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
}
function barChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        scaleLineColor: 'rgba(0,0,0,0)',
        data: {
            labels: [
                '2010-01-30',
                '2011-02-28',
                '2012-03-30',
                '2013-04-30',
                '2014-05-30',
                '2015-06-30',
                '2016-07-30',
                '2017-08-30',
                '2018-09-30',
                '2019-10-30',
                '2020-11-30',
                '2021-12-30',
            ],
            datasets: [
                {
                    label: '# of',
                    data: [12, 19, 3, 5, 21, 3, 16, 3, 5, 6, 2, 11],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                },
            },
            showDatapoints: true,
            tooltips: {
                enabled: false,
            },
            title: {
                display: false,
                text: 'Population growth (millions)',
            },
            hover: {
                animationDuration: 0,
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        callback: function (value) {
                            return this.getLabelForValue(value).substr(0, 4);
                        },
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
}

function barChartLessData() {
    const ctx = document.getElementById('barChartLessData').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        scaleLineColor: 'rgba(0,0,0,0)',
        data: {
            labels: ['2015-01', '2015-02'],
            datasets: [
                {
                    maxBarThickness: 100,
                    label: '# of',
                    data: [12, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
            showDatapoints: true,
            tooltips: {
                enabled: false,
            },
            title: {
                display: false,
                text: 'Population growth (millions)',
            },
            hover: {
                animationDuration: 0,
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
}
function horizontalChart() {
    const ctx = document.getElementById('HorizontalBarchart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: [
                '2015-01',
                '2015-02',
                '2015-03',
                '2015-04',
                '2015-05',
                '2015-06',
                '2015-07',
                '2015-08',
                '2015-09',
                '2015-10',
                '2015-11',
                '2015-12',
            ],
            datasets: [
                {
                    label: '# of',
                    data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                    barThickness: 22,
                    barPercentage: 0.5,
                },
            ],
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
            title: {
                display: false,
                text: 'Population growth (millions)',
            },
            legend: {
                display: false,
            },

            hover: {
                animationDuration: 0,
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    offset: '5',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
            },
        },
    });
}

function horizontalGroupedChart() {
    const ctx5 = document.getElementById('bar-chart-Horizontalgrouped').getContext('2d');
    const myChart = new Chart(ctx5, {
        type: 'bar',
        plugins: [ChartDataLabels],
        data: {
            labels: ['1900', '1925', '1950', '1975', '1999', '2025', '2050', '2075'],
            datasets: [
                {
                    label: 'Africa',
                    backgroundColor: 'rgba(255,99,132,1)',
                    data: [133, 221, 443, 534, 783, 1040, 2478, 3055],
                },
                {
                    label: 'Europe',
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                    data: [408, 499, 547, 576, 675, 734, 760, 800],
                },
            ],
        },
        options: {
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'start',
                    offset: '0',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
}

function pieChart() {
    const ctx2 = document.getElementById('pieChart').getContext('2d');
    const myChart2 = new Chart(ctx2, {
        type: 'doughnut',
        plugins: [ChartDataLabels],
        data: {
            labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
            datasets: [
                {
                    label: 'Population (millions)',
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                    ],
                    data: [2478, 5267, 734, 784, 433],
                },
            ],
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => {
                        return value + '';
                    },
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
                legend: {
                    position: 'right',
                    labels: {
                        padding: 20,
                        font: {
                            size: 16,
                            weight: 'bold',
                        },
                    },
                },
            },
            title: {
                display: true,
                text: 'Predicted world population (millions) in 2050',
            },
            hover: {
                animationDuration: 0,
            },
        },
    });
}

function lineChart() {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const myChart1 = new Chart(ctx, {
        type: 'line',
        plugins: [ChartDataLabels],
        data: {
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [
                {
                    data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6, 2, 1],
                    label: 'Africa',
                    borderColor: '#3e95cd',
                    fill: false,
                },
            ],
        },
        options: {
            plugins: {
                datalabels: {
                    anchor: 'top',
                    align: 'top',
                    offset: '5',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 16,
                        weight: 'bold',
                    },
                },
            },
            title: {
                display: false,
                text: 'Population growth (millions)',
            },
            legend: {
                display: false,
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                    },
                },

                y: {
                    grid: {
                        display: false,
                    },
                },
            },
        },
    });
}
