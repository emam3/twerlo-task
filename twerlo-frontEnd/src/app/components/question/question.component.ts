import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionInfoService } from '../../services/question-info.service';
import { objectRetrieved } from 'src/helper/objectRetrieved';
import { word } from '../../../helper/word';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  constructor(private questionInfoService: QuestionInfoService) { }

  randomWords: word[] = []
  counter: number = 0       // if it's equal to 10, then the user has finished 
  currentWord: string = ''
  currentWordPos: string = ''
  checkRightOrWrong: Boolean = true
  rightAnswersCounter: number = 0
  rank: number = 0
  progress: number = 0

  getRandomWords(): void {
    this.questionInfoService.getWords().subscribe((object: objectRetrieved) => {
      this.randomWords = object.randomNeededWords ? object.randomNeededWords : []
      this.currentWord = object['randomNeededWords'][0].word ? object['randomNeededWords'][0].word : ''
      this.currentWordPos = object['randomNeededWords'][0].pos ? object['randomNeededWords'][0].pos : ''
    })
  }

  ngOnInit(): void {
    this.getRandomWords()
  }


  onChoose(questionForm: NgForm, e: any): void {
    const Answer: string = e.target.value
    this.progress += 10

    // 1- check the answer and raise the counter by one
    this.checkRightOrWrong = (Answer == this.currentWordPos)
    this.checkRightOrWrong ? this.rightAnswersCounter++ : null
    this.counter++;

    if (this.checkRightOrWrong) {
      (document.querySelector(`[for=${e.target.id}]`) as HTMLElement).style.backgroundColor = '#a4ec7f';
    } else {
      (document.querySelector(`[for=${e.target.id}]`) as HTMLElement).style.backgroundColor = '#ff6161';
    }

    setTimeout(() => {
      if ((document.querySelector(`[for=${e.target.id}]`))) {
        (document.querySelector(`[for=${e.target.id}]`) as HTMLElement).style.backgroundColor = '#fafafa';
      }
    }, 300)

    // 2- check if it's the final answer of not
    if (this.counter > 9) {
      // 3- if yes, send the rightAnswersCounter and get the rank!
      let score = (this.rightAnswersCounter / 10) * 100
      this.questionInfoService.postScore({ finalScore: score }).subscribe((rank) => {
        this.rank = rank.rank
      })
    }
    else {
      // 3- change the answer 
      this.currentWord = this.randomWords ? this.randomWords[this.counter].word : ''
      this.currentWordPos = this.randomWords ? this.randomWords[this.counter].pos : ''
      questionForm.resetForm()
    }
  }

  onTryAgain(): void {
    // reset everyting and get another 10 words!
    this.counter = 0
    this.rank = 0
    this.rightAnswersCounter = 0
    this.progress = 0
    this.getRandomWords()

  }
}
