import fs from 'fs';
import {word} from '../models/word.template'
// import testData from "../TestData.json" assert {type: "json"}
// const { wordList} = testData


const selectRandomWords = async () => {
    let randomNeededWords:word[] = []

    const adjectiveWords:word[] = JSON.parse(fs.readFileSync("./adjective.json").toString())
    const adverbWords:word[] = JSON.parse(fs.readFileSync("./adverb.json").toString())
    const nounWords:word[] = JSON.parse(fs.readFileSync("./noun.json").toString())
    const verbWords:word[] = JSON.parse(fs.readFileSync("./verb.json").toString())


    while (randomNeededWords.length != 10) {
        if (randomNeededWords.length > 10) {
            randomNeededWords.pop()
        } else { // select random elements to push every time
            randomNeededWords.push(adjectiveWords[Math.floor(Math.random() * adjectiveWords.length)])
            randomNeededWords.push(adverbWords[Math.floor(Math.random() * adverbWords.length)])
            randomNeededWords.push(nounWords[Math.floor(Math.random() * nounWords.length)])
            randomNeededWords.push(verbWords[Math.floor(Math.random() * verbWords.length)])
        }
    }
    return randomNeededWords
}

export const SelectRandomWords = selectRandomWords