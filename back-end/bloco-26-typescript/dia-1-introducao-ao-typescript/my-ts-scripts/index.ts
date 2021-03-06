import { exit } from 'process';
import readline from 'readline-sync';
import Months from './Months';
import Seasons from './Seasons';

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano');

const seasonsSouth = {
  [Seasons.OUTUMN]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
}

const seasonsNorth = {
  [Seasons.SPRING]: seasonsSouth[Seasons.OUTUMN],
  [Seasons.SUMMER]: seasonsSouth[Seasons.WINTER],
  [Seasons.OUTUMN]: seasonsSouth[Seasons.SPRING],
  [Seasons.WINTER]: seasonsSouth[Seasons.SUMMER],
}

const hemispheres = {
  'North': seasonsNorth,
  'South': seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres));

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Month: \n${month}`);
console.log(`Hemisphere: \n${hemisphere}`);
console.log(`Seasons:`);

const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];

Object.entries(chosenHemisphereSeasons).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];

    if (months.includes(month)) console.log(seasons);
});