const createChart = (ctx, labels, data, colors) => new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors.map(color => `${color}0.2)`),
            borderColor: colors.map(color => color.slice(0, -1) + '1)'),
            borderWidth: 1,
            hoverBackgroundColor: colors.map(color => color.slice(0, -1) + '0.5)')
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.raw + ' horas';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return value + 'h';
                    },
                    color: '#7077A1'
                },
                grid: {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    display: false,
                    drawBorder: true,
                    drawOnChartArea: false,
                    drawTicks: false
                }
            },
            x: {
                ticks: {
                    color: '#7077A1'
                },
                grid: {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    display: false,
                    drawBorder: true,
                    drawOnChartArea: false,
                    drawTicks: false
                }
            }
        }
    }
});

const ctxComputer = document.getElementById('computerChart').getContext('2d');
createChart(ctxComputer, ['Máximo Uso do Computador', 'Uso do Computador'], [3, 6], ['rgba(75, 192, 192, ', 'rgba(54, 162, 235, ']);

const ctxSleep = document.getElementById('sleepChart').getContext('2d');
createChart(ctxSleep, ['Máximo Sono', 'Mínimo Sono', 'Tempo de Sono'], [9, 7, 8], ['rgba(255, 206, 86, ', 'rgba(75, 192, 192, ', 'rgba(153, 102, 255, ']);

const ctxStudy = document.getElementById('studyChart').getContext('2d');
createChart(ctxStudy, ['Estudo Planejado', 'Estudo Realizado'], [2, 1], ['rgba(255, 159, 64, ', 'rgba(255, 99, 132, ']);
