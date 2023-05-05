import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');
  }

  public connect(): Observable<any> {
    return new Observable((observer) => {
      this.socket.onopen = (event) => {
        console.log('WebSocket connection established');
      };

      this.socket.onerror = (event) => {
        console.error('WebSocket error:', event);
        observer.error(event);
      };

      this.socket.onmessage = (event) => {
        console.log('Received message:', event.data);
        const message = JSON.parse(event.data);
        // if (message.plantIndex === 'A') {
          observer.next(message);
        // }
      };

      this.socket.onclose = (event) => {
        console.log('WebSocket connection closed');
        observer.complete();
      };
    }).pipe(filter((message) => message !== null));
  }
}
