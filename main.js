function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true

    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O5ke39o1U/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
    console.log('modelReady!');

}

function gotResults(error,results){
if(error){
    console.error(error);

}
else{
    console.log(results);
    
}
}