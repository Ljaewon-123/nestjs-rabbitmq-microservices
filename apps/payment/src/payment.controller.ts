import { Controller, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreditCardGateway, Order, PAYMENT_METHOD } from './payment.gateway';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {
    this.paymentService.registerPaymentGateway(
      PAYMENT_METHOD.CREDIT_CARD,
      new CreditCardGateway(),
    );
  }

  @Get('payment')
  payment(): Promise<void> {
    const order: Order = {
      productId: 1,
      name: 'Product 1',
      pricing: 100,
    }
    return this.paymentService.processPayment(order, PAYMENT_METHOD.CREDIT_CARD);
  }

  @MessagePattern('payment')
  async handleOrderCreated(data: any) {
    const { request, Authentication } = data;
    const order: Order = {
      productId: request.productId,
      name: request.name,
      pricing: request.pricing,
    };
    await this.paymentService.processPayment(order, PAYMENT_METHOD.CREDIT_CARD);
  }
}
