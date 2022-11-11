import express from 'express';
import {RetrieveRandomWords, CalcualteScore} from '../controllers/words.controller';
const router = express.Router()

// const {retrieveRandomWords, calcualteScore}:any = controllers

router.get('/word', RetrieveRandomWords)
router.post('/rank', CalcualteScore)

export default router