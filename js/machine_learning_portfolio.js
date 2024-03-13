/**********************************************************************************/
/* Copyright (c) 2024 Matthew Thomas Beck                                         */
/*                                                                                */
/* All rights reserved. This code and its associated files may not be reproduced, */
/* modified, distributed, or otherwise used, in part or in whole, by any person   */
/* or entity without the express written permission of the copyright holder,      */
/* Matthew Thomas Beck.                                                           */
/**********************************************************************************/





/************************************************************/
/*************** IMPORT / CREATE DEPENDENCIES ***************/
/************************************************************/





/************************************************************************/
/*************** machine_learning_portfolio.js JAVASCRIPT ***************/
/************************************************************************/


/********** INTERACTIVE GRAPH **********/


// Fetch data from the server
fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        // Process data and create a Chart.js chart
        const labels = data.map(entry => entry.date);
        const values = data.map(entry => entry.value);

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Stock Value',
                    data: values,
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    hoverRadius: 7,
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        min: 0,
                    }
                }
            }
        });
    });