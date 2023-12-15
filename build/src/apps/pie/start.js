"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PieApp_1 = require("./PieApp");
try {
    new PieApp_1.PieApp().start();
}
catch (e) {
    console.log(e);
    process.exit(1);
}
process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
});
