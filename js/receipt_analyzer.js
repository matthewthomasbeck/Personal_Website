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





/**************************************************************/
/*************** receipt_analyzer.js JAVASCRIPT ***************/
/**************************************************************/


/********** ANIMATION TRIGGER **********/

/***** create listener *****/

// run code when page loads
document.addEventListener("DOMContentLoaded", function () {

    // initialize intersection observer for conclusion header
    const conclusionHeaderObserver = new IntersectionObserver(entries => {

        // loop through each entry
        entries.forEach(entry => {

            // if conclusion header is intersecting...
            if (entry.isIntersecting) {

                // get content text
                const conclusionTags = document.getElementById('receiptAnalyzerConclusion').getElementsByTagName('p');

                // animate content text
                for (let i = 0; i < conclusionTags.length; i++) {

                    // add fade in to all but the last p tags
                    if (i < (conclusionTags.length - 1)) {

                        // set timeout for cascading effect
                        setTimeout(function(pTag) {

                            // print message to test
                            console.log(pTag);

                            // add fade in effect
                            pTag.classList.add('fadeIn');

                        }, i * 250, conclusionTags[i]);
                    }
                }

                // remove observer once completed
                conclusionHeaderObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    /***** create conclusion header observer *****/

    // create conclusion header observer
    const conclusionHeader = document.getElementById('receiptAnalyzerConclusionHeader');

    // if conclusion header exists...
    if (conclusionHeader) {

        // observe conclusion header
        conclusionHeaderObserver.observe(conclusionHeader);
    }
});


/********** CONCLUSION SIGNATURE PROGRAMMER TEXT **********/

/***** create listener *****/

// run code when page loads
document.addEventListener("DOMContentLoaded", function () {

    /***** append skill box header text *****/

    // find all headers that use the programmer typing animation
    const receiptAnalyzerConclusionSignature = document.getElementById('receiptAnalyzerConclusionSignature');

    // once programmer typing animation terminates...
    receiptAnalyzerConclusionSignature.addEventListener('animationend', function(event){

        /***** replace text content *****/

        // create replacement span element
        let replacementText = document.createElement('p');

        // set replacement span content
        replacementText.textContent = "- Matthew Thomas Beck";

        // adjust spacing to center text
        replacementText.style.marginTop = '6%';

        // adjust text align
        replacementText.style.textAlign = 'center';

        // adjust font size for proper scaling
        replacementText.style.fontSize = '130%';

        // apply fancy font to span content
        replacementText.classList.add('fancyFont');

        // replace old span with replacement span
        event.target.innerHTML = "";

        // remove old right border
        event.target.style.borderRightWidth = '0px';

        // commit changes to header
        event.target.appendChild(replacementText);
    });
});