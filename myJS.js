/*
* Excercise 1
*
*/
let box = document.getElementById("color-block");
box.addEventListener("click", changeColor);

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    let c = window.getComputedStyle(box).getPropertyValue('background-color');
    //Write a condition determine what color it should be changed to
    if(c == "rgb(240, 128, 128)"){
        //change the background color using JS
        box.style.setProperty('background-color', "#CD7192");
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#CD7192";
    }
    else{
        //change the background color using JS
        box.style.removeProperty('background-color');
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
let btn = document.getElementById("convertbtn");
btn.addEventListener("click", convertTemp);


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let f = document.getElementById("f-input").value;
    let c = (f - 32) * (5/9);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = c;
}


