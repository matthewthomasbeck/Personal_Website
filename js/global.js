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


/********** POP UP ANIMATION **********/

/***** pop up function *****/

// used to inflate the project content
function popUp(element) {

    // inflate project title
    element.getElementsByTagName('h1')[0].style.transform = 'scale(1.05)';

    // inflate project image
    element.getElementsByTagName('img')[0].style.transform = 'scale(1.05)';
}

/***** pop down function *****/

// used to deflate the project content
function popDown(element) {

    // deflate project title
    element.getElementsByTagName('h1')[0].style.transform = 'scale(1)';

    // deflate project image
    element.getElementsByTagName('img')[0].style.transform = 'scale(1)';
}