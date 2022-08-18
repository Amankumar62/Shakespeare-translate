var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#txt-output");
var translateBtn = document.querySelector("#txt-btn-translate");

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function getUrl(text){
return serverURL +"?text="+text;
}

function getApi(text){
fetch(getUrl(text))
.then( response => response.json())
.then(json => textOutput.innerText = json.contents.translated)
.catch(errorHandler);
}

function errorHandler(error){
console.log("Error occured :"+error);
}

translateBtn.addEventListener("click" , () => {getApi(textInput.value)});