noseX=0;
noseY=0;


function preload() { 
    mustache = loadImage('https://i.postimg.cc/B62VN54z/71da89b7f593bc025c1a007390dd74df-removebg-preview.png');   
}


function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet  = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-40;
        noseY = results[0].pose.nose.y+15;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    // circle(noseX, noseY, 20);
    image(mustache, noseX, noseY, 90, 30);
}


function take_snapshot(){
    save('myFilterImage.png');
}