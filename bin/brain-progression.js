#!/usr/bin/env node
import startGame from '../src/index.js';
import { brainProgressionRules, brainProgressionCorrectAnswer, brainProgressionQuestion } from '../src/games/brain-progression-module.js';

startGame(brainProgressionRules, brainProgressionQuestion, brainProgressionCorrectAnswer);
