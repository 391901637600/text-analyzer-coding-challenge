import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInput} from "../models/user-input";

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerApiService {

  constructor(private http: HttpClient) {
  }

  getProcessedData(data: UserInput): Observable<any> {
    const url = 'http://localhost:8080/api/result';
    return this.http.post(url, data);
  }
}
