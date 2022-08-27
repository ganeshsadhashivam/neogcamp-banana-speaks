var userInput = document.querySelector("#txt-input");


 var btnTranslate = document.querySelector("#btn-translate");
   

 var outputDiv = document.querySelector("#output");

     

//var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){

    return  serverURL + "?" + "text=" + text;
}


function errorHandler(error){
     console.log("error occured",error);
     alert("something wrong in server try again after some time");
}


function clickEventHandler(){

     var inputText = userInput.value;

     fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json =>{ 
          var outputText =json.contents.translated;
          outputDiv.innerText = outputText;
     
     }
          )
     .catch(errorHandler)
};



     btnTranslate.addEventListener("click",clickEventHandler);

    

    