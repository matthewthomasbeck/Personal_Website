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