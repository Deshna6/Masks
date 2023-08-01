prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YiWT8Sn3V/model.json',modelLoaded);




function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The  prediction is"+ prediction;
    var utterThis = new SpeechSynthesisUtterance;
    synth.speak(utterThis);
}
//define function check() 
function check()
{
   img = document.getElementById('captured_image');
   classifier.classify(img,gotResult); 
}

//define function gotResult(error, results)
function gotResult(error,results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        document.getElementById("update_emoji").innerHTML = results[0].label;
        prediction_1 = results[0].label;
       
        
        if(results[0].label == "wearing_mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if(results[0].label == "not_wearing_mask")
        {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
       
    }
    }   

