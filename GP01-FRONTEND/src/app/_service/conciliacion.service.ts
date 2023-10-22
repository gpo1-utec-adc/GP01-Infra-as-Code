import { Conciliacion } from './../_model/conciliacion';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConciliacionService {

  
    url: string = "http://localhost:3000/api/trxs";


    constructor(private http: HttpClient) { }

    getConciliacion() {
        return this.http.get<Conciliacion[]>(`${this.url}`);
   
    }

 






}