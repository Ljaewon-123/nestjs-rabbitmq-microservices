import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { RmqModule } from '@app/common';
import { AuthModule } from 'apps/auth/src/auth.module';
import { PAYMENT_SERVICE } from './constant/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PAYMENT_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule.register({
      name: PAYMENT_SERVICE
    }),
    // AuthModule
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
