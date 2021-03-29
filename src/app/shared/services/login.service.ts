import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL =  environment.baseURL;
  constructor(private httpClient: HttpClient) { }

  login() {
    let uri = '/login';
    let body = {
      "phone": "114455555",
      "password": "nour",
      "fingerPrint": 12345678912345,
      "uHeader": "{'browser':{'name':'Chrome','version':'87.0.4280.141','major':'87'},'os':'Linux','engine':'WebKit','CPU':'amd64'}"
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    this.httpClient.post(this.baseURL + uri, body, {headers:headers} ).subscribe(
      res => { console.log(res) },
      err => { console.log(err) },
    );
  }
}
