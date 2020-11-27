#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainCalcRules, brainCalcCorrectAnswer, brainCalcQuestion } from '../src/games/brain-calc-module.js';

startGame(brainCalcRules, brainCalcQuestion, brainCalcCorrectAnswer);
