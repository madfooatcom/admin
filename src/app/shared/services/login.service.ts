import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login() {
    let body = {
      "phone": "114455555",
      "password": "nour",
      "fingerPrint": 12345678912345,
      "uHeader": "{'browser':{'name':'Chrome','version':'87.0.4280.141','major':'87'},'os':'Linux','engine':'WebKit','CPU':'amd64'}"
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    this.httpClient.post('http://192.168.1.109:8888/login', body, {headers:headers} ).subscribe(
      res => { console.log(res) },
      err => { console.log(err) },
    );
  }
}
