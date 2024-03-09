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





/****************************************************/
/*************** athena.js JAVASCRIPT ***************/
/****************************************************/

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
                let currentID = entry.target.id;

                // if current id about me header...
                if (currentID === 'aboutMeHeader') {

                    // trigger fade in for additional content
                    const aboutMeBodyBoxTags = document.getElementById('aboutMeBodyBox').getElementsByTagName('p')

                    // loop though all content in about me body box
                    for (let i = 0; i < aboutMeBodyBoxTags.length; i++) {

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
    const programmingHeaders = document.getElementsByClassName('programmerTyping');

    // loop through programmer typing headers
    for (let i = 0; i < programmingHeaders.length; i++) {

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
    const programmingHeaders = document.getElementsByClassName('programmerTyping');

    // loop through each header that uses the programmer typing
    for (let i = 0; i < programmingHeaders.length; i++) {

        // once programmer typing animation terminates...
        programmingHeaders[i].addEventListener('animationend', function(event) {

            /***** replace text content *****/

            // create replacement span element
            let replacementText = document.createElement('h3');

            // find current id
            let currentID = event.target.id;

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
            replacementText.classList.add('fancyFont');

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