music2 = "";
music1 = "";

function preload()
{
    music2 = loadSound("music2.mp3");
    music1 = loadSound("music.mp3");
}

pulsoEsquerdoX = 0;
pulsoEsquerdoY = 0;

pulsoDireitoX = 0;
pulsoDireitoY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function draw()
{
    image(video, 0, 0, 600, 500);

    music1_status = music1.isPlaying();
    music2_status = music2.isPlaying();

    fill("#FF0000");
stroke("#FF0000");

if(scoreRightWrist > 0.2)
{
circle(rightWristX, righttWristY, 20);
music2.stop();

if(music1_status == false)
{
    music1.play();
    document.getElementById("music").innerHTML = "Tocando: tema harry potter"
}

}

if(scoreLeftWrist > 0.2)
{
circle(leftWristX, leftWristY, 20);
music1.stop();

if(music2_status == false)
{
    music2.play()
    document.getElementById("music").innerHTML ="Tocando : tema peter pan"
}
}
}

function play()
{
music.play();
music.setVolume(1);
music.rate(1);
}


function gotPoses(results)
{
if(results.lenght >0)
    {
console.log(results);
scoreRightWrist = results[0].pose.keypoints[10].score;
scoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

rightWristX = results[0].pose.rightWrist.x;
rightWristX = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + righttWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristX = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristX = " + leftWristX);

    }
}

