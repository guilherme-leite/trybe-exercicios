"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const monthsNames = Object.values(Months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
