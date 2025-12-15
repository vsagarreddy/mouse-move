"use strict";
// // Importing the required libraries
// import * as robot from 'robotjs';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var nut_js_1 = require("@nut-tree-fork/nut-js");
function moveMouse() {
    return __awaiter(this, void 0, void 0, function () {
        var screenSize, screenHeight, randomX, randomY;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nut_js_1.screen.width()];
                case 1:
                    screenSize = _a.sent();
                    return [4 /*yield*/, nut_js_1.screen.height()];
                case 2:
                    screenHeight = _a.sent();
                    randomX = Math.floor(Math.random() * screenSize);
                    randomY = Math.floor(Math.random() * screenHeight);
                    return [4 /*yield*/, nut_js_1.mouse.move((0, nut_js_1.straightTo)(new nut_js_1.Point(randomX, randomY)))];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function moveMouseRepeatedly() {
    return __awaiter(this, void 0, void 0, function () {
        var intervalId;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, moveMouse()];
                case 1:
                    _a.sent();
                    intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, moveMouse()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 10000);
                    process.stdin.setRawMode(true);
                    process.stdin.resume();
                    process.stdin.on("data", function (data) {
                        if (data.toString() === "q") {
                            clearInterval(intervalId);
                            console.log("Script terminated.");
                            process.exit();
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
moveMouseRepeatedly().catch(console.error);
