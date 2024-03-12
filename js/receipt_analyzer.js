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


/********** FADE IN ANIMATION **********/

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
                for (let i = 0; i < (conclusionTags.length - 1); i++) {

                    // set timeout for cascading effect
                    setTimeout(function(pTag) {

                        // add fade in effect
                        pTag.classList.add('fadeIn');

                    }, i * 250, conclusionTags[i]);
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


/********** PROGRAMMER TYPING SIGNATURE **********/

// run code when page loads
document.addEventListener("DOMContentLoaded", function () {

    /***** create constants to observe *****/

    // find final tag
    const finalTag = document.getElementById('receiptAnalyzerConclusion').getElementsByTagName('p')[4];

// get content signature box text
    const conclusionSignatureBox = document.getElementById('receiptAnalyzerConclusionSignature')

    /***** observe last fade in *****/

    // add event listener for fade in
    finalTag.addEventListener('animationend', function(event) {

        // add programmer typing animation to signature box once all other animations are complete
        setTimeout(function(signatureBox) {

            // make signature box visible
            signatureBox.style.color = 'white';

            // add programmer typing animation to signature box
            signatureBox.classList.add('programmerTyping');

            // add animate programmer typing animation to signature box
            signatureBox.classList.add('animateProgrammerTyping');

            // adjust font size
            signatureBox.style.fontSize = '100%';

        }, 250, conclusionSignatureBox);
    });

    /***** observe programmer typing end *****/

    // add event listener for programmer typing
    conclusionSignatureBox.addEventListener('animationend', function(event) {

        // create replacement span element
        let replacementText = document.createElement('p');

        // set replacement span content
        replacementText.textContent = "- Matthew Thomas Beck";

        // adjust margin
        replacementText.style.margin = '0px';

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