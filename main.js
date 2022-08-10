var speechrecognition=window.webkitSpeechRecognition;

var recognition=new speechrecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";

    recognition.start();


}

recognition.onresult=function(event)
{

    var content=event.results[0][0].transcript;

 document.getElementById("textbox").innerHTML=content;

if (content=="take my selfie")

{

    speak();

}

    
}

function speak()
{
    var sytn=window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds"

    var uttericemmo=new SpeechSynthesisUtterance(speak_data);

    sytn.speak(uttericemmo);

    
 Webcam.attach(camera);

 setTimeout (function()
 {

    imgid="selfie1"

    take_snapshot();

    speak_data = "taking your selfie in 10 seconds"

    var uttericemmo=new SpeechSynthesisUtterance(speak_data);

    sytn.speak(uttericemmo);


    save();
    
 },5000);
}

setTimeout (function()
 {

    imgid="selfie2"

    take_snapshot();

    speak_data = "taking your selfie in 15 seconds"

    var uttericemmo=new SpeechSynthesisUtterance(speak_data);

    sytn.speak(uttericemmo);


    save();
    
 },10000);
}

setTimeout (function()
 {

    imgid="selfie3"

    take_snapshot();



    save();
    
 },15000);
}

Webcam.set({

    width:360,

    height:250,

    image_format :'png',

    png_quality:90

});

camera=document.getElementById("camera");

function take_snapshot()

{

    Webcam.snap (function(data_uri){

        document.getElementById ("result").innerHTML='<img id="hunderdcompleted" src="'+data_uri+'">';
    });
}

function save()
{

    link=document.getElementById("link");

    image= document.getElementById("hunderdcompleted").src;

    link.href=image;

    link.click();
}
