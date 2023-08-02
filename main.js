
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Qlmva2UOQ/model.json', modelReady)}
function modelReady(){
    classifier.classify(gotResults);
    
}
var dog=0
var cat=0
function gotResults(error,results){
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
    
     r=Math.floor(Math.random()*225)+1;
        g=Math.floor(Math.random()*225)+1;
        b=Math.floor(Math.random()*225)+1;
        document.getElementById("animal").innerHTML='animal sound- '+ results[0].label;
        document.getElementById("animal").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("cat_number").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("cat_number").innerHTML="# of dog sounds="+dog+",# of cat sounds="+cat+"";
       image=document.getElementById("listen");
        if(results[0].label=="dog"){
            image.src="cat.jpg";
            dog=dog+1;
        }
       else if(results[0].label=="cat")
       {
            image.src="dog.jpg";
            cat=cat+1;
        } 
        else {
        image.src="listen.png";
    }}
}
