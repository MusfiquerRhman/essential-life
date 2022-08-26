import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Legacy (7345 - 9.10%)', 'Annual (52069 - 64.52%)', 'Active Trial (147 - 0.18%)', 'Inactive Trial (20057 - 24.85%)', 'Not yet selected (1082 - 1.34%)'],
    datasets: [
        {
            label: '#',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255,0.4)',
                'rgba(255, 159, 64, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function CardWithDonutChart() {
    return (
        <div className='cards'>
            <div className='chart__title'>
                <span className='cards__text chart__text'>Users Per Subscription Type</span>
                <span className='chart__value'>(10000 Total)</span>
            </div>
            <div>
                <Doughnut
                    data={data}
                    height={150}
                    width={400}
                    options={{
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'left',
                            },
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default CardWithDonutChart