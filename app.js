// console.log("Running from file.")

// yourName = prompt("Enter your name : ");

// alert("Running " + yourName);


//=======================================

//Referenced button and text area using queryselector
var btnTranslate = document.querySelector("#btn-translate");
var txtArea = document.querySelector("#text-input");
var outputTxtDiv = document.querySelector("#output-box");

// serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured",error);
    
}

function clickHandler()
{
    // console.log("clickedd!")
    // console.log(txtArea.value); //.value - to get the input value in the textArea Element
    // outputTxtDiv.innerText = "Button Clicked." //to write text inside the element

    var inputText = txtArea.value;

    fetch(getTranslationURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        // console.log(json); 
        outputTxtDiv.innerText = json.contents.translated; 
    })
    .catch(errorHandler);

    // outputTxtDiv.innerText = "tranlsated";
}



//Button EventListener
btnTranslate.addEventListener("click",clickHandler);