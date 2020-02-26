import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) { }

  getPositiveWords(): Observable<any> {
    return this.http.get("/assets/positives.json");
  }

  getNegativeWords(): Observable<any> {
    return this.http.get("/assets/negatives.json");
  }

  getStopWords(): Observable<any> {
    return this.http.get("/assets/stopwords.json");
  }
}

