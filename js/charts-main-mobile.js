window.addEventListener('load', (event) => {
    barChartGroupedMobile();
    barChartMobile();
    barChartMobileLessData();
    horizontalChartMobile();
    horizontalGroupedChartMobile();
    pieChartMobile();
    lineChartMobile();
});

function barChartGroupedMobile() {
    const ctx4 = document.getElementById('bar-chart-grouped-mobile').getContext('2d');
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
                    rotation: 0,
                    display: 'auto',
                },
            },
            title: {
                display: true,
                text: 'Population growth (millions)',
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
function barChartMobile() {
    const ctx = document.getElementById('barChartMobile').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        scaleLineColor: 'rgba(0,0,0,0)',
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

function barChartMobileLessData() {
    const ctx = document.getElementById('barChartMobileLessData').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataLabels],
        scaleLineColor: 'rgba(0,0,0,0)',
        data: {
            labels: ['2015-01', '2015-02'],
            datasets: [
                {
                    barThickness: 60,
                    maxBarThickness: 80,
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
function horizontalChartMobile() {
    const ctx = document.getElementById('HorizontalBarchartMobile').getContext('2d');
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
            responsive: true,
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

            hover: {
                animationDuration: 0,
            },
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
                    offset: '5',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                },
            },
        },
    });
}

function horizontalGroupedChartMobile() {
    const ctx5 = document.getElementById('bar-chart-Horizontalgrouped-mobile').getContext('2d');
    const myChart = new Chart(ctx5, {
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
                    data: [408, 547, 675, 734],
                },
            ],
        },
        options: {
            responsive: true,
            indexAxis: 'y',
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
            title: {
                display: false,
                text: 'Population growth (millions)',
            },
        },
    });
}

function pieChartMobile() {
    const ctx2 = document.getElementById('pieChartMobile').getContext('2d');
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
                    anchor: 'center',
                    align: 'center',
                    formatter: (value) => {
                        return value + '%';
                    },
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    display: 'auto',
                },
                legend: {
                    position: 'bottom',
                    labels: {
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
function lineChartMobile() {
    const ctx = document.getElementById('lineChartMobile').getContext('2d');
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
