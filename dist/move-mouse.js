"use strict";
// // Importing the required libraries
// import * as robot from 'robotjs';
Object.defineProperty(exports, "__esModule", { value: true });
// // Function to move the mouse cursor to a random position
// function moveMouse() {
//     // Get the screen size
//     const screenSize = robot.getScreenSize();
//     // Generate random coordinates within the screen size
//     const randomX = Math.floor(Math.random() * screenSize.width);
//     const randomY = Math.floor(Math.random() * screenSize.height);
//     // Move the mouse cursor to the random position
//     robot.moveMouseSmooth(randomX, randomY);
// }
// // Function to repeatedly move the mouse cursor every 10 seconds
// function moveMouseRepeatedly() {
//     // Initial mouse movement
//     moveMouse();
//     // Set interval to move the mouse every 10 seconds
//     const intervalId = setInterval(() => {
//         moveMouse();
//     }, 10000); // 10 seconds interval
//     // Listen for user input to terminate
//     process.stdin.setRawMode(true);
//     process.stdin.resume();
//     process.stdin.on('data', (data) => {
//         if (data.toString() === 'q') {
//             clearInterval(intervalId); // Stop the interval
//             console.log('Script terminated.');
//             process.exit();
//         }
//     });
// }
// // Call the function to start moving the mouse cursor
// moveMouseRepeatedly();
// Install first:
// npm install @nut-tree-fork/nut-js
const nut_js_1 = require("@nut-tree-fork/nut-js");
async function moveMouse() {
    const screenSize = await nut_js_1.screen.width(); // ✅ Correct way to get screen width
    const screenHeight = await nut_js_1.screen.height(); // ✅ Correct way to get screen height
    const randomX = Math.floor(Math.random() * screenSize);
    const randomY = Math.floor(Math.random() * screenHeight);
    await nut_js_1.mouse.move((0, nut_js_1.straightTo)(new nut_js_1.Point(randomX, randomY)));
}
async function moveMouseRepeatedly() {
    await moveMouse();
    const intervalId = setInterval(async () => {
        await moveMouse();
    }, 10000); // 10 seconds
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", (data) => {
        if (data.toString() === "q") {
            clearInterval(intervalId);
            console.log("Script terminated.");
            process.exit();
        }
    });
}
moveMouseRepeatedly().catch(console.error);
