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


/********** IMPORT JSON DATA FUNCTION **********/

async function fetchData(financialInstrument) { // function to fetch json data

    /***** set variables *****/

    // set path to json data with financial instrument
    let financialInstrumentDataPath = `../assets/machine_learning_portfolio/data/${financialInstrument}Data.json`;

    /***** read data *****/

    try { // attempt to read json data...

        const response = await fetch(financialInstrumentDataPath); // fetch data from json file

        if (!response.ok) { // if response is not ok...

            throw new Error('Network response was not ok.\n'); // print failure statement
        }

        const financialInstrumentData = await response.json(); // parse json data

        return financialInstrumentData; // return json data
    }

    catch (error) { // if unable to fetch json...

        console.error(`Error retrieving the json file: "${error}"\n`); // print failure statement

        return null; // terminate process with error
    }
}





/************************************************************************/
/*************** machine_learning_portfolio.js JAVASCRIPT ***************/
/************************************************************************/


/********** DETERMINE POSITIVE OR NEGATIVE **********/

function updateMovementValue(tableElement, movement) { // function to update movement value

    /***** check if positive or negative *****/

    if (movement < 0) { // if movement is negative...

        tableElement.style.color = 'red'; // set color to red
        tableElement.textContent = movement + '%'; // set value text

    } else { // if movement is positive...

        tableElement.style.color = 'green'; // set color to green
        tableElement.textContent = '+' + movement + '%'; // set value text
    }
}


/********** CREATE FINANCIAL INSTRUMENT TABLES **********/

/***** set variables *****/

// collect all categories of financial instruments from category class
const financialInstrumentTags = document.querySelectorAll('.financialInstrument');
const financialInstruments = [] // array to hold all financial instrument categories

/***** collect each category *****/

financialInstrumentTags.forEach(financialInstrumentTag => { // loop to collect names

    let textContent = financialInstrumentTag.textContent.trim().toLowerCase(); // set category to lowercase

    if (textContent === "foreign exchange") { // if category is foreign exchange...

        financialInstruments.push("foreignExchange"); // add category to array
    }

    else { // if category is not foreign exchange...

        financialInstruments.push(textContent); // add category to array
    }
});

/***** function to create a table *****/

document.addEventListener('DOMContentLoaded', async function () {

    async function createTables(financialInstrument) {

        /***** try to create table *****/

        try { // attempt to create table...

            /***** fetch data *****/

            const financialInstrumentData = await fetchData(financialInstrument); // fetch data from json file

            /***** set variables *****/

            let nameList = []; // array to hold names of financial instruments
            let colorList = []; // array to hold colors of financial instruments
            let predictionAccuracyList = []; // array to hold prediction accuracy of financial instruments
            let prediction1List = []; // array to hold first prediction of financial instruments
            let prediction2List = []; // array to hold second prediction of financial instruments
            let prediction3List = []; // array to hold third prediction of financial instruments
            let movementProjectedList = []; // array to hold projected movement of financial instruments
            let movementWeekList = []; // array to hold movement of financial instruments over past week
            let movementMonthList = []; // array to hold movement of financial instruments over past month
            let movementThreeMonthsList = []; // array to hold movement of financial instruments over past three months
            let movementYearList = []; // array to hold movement of financial instruments over past year
            let movementMaxList = []; // array to hold movement of financial instruments over maximum time frame
            const tableID = financialInstrument + 'Tables'; // set table id based on financial instrument
            const headerID = '#' + financialInstrument + 'Header'; // set header id based on financial instrument

            const table = document.getElementById(tableID); // find table based on id

            /***** fill respective data *****/

            financialInstrumentData.forEach(item => {

                nameList.push(item['Name']);
                colorList.push(item['Color']);
                predictionAccuracyList.push(item['Prediction Accuracy']);
                prediction1List.push(item['Prediction 1']);
                prediction2List.push(item['Prediction 2']);
                prediction3List.push(item['Prediction 3']);
                movementProjectedList.push(item['Projected Movement']);
                movementWeekList.push(item['Movement One Week']);
                movementMonthList.push(item['Movement One Month']);
                movementThreeMonthsList.push(item['Movement Three Months']);
                movementYearList.push(item['Movement Year To Day']);
                movementMaxList.push(item['Movement All Time']);
            });

            /***** create tables with collected data *****/

            for (let i = 0; i < nameList.length; i++) { // loop through each financial instrument

                /***** set variables *****/

                const name = nameList[i]; // set name
                const predictionAccuracy = predictionAccuracyList[i]; // set prediction accuracy
                const prediction1 = prediction1List[i]; // set prediction 1
                const prediction2 = prediction2List[i]; // set prediction 2
                const prediction3 = prediction3List[i]; // set prediction 3
                const movementProjected = movementProjectedList[i]; // set projected movement
                const movementWeek = movementWeekList[i]; // set movement over past week
                const movementMonth = movementMonthList[i]; // set movement over past month
                const movementThreeMonths = movementThreeMonthsList[i]; // set movement over past three months
                const movementYear = movementYearList[i]; // set movement over past year
                const movementMax = movementMaxList[i]; // set movement over maximum time frame

                /***** create table box *****/

                const a = document.createElement('a'); // create list item to hold the table
                a.className = 'standardFont financialInstrumentTableItems indexContent popUp'; // add behavior classes
                a.setAttribute('onmouseover', 'popUp(this)'); // add pop up
                a.setAttribute('onmouseout', 'popDown(this)'); // add pop down
                a.style.backgroundColor = colorList[i]; // set colors
                a.href = headerID; // set href to jump to financial instrument header

                /***** create table header *****/

                const header = document.createElement('h2'); // create header with name
                header.className = 'standardFont tableItemsHeader'; // add header class
                header.textContent = name; // set header text
                a.appendChild(header); // add header to table

                /***** create table content box *****/

                const contentBox = document.createElement('div'); // create content box
                contentBox.className = 'tableItemsContentBox'; // add content box class

                /***** create prediction accuracy *****/

                // create box to hold prediction accuracy label and value
                const predictionAccuracyBox = document.createElement('div');
                predictionAccuracyBox.classList.add('tableItemsMetricBox'); // add metric box class

                // create label for prediction accuracy
                const predictionAccuracyLabel = document.createElement('h3');
                predictionAccuracyLabel.className = 'tableItemsMetricLabel'; // add label class
                predictionAccuracyLabel.textContent = 'Prediction Accuracy: '; // set label text
                predictionAccuracyBox.appendChild(predictionAccuracyLabel); // add label to box

                // create value for prediction accuracy
                const predictionAccuracyValue = document.createElement('p');
                predictionAccuracyValue.className = 'tableItemsMetricValue'; // add label class
                predictionAccuracyValue.textContent = predictionAccuracy + '%'; // set value text
                predictionAccuracyBox.appendChild(predictionAccuracyValue); // add value to box

                contentBox.appendChild(predictionAccuracyBox); // add prediction accuracy box to content box*/

                /***** create prediction 1 *****/

                // create box to hold prediction 1 label and value
                const prediction1Box = document.createElement('div');
                prediction1Box.classList.add('tableItemsMetricBox'); // add content box class

                // create label for prediction 1
                const prediction1Label = document.createElement('h3');
                prediction1Label.className = 'tableItemsMetricLabel'; // add label class
                prediction1Label.textContent = 'Prediction 1: '; // set label text
                prediction1Box.appendChild(prediction1Label); // add label to box

                // create value for prediction 1
                const prediction1Value = document.createElement('p');
                prediction1Value.className = 'tableItemsMetricValue'; // add value class
                prediction1Value.textContent = '$' + prediction1; // set value text
                prediction1Box.appendChild(prediction1Value); // add value to box

                contentBox.appendChild(prediction1Box); // add prediction 1 box to content box

                /***** create prediction 2 *****/

                // create box to hold prediction 2 label and value
                const prediction2Box = document.createElement('div');
                prediction2Box.classList.add('tableItemsMetricBox'); // add content box class

                // create label for prediction 2
                const prediction2Label = document.createElement('h3');
                prediction2Label.className = 'tableItemsMetricLabel'; // add label class
                prediction2Label.textContent = 'Prediction 2: '; // set label text
                prediction2Box.appendChild(prediction2Label); // add label to box

                // create value for prediction 2
                const prediction2Value = document.createElement('p');
                prediction2Value.className = 'tableItemsMetricValue'; // add value class
                prediction2Value.textContent = '$' + prediction2; // set value text
                prediction2Box.appendChild(prediction2Value); // add value to box

                contentBox.appendChild(prediction2Box); // add prediction 2 box to content box

                /***** create prediction 3 *****/

                // create box to hold prediction 3 label and value
                const prediction3Box = document.createElement('div');
                prediction3Box.classList.add('tableItemsMetricBox'); // add content box class

                // create label for prediction 3
                const prediction3Label = document.createElement('h3');
                prediction3Label.className = 'tableItemsMetricLabel'; // add label class
                prediction3Label.textContent = 'Prediction 3: '; // set label text
                prediction3Box.appendChild(prediction3Label); // add label to box

                // create value for prediction 3
                const prediction3Value = document.createElement('p');
                prediction3Value.className = 'tableItemsMetricValue'; // add value class
                prediction3Value.textContent = '$' + prediction3; // set value text
                prediction3Box.appendChild(prediction3Value); // add value to box

                contentBox.appendChild(prediction3Box); // add prediction 3 box to content box

                /***** create projected movement *****/

                // create box to hold projected movement label and value
                const movementProjectedBox = document.createElement('div');
                movementProjectedBox.classList.add('tableItemsMetricBox'); // add content box class

                // create label for projected movement
                const movementProjectedLabel = document.createElement('h3');
                movementProjectedLabel.className = 'tableItemsMetricLabel'; // add label class
                movementProjectedLabel.textContent = 'Projected Movement: '; // set label text
                movementProjectedBox.appendChild(movementProjectedLabel); // add label to box

                // create value for projected movement
                const movementProjectedValue = document.createElement('p');
                movementProjectedValue.className = 'tableItemsMetricValue'; // add value class
                updateMovementValue(movementProjectedValue, movementProjected); // update movement value
                movementProjectedBox.appendChild(movementProjectedValue); // add value to box
                contentBox.appendChild(movementProjectedBox); // add projected movement box to content box

                /***** create movement over past week *****/

                // create box to hold movement over past week label and value
                const movementWeekBox = document.createElement('div');

                // add content box class
                movementWeekBox.className = 'tableItemsMetricBox movement7 tableTimeFrame active';

                // create label for movement over past week
                const movementWeekLabel = document.createElement('h3');
                movementWeekLabel.className = 'tableItemsMetricLabel'; // add label class
                movementWeekLabel.textContent = 'Movement One Week: '; // set label text
                movementWeekBox.appendChild(movementWeekLabel); // add label to box

                // create value for movement over past week
                const movementWeekValue = document.createElement('p');
                updateMovementValue(movementWeekValue, movementWeek); // update movement value
                movementWeekValue.className = 'tableItemsMetricValue'; // add value class
                movementWeekBox.appendChild(movementWeekValue); // add value to box
                contentBox.appendChild(movementWeekBox); // add movement over past week box to content box

                /***** create movement over past month *****/

                // create box to hold movement over past month label and value
                const movementMonthBox = document.createElement('div');
                movementMonthBox.className = 'tableItemsMetricBox movement30 tableTimeFrame'; // add content box class

                // create label for movement over past month
                const movementMonthLabel = document.createElement('h3');
                movementMonthLabel.className = 'tableItemsMetricLabel'; // add label class
                movementMonthLabel.textContent = 'Movement One Month: '; // set label text
                movementMonthBox.appendChild(movementMonthLabel); // add label to box

                // create value for movement over past month
                const movementMonthValue = document.createElement('p');
                updateMovementValue(movementMonthValue, movementMonth); // update movement value
                movementMonthValue.className = 'tableItemsMetricValue'; // add value class
                movementMonthBox.appendChild(movementMonthValue); // add value to box
                contentBox.appendChild(movementMonthBox); // add movement over past month box to content box

                /***** create movement over past three months *****/

                // create box to hold movement over past three months label and value
                const movementThreeMonthsBox = document.createElement('div');

                // add content box class
                movementThreeMonthsBox.className = 'tableItemsMetricBox movement90 tableTimeFrame';

                // create label for movement over past three months
                const movementThreeMonthsLabel = document.createElement('h3');
                movementThreeMonthsLabel.className = 'tableItemsMetricLabel'; // add label class
                movementThreeMonthsLabel.textContent = 'Movement Three Months: '; // set label text
                movementThreeMonthsBox.appendChild(movementThreeMonthsLabel); // add label to box

                // create value for movement over past three months
                const movementThreeMonthsValue = document.createElement('p');
                updateMovementValue(movementThreeMonthsValue, movementThreeMonths); // update movement value
                movementThreeMonthsValue.className = 'tableItemsMetricValue'; // add value class
                movementThreeMonthsBox.appendChild(movementThreeMonthsValue); // add value to box
                contentBox.appendChild(movementThreeMonthsBox); // add movement past three months box to content box

                /***** create movement over past year *****/

                // create box to hold movement over past year label and value
                const movementYearBox = document.createElement('div');
                movementYearBox.className = 'tableItemsMetricBox movement365 tableTimeFrame'; // add content box class

                // create label for movement over past year
                const movementYearLabel = document.createElement('h3');
                movementYearLabel.className = 'tableItemsMetricLabel'; // add label class
                movementYearLabel.textContent = 'Movement One Year: '; // set label text
                movementYearBox.appendChild(movementYearLabel); // add label to box

                // create value for movement over past year
                const movementYearValue = document.createElement('p');
                updateMovementValue(movementYearValue, movementYear); // update movement value
                movementYearValue.className = 'tableItemsMetricValue'; // add value class
                movementYearBox.appendChild(movementYearValue); // add value to box
                contentBox.appendChild(movementYearBox); // add movement over past year box to content box

                /***** create movement over maximum time frame *****/

                // create box to hold movement over maximum time frame label and value
                const movementMaxBox = document.createElement('div');
                movementMaxBox.className = 'tableItemsMetricBox movementMax tableTimeFrame'; // add content box class

                // create label for movement over maximum time frame
                const movementMaxLabel = document.createElement('h3');
                movementMaxLabel.className = 'tableItemsMetricLabel'; // add label class
                movementMaxLabel.textContent = 'Movement Max: '; // set label text
                movementMaxBox.appendChild(movementMaxLabel); // add label to box

                // create value for movement over maximum time frame
                const movementMaxValue = document.createElement('p');
                updateMovementValue(movementMaxValue, movementMax); // update movement value
                movementMaxValue.className = 'tableItemsMetricValue'; // add value class
                movementMaxBox.appendChild(movementMaxValue); // add value to box
                contentBox.appendChild(movementMaxBox); // add movement over maximum time frame box to content box

                /***** add data and table to document *****/

                a.appendChild(contentBox); // add content box to table
                table.appendChild(a); // add table to list
            }
        }

        /***** log error if unable to fetch data *****/

        catch (error) { // if unable to fetch json...

            console.error(`Error collecting ${financialInstrument} data: "${error}"\n`); // print failure statement

            return null; // terminate process with error
        }
    }

    /***** loop through every category *****/

    // loop through every category calling createTables function
    financialInstruments.forEach(financialInstrument => {

        createTables(financialInstrument); // create table for each category
    });
});


/********** TIME FRAME BUTTON ADJUSTMENT **********/

function changeTextByDeviceSize() { // function to change content based on device size

    /***** set variables *****/

    // set device width
    var deviceWidth = window.innerWidth;

    /***** small devices *****/

    if (deviceWidth < 501) { // if small device...

        document.getElementById("stocksButton7").textContent = "W"; // set text one week
        document.getElementById("stocksButton30").textContent = "M"; // set text one month
        document.getElementById("stocksButton90").textContent = "3M"; // set text three months
        document.getElementById("stocksButton365").textContent = "YTD"; // set text year to day
        document.getElementById("stocksButtonMax").textContent = "Max"; // set text maximum
    }

    /***** medium devices *****/

    else if (deviceWidth >= 501 && deviceWidth < 1025) { // if medium device...

        document.getElementById("stocksButton7").textContent = "One Week"; // set text one week
        document.getElementById("stocksButton30").textContent = "One Month"; // set text one month
        document.getElementById("stocksButton90").textContent = "Three Months"; // set text three months
        document.getElementById("stocksButton365").textContent = "Year To Day"; // set text year to day
        document.getElementById("stocksButtonMax").textContent = "Maximum"; // set text maximum
    }

    /***** large devices *****/

    else { // if large device...

        document.getElementById("stocksButton7").textContent = "One Week"; // set text one week
        document.getElementById("stocksButton30").textContent = "One Month"; // set text one month
        document.getElementById("stocksButton90").textContent = "Three Months"; // set text three months
        document.getElementById("stocksButton365").textContent = "Year To Day"; // set text year to day
        document.getElementById("stocksButtonMax").textContent = "Maximum"; // set text maximum
    }
}

changeTextByDeviceSize(); // initially call the function

window.addEventListener("resize", changeTextByDeviceSize); // call function whenever window is resized


/********** TIME FRAME SELECTION **********/

function showMetrics(plotId, movementClass, button) {

    /***** set variables *****/

    // collect all associated graphs
    const graphs = document.getElementsByClassName("financialInstrumentGraph");
    const plot = document.getElementById(plotId); // find plot based on id

    // collect all associated tables
    const totalTimeFrames = document.getElementsByClassName("tableTimeFrame");

    // find time frame based on class
    const specificTimeFrame = document.getElementsByClassName(movementClass);

    // collect all associated buttons
    const buttons = document.getElementsByClassName("timeFrameButton");

    /***** remove active state metrics *****/

    for (let i = 0; i < graphs.length; i++) {

        graphs[i].classList.remove("active"); // remove active state from all graphs
    }

    // loop through all time frames to remove active state
    for (let i = 0; i < totalTimeFrames.length; i++) {

        totalTimeFrames[i].classList.remove("active"); // remove active state from all tables
    }

    /***** show selected metrics *****/

    if (plot) { // if plot exists...

        plot.classList.add("active"); // show plot

        // loop through all entries of a specific time frame
        for (let i = 0; i < specificTimeFrame.length; i++) {

            specificTimeFrame[i].classList.add("active"); // show time frame
        }
    }

    /***** remove active state buttons *****/

    for (let i = 0; i < buttons.length; i++) { // loop through all buttons

        buttons[i].classList.remove("active"); // remove active state from all buttons
    }

    button.classList.add("active"); // add active state to clicked button
}


/********** TABLE JUMP ADJUSTMENT **********/

/***** set variables *****/

document.querySelector('.financialInstrumentTable').addEventListener('click', function(event) {

    let anchor = event.target.closest('a'); // use closest anchor because the regular way doesn't work

    if (anchor) { // if anchor exists...

        let href = anchor.getAttribute('href'); // get href to jump to

        if (href) { // if href exists...

            let targetId = href.substring(1); // get target id
            let targetElement = document.getElementById(targetId); // get target element

            if (targetElement) { // if target element exists...

                let targetPosition = targetElement.offsetTop - NAV_HEIGHT; // get target position

                window.scrollTo({ // scroll to target position

                    top: targetPosition, // set top to target position

                    behavior: 'smooth' // set behavior to smooth to make it pretty
                });

                event.preventDefault(); // prevent default behavior in order to allow for nav bar pixel offset
            }
        }
    }
});