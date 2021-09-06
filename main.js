function recogniseSound(){
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/OQNtrdHud/model.json', modelReady)
};
function modelReady(){
    classifier.classify(gotResults);
}
var Cat = 0;
var Dog = 0;
var Elephant = 0;
var Tiger = 0;

function gotResults(error, results){
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
            (results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color = "rgb("
            +random_number_b+","+random_number_g+","+random_number_r+")";
            document.getElementById("result_confidence").style.color = "rgb("
            +random_number_r+","+random_number_g+","+random_number_b+")";

            img1 = document.getElementById('Cat');
            img2 = document.getElementById('Dog');
            img3 = document.getElementById('Elephant');
            img4 = document.getElementById('Tiger');

            if(results[0].label == "Meowing") {
                img1.src = 'Cat.jpg';
                } else if(results[0].label == "Barking") {
                img2.src = 'Dog.jpg';
                }  else if(results[0].label == "Elephant sounds") {
                img3.src = 'Elephant.jpg';
                }  else {
                img4.src = 'Tiger.jpg';
                }
    }
    }