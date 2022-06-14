import { exit } from 'process';
import readline from 'readline-sync';
import Months from './Months';
import Seasons from './Seasons';

const monthsNames = Object.values(Months);

const choiceMonth = readline.keyInSelect(monthsNames, 'Escolha um mês do ano')