"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
const commander_1 = __importDefault(require("commander"));
class Core {
    constructor() {
        this.initApplicationHeader();
        this.startApplication();
    }
    startApplication() {
        commander_1.default.version('0.0.1')
            .option('-l, --list [list]', 'list of customers in CSV file')
            .parse(process.argv);
        console.log(commander_1.default.list);
    }
    initApplicationHeader() {
        const logMessage = boxen_1.default(chalk_1.default.red.bold('NectJS CLI'), {
            padding: 4,
            margin: 0,
            borderColor: 'greenBright',
        });
        console.log(logMessage);
    }
}
exports.Core = Core;
//# sourceMappingURL=../../src/dist/core/index.js.map