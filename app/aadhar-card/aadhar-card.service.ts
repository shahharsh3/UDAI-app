import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AadharCard } from './aadhar-card';

@Injectable()
export class AadharCardService {

  constructor(private http:HttpClient) { }

  
  getAadhar(data: AadharCard) : Observable<any> {
    
    return this.http.post<any>('http://localhost:8765/AadharAPI/getAadhar',data);
    
  }

   updatePhoneNumber(data: AadharCard): Observable<any> {

    return this.http.post('http://localhost:8765/AadharAPI/updatePhoneNumber',data);
     
    
  }

  
}
