#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainGcdRules, brainGcdCorrectAnswer, brainGcdQuestion } from '../src/games/brain-gcd-module.js';

startGame(brainGcdRules, brainGcdQuestion, brainGcdCorrectAnswer);
