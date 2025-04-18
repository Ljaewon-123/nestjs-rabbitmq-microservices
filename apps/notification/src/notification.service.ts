import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  getNotificationStream(): Observable<MessageEvent> {
    // Implementation for getting notification stream
    return new Observable<MessageEvent>((observer) => {
      // Simulate a notification stream
      setInterval(() => {
        observer.next(new MessageEvent('message', { data: 'New notification!' }));
      }, 1000);
    });
  }
}
