"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const Months_1 = __importDefault(require("./Months"));
const Seasons_1 = __importDefault(require("./Seasons"));
const monthsNames = Object.values(Months_1.default);
const choiceMonth = readline_sync_1.default.keyInSelect(monthsNames, 'Escolha um mês do ano');
const seasonsSouth = {
    [Seasons_1.default.OUTUMN]: [Months_1.default.MARCH, Months_1.default.APRIL, Months_1.default.MAY, Months_1.default.JUNE],
    [Seasons_1.default.WINTER]: [Months_1.default.JUNE, Months_1.default.JULY, Months_1.default.AUGUST, Months_1.default.SEPTEMBER],
    [Seasons_1.default.SPRING]: [Months_1.default.SEPTEMBER, Months_1.default.OCTOBER, Months_1.default.NOVEMBER, Months_1.default.DECEMBER],
    [Seasons_1.default.SUMMER]: [Months_1.default.DECEMBER, Months_1.default.JANUARY, Months_1.default.FEBRUARY, Months_1.default.MARCH],
};
const seasonsNorth = {
    [Seasons_1.default.SPRING]: seasonsSouth[Seasons_1.default.OUTUMN],
    [Seasons_1.default.SUMMER]: seasonsSouth[Seasons_1.default.WINTER],
    [Seasons_1.default.OUTUMN]: seasonsSouth[Seasons_1.default.SPRING],
    [Seasons_1.default.WINTER]: seasonsSouth[Seasons_1.default.SUMMER],
};
const hemispheres = {
    'North': seasonsNorth,
    'South': seasonsSouth
};
const choiceHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres));
const month = Object.values(Months_1.default)[choiceMonth];
const hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log(`Month: \n${month}`);
console.log(`Hemisphere: \n${hemisphere}`);
console.log(`Seasons:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
