img="";

function preload(){
    img= loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640 , 420);
    canvas.center();
}

function draw() {
    image(img , 0 , 0 , 640 , 420);
    if (status !="")
    {
        for(i = 0;i<objects.length;i++){
        document.getElementById("status").innerHTML = "status : Object has been detected";
        

            fill("#261304");
            percent =floor(objects[i].confidence * 100);
            text(object[i].label + "" + percent +"%",objects[i].x +15, objects[i].y+15);


            noFill()
            stroke("#664932");
            rect(objects[i].x, objects[i].y , objects[i].width , objects[i].height);
    }
}
function modelLoaded () {
    console.log("model Loaded!");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error , results) { 
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}