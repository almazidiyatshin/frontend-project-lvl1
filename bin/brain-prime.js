#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainPrimeRules, brainPrimeCorrectAnswer, brainPrimeQuestion } from '../src/games/brain-prime-module.js';

startGame(brainPrimeRules, brainPrimeQuestion, brainPrimeCorrectAnswer);
