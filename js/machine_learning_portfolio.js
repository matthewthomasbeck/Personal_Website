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


/********** ANIMATION TRIGGER **********/

/***** create listener *****/

// when pages loads...
document.addEventListener("DOMContentLoaded", function () {

    // initialize intersection observer
    const programmerTypingObserver = new IntersectionObserver(entries => {

        // go through each header with programmer typing
        entries.forEach(entry => {

            /***** trigger programmer typing animation *****/

            // if header is in view...
            if (entry.isIntersecting) {

                // trigger programmer typing animation
                entry.target.classList.add('animateProgrammerTyping');

                /***** trigger fade in animation *****/

                    // find current id and store as variable
                var currentID = entry.target.id;

                // if current id about me header...
                if (currentID === 'aboutMeHeader') {

                    // trigger fade in for additional content
                    aboutMeBodyBoxTags = document.getElementById('aboutMeBodyBox').getElementsByTagName('p')

                    // loop though all content in about me body box
                    for (var i = 0; i < aboutMeBodyBoxTags.length; i++) {

                        // add animations to each p tag with delay
                        setTimeout(function(pTag) {

                            // add animations to p tag
                            pTag.classList.add('fadeIn');
                        }, i * 250, aboutMeBodyBoxTags[i]);
                    }

                    // trigger fade in for additional content
                    document.getElementById('name').classList.add('fadeInName');
                }

                // if current id some other element
                else {

                    // do nothing (placeholder for later)
                }

                // remove observer once completed
                programmerTypingObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    /***** create header observers *****/

        // find all headers that use programmer typing and set to variable
    var programmingHeaders = document.getElementsByClassName('programmerTyping');

    // loop through programmer typing headers
    for (var i = 0; i < programmingHeaders.length; i++) {

        // observe each header
        programmerTypingObserver.observe(programmingHeaders[i]);
    }
});


/********** PROGRAMMER TEXT **********/

/***** create listener *****/

// when page loads...
document.addEventListener("DOMContentLoaded", function () {

    /***** append skill box header text *****/

    // find all headers that use the programmer typing animation
    var programmingHeaders = document.getElementsByClassName('programmerTyping');

    // loop through each header that uses the programmer typing
    for (var i = 0; i < programmingHeaders.length; i++) {

        // once programmer typing animation terminates...
        programmingHeaders[i].addEventListener('animationend', function(event) {

            /***** replace text content *****/

            // create replacement span element
            var replacementText = document.createElement('h3');

            // find current id
            var currentID = event.target.id;

            // if current id nav bar name...
            if (currentID === 'navBarName') {

                // set replacementText to p tag
                replacementText = document.createElement('p');

                // set replacement span content
                replacementText.textContent = "Matthew Thomas Beck";

                // adjust spacing to center text
                replacementText.style.marginTop = '17px';

                // adjust spacing to center text
                replacementText.style.marginBottom = '10px';

                // adjust font size for proper scaling
                replacementText.style.fontSize = '140%';
            }

            // apply fancy font to span content
            replacementText.classList = 'fancyFont';

            // replace old span with replacement span
            event.target.innerHTML = "";

            // remove old right border
            event.target.style.borderRightWidth = '0px';

            // change margin
            event.target.style.margin = '0px';

            // commit changes to header
            event.target.appendChild(replacementText);
        });
    }
});


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