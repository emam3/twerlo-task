import testData from "../TestData.json" assert {type: "json"}
import { word } from '../models/word.template';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
const { wordList, scoresList } = testData


const retrieveRandomWords = (req: Request, res: Response, next: NextFunction): void => {
    try {

        let typeofWords: string[] = ['adverb', 'verb', 'noun', 'adjective']
        let randomNeededWords: word[] = []
        if (!(fs.existsSync('./adverb.json') && fs.existsSync('./verb.json') && fs.existsSync('./noun.json') && fs.existsSync('./adjective.json'))) {
            typeofWords.forEach((type: string) => {
                let words: word[] = wordList.filter((word: word) => {
                    return word.pos == type
                })
                fs.writeFile(`${type}.json`, JSON.stringify(words), 'utf8', () => console.log('just testing'));
            })
        } else {
            const adjectiveWords: word[] = JSON.parse(fs.readFileSync("./adjective.json").toString())
            const adverbWords: word[] = JSON.parse(fs.readFileSync("./adverb.json").toString())
            const nounWords: word[] = JSON.parse(fs.readFileSync("./noun.json").toString())
            const verbWords: word[] = JSON.parse(fs.readFileSync("./verb.json").toString())

            while (randomNeededWords.length != 10) {
                if (randomNeededWords.length > 10) {
                    randomNeededWords.pop()
                } else { // select random elemts to push every time
                    randomNeededWords.push(adjectiveWords[Math.floor(Math.random() * adjectiveWords.length)])
                    randomNeededWords.push(adverbWords[Math.round(Math.random() * adverbWords.length)])
                    randomNeededWords.push(nounWords[Math.floor(Math.random() * nounWords.length)])
                    randomNeededWords.push(verbWords[Math.floor(Math.random() * verbWords.length)])
                }
            }
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
        const finalScore:number = req.body.finalScore
        if(finalScore < 0 || finalScore > 100) res.status(500).send({
            apiStatus: false,
            message: "score must be in range!"
        })
        const filteredArray:number[] = scoresList.filter((score) => {
            return score < finalScore
        })
        const rank:number = (filteredArray.length / 30) *100
        const roundedRank:number = Math.round(rank*100)/100
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