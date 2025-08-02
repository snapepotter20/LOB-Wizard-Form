import { Injectable } from '@angular/core';
import { LOBRequest } from '../models/lob.model';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LobService {
  constructor(private http: HttpClient) {}

createLOB(data: LOBRequest): Observable<any> {
  console.log('LOB Request Data:', data);
  return of({ message: 'Form created successfully' }).pipe(delay(1000));
}
}
