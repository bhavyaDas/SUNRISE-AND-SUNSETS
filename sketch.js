const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var hour, minutes, amPm = ["am", "pm"]
var response, responseJSON, dateTime

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {

    // add condition to check if any background image is there to add
    if (bg) {
        background(bg)
    } else {
        background("red")
    }


    Engine.update(engine);

    // write code to display time in correct format here

    if (hour < 12 && hour > 0) {
        amPm = "am"
    } else if (hour >= 12) {
        console.log(amPm)
        amPm = "pm"
    } else if (hour == 0) {
        amPm = "am"
    }
    text(`Time:${hour}:${minutes}${amPm}`, 20, 20)
}

async function getBackgroundImg() {

    // write code to fetch time from API
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
    responseJSON = await response.json()
    //took the dattime from json file
    dateTime = responseJSON.datetime
    // write code slice the datetime
    hour = dateTime.slice(11, 13)
    minutes = dateTime.slice(14, 16)

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 04 && hour <= 06) {
        bg = loadImage("sunsrise1.png")
    } else if (hour >= 06 && hour <= 08) {
        bg = loadImage("sunsrise2.png")
    } else if (hour >= 08 && hour <= 11) {
        bg = loadImage("sunsrise3.png")
    } else if (hour >= 11 && hour <= 13) {
        bg = loadImage("sunsrise4.png")
    } else if (hour >= 13 && hour <= 15) {
        bg = loadImage("sunsrise5.png")
    } else if (hour >= 15 && hour <= 17) {
        bg = loadImage("sunsrise6.png")
    } else if (hour >= 17 && hour <= 18) {
        bg = loadImage("sunset7.png")
    }
    else if (hour >= 18 && hour <= 20) {
        bg = loadImage("sunset8.png")
    } else if (hour >= 20 && hour <= 23) {
        bg = loadImage("sunset9.png")
    } else if (hour >= 23 && hour <= 0) {
        bg = loadImage("sunset10.png")
    } else if (hour >= 0 && hour <= 03) {
        bg = loadImage("sunset11.png")
    } else {
        bg = loadImage("susnset12.png")
    }



}
