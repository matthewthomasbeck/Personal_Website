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
/*************** global.js JAVASCRIPT ***************/
/****************************************************/


/********** NAV BAR NAME POSITIONING **********/

/***** set variables *****/

const navBarOptionsButton = document.getElementById('navBarOptionsButton'); // options button

// get width of options button
const optionsWidth = navBarOptionsButton.offsetWidth + parseInt(getComputedStyle(navBarOptionsButton).marginLeft);
const nameWidth = document.getElementById('navBarNameBox').offsetWidth; // get with of name box

/***** find margins based on auto minus width of options button and name *****/

// find margin-left based on auto minus width of options button plus half of name width
document.getElementById('navBarNameBox').style.marginLeft = 'calc(50% - ' + (optionsWidth + (nameWidth / 2)) + 'px)';

// find margin-right based on auto minus half of name width
document.getElementById('navBarNameBox').style.marginRight = 'calc(50% - ' + (nameWidth / 2) + 'px)';


/********** NAV BAR NAME PROGRAMMER TEXT **********/

/***** set variables *****/

const navBarName = document.getElementById('navBarName'); // find nav bar name

/***** replace text content *****/

navBarName.addEventListener('animationend', function(event) { // once programmer typing animation ends...

    /***** set variables *****/

    const replacementText = document.createElement('p'); // set replacementText

    /***** replace text content *****/

    replacementText.textContent = "Matthew Thomas Beck"; // set replacement span content

    replacementText.style.fontSize = '140%'; // adjust font size for proper scaling

    replacementText.classList.add('fancyFont'); // apply fancy font to span content

    event.target.innerHTML = ""; // replace old span with replacement span

    event.target.style.borderRightWidth = '0px'; // remove old right border

    event.target.appendChild(replacementText); // commit changes to header
});


/********** NAV BAR BUTTON ROTATION **********/

/***** rotate options button *****/

// create event listener for options button
document.getElementById('navBarOptionsButton').addEventListener('click', function() {

    /***** set variables *****/

    // options button
    const navBarOptionsButtonBox = document.getElementById('navBarOptionsButton');
    const navBarOptionsBox = document.getElementById('navBarOptionsBox'); // options box
    const navBarOptionsDimmer = document.getElementById('navBarOptionsDimmer'); // options dimmer

    /***** rotate options button *****/

    navBarOptionsButtonBox.classList.toggle('rotateNavBarOptionsButton'); // toggle rotation of options button

    navBarOptionsBox.classList.toggle('showNavBarOptionsBox'); // toggle visibility of options box

    navBarOptionsDimmer.classList.toggle('showNavBarOptionsDimmer'); // toggle visibility of options dimmer
});


/********** OPTIONS DIMMER **********/

/***** remove dimmer on click *****/

// create event listener for options dimmer
document.getElementById('navBarOptionsDimmer').addEventListener('click', function() {

    /***** set variables *****/

    // options button
    const navBarOptionsButtonBox = document.getElementById('navBarOptionsButton');
    const navBarOptionsBox = document.getElementById('navBarOptionsBox'); // options box
    const navBarOptionsDimmer = document.getElementById('navBarOptionsDimmer'); // options dimmer

    /***** remove dimmer *****/

    navBarOptionsButtonBox.classList.remove('rotateNavBarOptionsButton'); // remove rotation of options button

    navBarOptionsBox.classList.remove('showNavBarOptionsBox'); // remove visibility of options box

    navBarOptionsDimmer.classList.remove('showNavBarOptionsDimmer'); // remove visibility of options dimmer
});


/********** POP UP FUNCTION **********/

function popUp(element) { // used to inflate the project content

    /***** set variables *****/

    const elementHeaderOne = element.getElementsByTagName('h1')[0]; // select header and set to variable
    const elementHeaderTwo = element.getElementsByTagName('h2')[0]; // select header and set to variable
    const elementImage = element.getElementsByTagName('img')[0]; // select image and set to variable
    const elementText = element.getElementsByTagName('p')[0]; // select text and set to variable
    const elementAnchor = element.getElementsByTagName('a')[0]; // select anchor and set to variable

    /***** pop up the element *****/

    if (elementHeaderOne) { // if there exists element header...

        elementHeaderOne.style.transform = 'scale(1.05)'; // inflate the element header
    }

    if (elementHeaderTwo) { // if there exists element header...

        elementHeaderTwo.style.transform = 'scale(1.05)'; // inflate the element header
    }

    if (elementText) { // if there exists an element text...

        elementText.style.transform = 'scale(1.05)'; // inflate the element text
    }

    if (elementImage) { // if there exists an element image...

        elementImage.style.transform = 'scale(1.05)'; // inflate the element image
    }

    if (elementAnchor) { // if there exists an element list item...

        elementAnchor.style.fontSize = '105%'; // inflate the element anchor
    }
}

/********** POP DOWN FUNCTION **********/

function popDown(element) { // used to deflate the project content

    /***** set variables *****/

    const elementHeaderOne = element.getElementsByTagName('h1')[0]; // select header and set to variable
    const elementHeaderTwo = element.getElementsByTagName('h2')[0]; // select header and set to variable
    const elementText = element.getElementsByTagName('p')[0]; // select text and set to variable
    const elementImage = element.getElementsByTagName('img')[0]; // select image and set to variable
    const elementAnchor = element.getElementsByTagName('a')[0]; // select anchor and set to variable

    /***** pop down the element *****/

    if (elementHeaderOne) { // if there exists element header...

        elementHeaderOne.style.transform = 'scale(1)'; // deflate the element header
    }

    if (elementHeaderTwo) { // if there exists element header...

        elementHeaderTwo.style.transform = 'scale(1)'; // deflate the element header
    }

    if (elementText) { // if there exists an element text...

        elementText.style.transform = 'scale(1)'; // deflate the element text
    }

    if (elementImage) { // if there exists an element image...

        elementImage.style.transform = 'scale(1)'; // deflate the element image
    }

    if (elementAnchor) { // if there exists an element list item...

        elementAnchor.style.fontSize = '100%'; // deflate the element anchor
    }
}


/********** INDEX ADJUSTMENT **********/

/***** set variables *****/

// select all headers in index box
const sectionHeaderLinks = document.querySelectorAll('#indexBox a');
const navHeight = 60; // set nav height

/***** adjust the index to jump minus 60 pixels *****/

sectionHeaderLinks.forEach(function(link) { // loop through each link

    link.addEventListener('click', function(event) { // when link clicked...

        /***** set variables *****/

        let targetId = this.getAttribute('href').substring(1); // get target id
        let targetElement = document.getElementById(targetId); // get target element

        /***** scroll to target position *****/

        if (targetElement) { // if target element exists...

            let targetPosition = targetElement.offsetTop - navHeight; // get target position

            window.scrollTo({ // scroll to target position

                top: targetPosition, // set top to target position

                behavior: 'smooth' // set behavior to smooth to make it pretty
            });

            event.preventDefault(); // prevent default behavior in order to allow for nav bar pixel offset
        }
    });
});