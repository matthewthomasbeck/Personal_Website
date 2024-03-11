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





/***************************************************/
/*************** index.js JAVASCRIPT ***************/
/***************************************************/


/********** PORTRAIT SLIDESHOW **********/

/***** create listener *****/

// when page loads...
document.addEventListener("DOMContentLoaded", function () {

    /***** wait for animation to end *****/

    // wait for about me body box to load
    setTimeout(function() {}, 5000);

    /***** initialize variables and process *****/

    // select all elements of slide class and store them as slides
    const slides = document.querySelectorAll('.slide');

    // pre-initialize current slide as 0
    let currentSlide = 0;

    // run slideshow initially
    showSlide();

    /***** create looping *****/

    // function to move slides every 3 seconds
    setInterval(function () {

        // update current slide by incrementing it and taking modulus of number of slides
        currentSlide = (currentSlide + 1) % slides.length;

        // find about me body box and set to variable
        const aboutMeBodyBoxFirstTag = document.getElementById('aboutMeBodyBox').getElementsByTagName('p')[0];

        // if about me content has loaded...
        if (
            aboutMeBodyBoxFirstTag.classList.contains('fadeIn') &&
            aboutMeBodyBoxFirstTag.style.opacity !== '1'
        ) {

            // if portrait 1...
            if (currentSlide === 0) {

                // update name color
                document.getElementsByClassName('fadeInName')[0].style.color = rootStyles.getPropertyValue('--pastel-1');
            }

            // if portrait 2...
            else if (currentSlide === 1) {

                // update name color
                document.getElementsByClassName('fadeInName')[0].style.color = rootStyles.getPropertyValue('--pastel-2');
            }

            // if portrait 3...
            else if (currentSlide === 2) {

                // update name color
                document.getElementsByClassName('fadeInName')[0].style.color = rootStyles.getPropertyValue('--pastel-3');
            }

            // if portrait 4...
            else if (currentSlide === 3) {

                // update name color
                document.getElementsByClassName('fadeInName')[0].style.color = rootStyles.getPropertyValue('--pastel-4');
            }
        }

        // call showSlide to show new current slide
        showSlide();
    }, 3000);

    /***** hide/show slides *****/

    // function to run slide show when called
    function showSlide() {

        // loop through all slides to hide them
        for (let i = 0; i < slides.length; i++) {

            // hide current slide
            slides[i].style.display = 'none';
        }

        // display current slide
        slides[currentSlide].style.display = 'block';
    }
});


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
                const currentID = entry.target.id;

                // if current id about me header...
                if (currentID === 'aboutMeHeader') {

                    // trigger fade in for additional content
                    const aboutMeBodyBoxTags = document.getElementById('aboutMeBodyBox').getElementsByTagName('p');

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

                // if current id skill set header...
                else if (currentID === 'skillSetHeader') {

                    // find skills elements class and set to variable
                    const skills = document.getElementsByClassName('skills');

                    // loop through all skills to apply fade in update
                    for (let i = 0; i < skills.length; i++) {

                        // add animations to each skill with delay
                        setTimeout(function(skill) {

                            // add animations to skill
                            skill.classList.add('fadeIn');
                        }, i * 250, skills[i]);
                    }
                }

                // if current id project info header...
                else if (currentID === 'projectsInfoHeader') {

                    // find projects elements class and set to variable
                    const projects = document.getElementsByClassName('projects');

                    // loop through all projects to apply fade in update
                    for (let i = 0; i < projects.length; i++) {

                        // add animations to each project
                        projects[i].classList.add('fadeIn', 'popUp');

                        // add pop up to each project title
                        projects[i].getElementsByTagName('h1')[0].classList.add('popUp');

                        // add pop up to each project img
                        projects[i].getElementsByTagName('img')[0].classList.add('popUp');
                    }

                    // trigger fade in for additional content
                    document.getElementById('projectsInfoName').classList.add('fadeIn');

                    // add animations to body with delay
                    setTimeout(function() {

                        // trigger fade in for additional content
                        document.getElementById('projectsInfoBody').classList.add('fadeIn');
                    }, 250);
                }

                // if current id contact me header...
                else if (currentID === 'contactMeHeader') {

                    // find contacts elements class and set to variable
                    const contacts = document.getElementsByClassName('contacts');

                    // loop through all contacts to apply fade in update
                    for (let i = 0; i < contacts.length; i++) {

                        // add animations to each contact with a delay
                        setTimeout(function(contact) {

                            // add animations to contact
                            contact.classList.add('fadeIn', 'popUp');
                        }, i * 250, contacts[i]);

                        // add pop up to each contact title
                        contacts[i].getElementsByTagName('h2')[0].classList.add('popUp');

                        // add pop up to each contact img
                        contacts[i].getElementsByTagName('img')[0].classList.add('popUp');
                    }
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

    /***** append header text *****/

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

            // if current id about me header...
            if (currentID === 'aboutMeHeader') {

                // set replacement span content
                replacementText.textContent = "Hello There";
            }

            // if current id my skills header...
            else if (currentID === 'skillSetHeader') {

                // set replacement span content
                replacementText.textContent = "So, What Am I Good At?";
            }

            // if current id projects header...
            else if (currentID === 'projectsInfoHeader') {

                // set replacement span content
                replacementText.textContent = "My Projects:";
            }

            // if current id contact me header...
            else if (currentID === 'contactMeHeader') {

                // set replacement span content
                replacementText.textContent = "Contact Me!";
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



/********** PROJECTS WHEEL **********/

/***** initialize variables *****/

// find projects scroll and store as variable
const projectsWheel = document.getElementById('projectsWheel');

// find projects background and store as variable
const projectsBackground = document.getElementById('projectsBackground');

// find name of project and store as variable
const projectsInfoName = document.getElementById('projectsInfoName');

// find content of project and store as variable
const projectsInfoBody = document.getElementById('projectsInfoBody')

/***** create listener *****/

// when scroll event takes place in projectsWheel...
projectsWheel.addEventListener('scroll', function() {

    /***** scroll wheel *****/

    // update div based on scroll position
    let scrollPosition = projectsWheel.scrollLeft;

    // get the width of a project class item
    let itemWidth = document.querySelector('.projects').offsetWidth * 2;

    // calculate index of currently visible item based on scroll position and item width
    let currentItem = Math.round(scrollPosition / itemWidth);

    /***** replace project info *****/

    // info for machine learning portfolio
    if (currentItem === 0) {

        // set title
        projectsInfoName.textContent = "Machine Learning Portfolio";

        // set content from .txt
        projectsInfoBody.textContent = 'Using a Raspberry Pi 4B, a Coral TPU, TensorFlow, an Nginx web server, and a ' +
            'whole host of data collecting and modeling scripts, I created a portfolio that finds the most volatile ' +
            'financial instruments, predicts their prices, and suggests when you should buy / sell (OBLIGATORY: THIS ' +
            'IS NOT FINANCIAL ADVICE)';
    }

    // info for athena
    else if (currentItem === 1) {

        // set title
        projectsInfoName.textContent = "Project Athena";

        // set content from .txt
        projectsInfoBody.textContent = "Athena is an upcoming robotic dog project in which I will create a 'brain' " +
            "using a Raspberry Pi 4B and an Intel Movidius Neural Compute Stick 2 running OpenVino that will allow a " +
            "robotic dog to somewhat think for itself";
    }

    // info for receipt analyzer
    else if (currentItem === 2) {

        // set title
        projectsInfoName.textContent = "Receipt Analyzer";

        // set content from .txt
        projectsInfoBody.textContent = "I built a Python app that uses Custom TKinter, Matplotlib, Psycopg2, and a " +
            "host of other technologies including its own SQL database in order to better track my spending during " +
            "the early days of university";
    }

    // info for personal website
    else if (currentItem === 3) {

        // set title
        projectsInfoName.textContent = "Personal Website";

        // set content from .txt
        projectsInfoBody.textContent = "This very page you're looking at! Fun fact, I made this website in 4 days " +
            "and with barely any experience in either HTML, CSS, or Javascript; what really helped me move forward " +
            "quickly was thoughtfully crafted Google and ChatGPT queries, prior knowledge in Java, and black coffee";
    }

    // info for video editor
    else if (currentItem === 4) {

        // set title
        projectsInfoName.textContent = "Video Editor";

        // set content from .txt
        projectsInfoBody.textContent = "As Adobe Premiere Pro did not have any kind of API I could use to edit my " +
            "videos automatically (at the time of writing), I created a script that primarily uses PyAutoGUI to " +
            "control my screen and edit videos for me";
    }

    // log current item in index for debugging
    console.log("Current Item:", currentItem);
});