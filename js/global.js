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


/********** IMPORT COLORS **********/

/***** import root colors *****/

// grab primary colors for use in name color changing
const rootStyles = getComputedStyle(document.documentElement);





/****************************************************/
/*************** global.js JAVASCRIPT ***************/
/****************************************************/


/********** NAV BAR NAME POSITIONING **********/

/***** find options and name widths *****/

// get the options button element
const navBarOptionsButton = document.getElementById('navBarOptionsButton');

// get width of the options button
const optionsWidth = navBarOptionsButton.offsetWidth + parseInt(getComputedStyle(navBarOptionsButton).marginLeft);

// get with of the name box
const nameWidth = document.getElementById('navBarNameBox').offsetWidth;

/***** find margins based on auto minus width of options button and name *****/

// find margin-left based on auto minus width of options button plus half of name width
document.getElementById('navBarNameBox').style.marginLeft = 'calc(50% - ' + (optionsWidth + (nameWidth / 2)) + 'px)';

// find margin-right based on auto minus half of name width
document.getElementById('navBarNameBox').style.marginRight = 'calc(50% - ' + (nameWidth / 2) + 'px)';


/********** NAV BAR NAME ANIMATION TRIGGER **********/

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


/********** NAV BAR NAME PROGRAMMER TEXT **********/

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


/********** NAV BAR BUTTON ROTATION **********/

/***** rotate options button *****/

// create event listener for options button
document.getElementById('navBarOptionsButton').addEventListener('click', function() {

    // select the options button and set to variable
    const navBarOptionsButtonBox = document.getElementById('navBarOptionsButton');

    // select the options box and set to variable
    const navBarOptionsBox = document.getElementById('navBarOptionsBox');

    // select the options dimmer and set to variable
    const navBarOptionsDimmer = document.getElementById('navBarOptionsDimmer');

    // toggle the rotation of the options button
    navBarOptionsButtonBox.classList.toggle('rotateNavBarOptionsButton');

    // toggle the visibility of the options box
    navBarOptionsBox.classList.toggle('showNavBarOptionsBox');

    // toggle the visibility of the options dimmer
    navBarOptionsDimmer.classList.toggle('showNavBarOptionsDimmer');
});


/********** OPTIONS DIMMER **********/

/***** remove dimmer on click *****/

// create event listener for options dimmer
document.getElementById('navBarOptionsDimmer').addEventListener('click', function() {

    // select the options button and set to variable
    const navBarOptionsButtonBox = document.getElementById('navBarOptionsButton');

    // select the options box and set to variable
    const navBarOptionsBox = document.getElementById('navBarOptionsBox');

    // select the options dimmer and set to variable
    const navBarOptionsDimmer = document.getElementById('navBarOptionsDimmer');

    // remove the rotation of the options button
    navBarOptionsButtonBox.classList.remove('rotateNavBarOptionsButton');

    // remove the visibility of the options box
    navBarOptionsBox.classList.remove('showNavBarOptionsBox');

    // remove the visibility of the options dimmer
    navBarOptionsDimmer.classList.remove('showNavBarOptionsDimmer');
});


/********** POP UP ANIMATION **********/

/***** pop up function *****/

// used to inflate the project content
function popUp(element) {

    // select header and set to variable
    const elementHeader = element.getElementsByTagName('h1')[0];

    // select image and set to variable
    const elementImage = element.getElementsByTagName('img')[0];

    // select text and set to variable
    const elementText = element.getElementsByTagName('p')[0];

    // if there exists element header...
    if (elementHeader) {

        // inflate the element header
        elementHeader.style.transform = 'scale(1.05)';
    }

    // if there exists an element text...
    if (elementText) {

        // inflate the element text
        elementText.style.transform = 'scale(1.05)';
    }

    // if there exists an element image...
    if (elementImage) {

        // inflate the element image
        elementImage.style.transform = 'scale(1.05)';
    }
}

/***** pop down function *****/

// used to deflate the project content
function popDown(element) {

    // select header and set to variable
    const elementHeader = element.getElementsByTagName('h1')[0];

    // select text and set to variable
    const elementText = element.getElementsByTagName('p')[0];

    // select image and set to variable
    const elementImage = element.getElementsByTagName('img')[0];

    // if there exists element header...
    if (elementHeader) {

        // deflate the element header
        elementHeader.style.transform = 'scale(1)';
    }

    // if there exists an element text...
    if (elementText) {

        // deflate the element text
        elementText.style.transform = 'scale(1)';
    }

    // if there exists an element image...
    if (elementImage) {

        // deflate the element image
        elementImage.style.transform = 'scale(1)';
    }
}