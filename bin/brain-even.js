#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainEvenRules, brainEvenCorrectAnswer, brainEvenQuestion } from '../src/games/brain-even-module.js';

startGame(brainEvenRules, brainEvenQuestion, brainEvenCorrectAnswer);
