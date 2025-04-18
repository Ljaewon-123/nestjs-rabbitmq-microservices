export interface Order {
  productId: number
  name: string
  pricing: number
}

// ✅ Good
//Extending the payment service without modifying existing code (Open-Closed Principle)
export abstract class PaymentGateway {
  abstract processPayment(order: Order): void;
}

export class CreditCardGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process credit card payment
    console.log("Payment CreditCardGateway")
    console.log(order)
  }
}

export class PayPalGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process PayPal payment
    console.log("Payment PayPalGateway")
    console.log(order)
  }
}

export class BitcoinGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process Bitcoin payment
    console.log("Payment BitcoinGateway")
    console.log(order)
  }
}

//Maybe you want to add support for a new payment Method 🤔 👇
export class ApplePayGateway implements PaymentGateway {
  processPayment(order: Order): void {
    // Process ApplePay payment
    console.log("Payment ApplePayGateway")
    console.log(order)
  }
}

export enum PAYMENT_METHOD {
  CREDIT_CARD = 'credit-card',
  PAYPAL = 'paypal',
  Bitcoin = 'bitcoin',
}
