import { Controller, Get, Sse } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Observable } from 'rxjs';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return this.notificationService.getNotificationStream();
  }
}
