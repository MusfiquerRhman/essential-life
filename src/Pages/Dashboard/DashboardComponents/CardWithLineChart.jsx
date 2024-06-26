import {
    CategoryScale, Chart as ChartJS, Filler, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = [1,2,3,4,5,6,7,8,9,10];

export const data = {
    labels,
    datasets: [
        {
            data: [100, 74, 58, 55, 110, 74, 10, 50, 80, 50],
            borderColor: ['rgba(54, 162, 235, 1)'],
            fill: true,
            backgroundColor: ['rgba(54, 162, 235, 0.4)'],
        }
    ],
};

const CardWithLineChart = React.memo(({text}) => {
    return (
        <div className='cards__line'>
            <div className='card__title--box'>
                <p className='cards__text chart__text'>{text}</p>
                <select name="Days" id="days">
                    <option disabled value="30">Days</option>
                    <option value="30">30 Days</option>
                    <option value="60">60 Days</option>
                    <option value="90">90 Days</option>
                </select>
            </div>
            <span className='cards__value'>500</span>
            <div className='chart'>
                <Line
                    data={data}
                    height={100}
                    width={410}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                                title: {
                                    display: false
                                }
                            },
                        },
                        scales: {
                            x: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                },
                            },
                            y: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false,
                                    drawBorder: false,
                                }
                            }
                        },
                        layout: {
                            padding: {
                                bottom: -100
                            }
                        },
                    }}
                />
            </div>
        </div>
    )
})

export default CardWithLineChart