import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private baseUrl = 'http://localhost:8080/api/v1/room/';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  createRoom(room: Room): Observable<Object> {
    return this.http.post(this.baseUrl, room);
  }

  updateRoom(id: number, room: Room) : Observable<Object> {
    return this.http.put(this.baseUrl + id, room);
  }

  deleteRoom(id: number) : Observable<any>{
    return this.http.delete(this.baseUrl + id, { responseType: 'text' });
  }

  getRoomList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
}
