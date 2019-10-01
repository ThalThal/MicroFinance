import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RpHttpService {
    constructor(private http: Http) {
    }
    doGet(url: string) {
        return this.http.get(url).map(res => res.json());
    }
    doPost(url: string, j: any) {
        var params = JSON.stringify(j);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, params, { headers: headers }).map(res => res.json());
    }
    upload(url: string, files: File) {
        let fd = new FormData();
        fd.append("uploadedFile", files);  
        return this.http.post(url, fd).map(res => res.json());
    }
}