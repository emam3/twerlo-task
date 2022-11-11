import testData from "../TestData.json" assert {type: "json"}
import { word } from '../models/word.template';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { SelectRandomWords } from '../helper/common';
const { wordList, scoresList } = testData


const retrieveRandomWords = async (req: Request, res: Response, next: NextFunction) => {
    let typeofWords: string[] = ['adverb', 'verb', 'noun', 'adjective']
    let randomNeededWords: word[] = []
    // check if the files exist
    try {
        if (!fs.existsSync('./adverb.json')) {
            await Promise.all(typeofWords.map(async (type: string) => { // if not, create them
                let words: word[] = wordList.filter((word: word) => {
                    return word.pos == type
                })
                await fs.promises.writeFile(`./${type}.json`, JSON.stringify(words), 'utf8');
            }))
            randomNeededWords = await SelectRandomWords()
        } else {
            randomNeededWords = await SelectRandomWords()
        }

        res.status(200).send({
            randomNeededWords,
        })
    } catch (error) {
        res.status(500).send({
            apiStatus: false,
            message: error.message
        })
    }
}

const calcualteScore = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const finalScore: number = req.body.finalScore
        if (finalScore < 0 || finalScore > 100) res.status(500).send({ // validate the number
            apiStatus: false,
            message: "score must be in range!"
        })
        const filteredArray: number[] = scoresList.filter((score: number) => {
            return score < finalScore
        })
        const rank: number = (filteredArray.length / 30) * 100
        const roundedRank: number = Math.round(rank * 100) / 100
        res.status(200).send({
            apiStatus: true,
            rank: roundedRank
        })

    } catch (error) {
        res.status(500).send({
            apiStatus: false,
            message: error.message
        })
    }
}
export const RetrieveRandomWords = retrieveRandomWords
export const CalcualteScore = calcualteScore