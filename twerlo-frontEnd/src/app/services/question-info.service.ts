import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { objectRetrieved } from '../../helper/objectRetrieved';
import { rankObject } from '../../helper/rankObject';

@Injectable({
  providedIn: 'root'
})

export class QuestionInfoService {
  private getWordsEndPoing = 'http://localhost:3002/wordsRoutes/word'
  private sendScoreEndPoint = 'http://localhost:3002/wordsRoutes/rank'
  constructor(private http: HttpClient) { }

  getWords(): Observable<objectRetrieved> {
    return this.http.get<objectRetrieved>(this.getWordsEndPoing)
  }

  postScore(score: any): Observable<rankObject> {
    return this.http.post<rankObject>(this.sendScoreEndPoint, score)
  }
}
