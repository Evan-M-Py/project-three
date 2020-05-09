import React, { useState } from "react";
import { Polar } from 'react-chartjs-2';

const LineGraph = (props) => {

    const lineGraphData = {
        labels: [ 
            'produce', 
            'bread', 
            'dairy', 
            'meat', 
            'spices',
            'non-parishable'
            ],
        datasets:[ 
            {
                label: 'types of produce',
                backgroundColor: ['#ffd31d',
                '#fae7cb',
                '#ffb385',
                '#ff7272',
                '#f57b51'],
                borderColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: ['#ffd31d',
                '#fae7cb',
                '#ffb385',
                '#ff7272',
                '#f57b51'],
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                data: props.graphData
            }
        ]
    };

    return(
        <div>
             <Polar
                data={lineGraphData}
                height={275}
                width={600}
            />
        </div>
    );
};

export default LineGraph;