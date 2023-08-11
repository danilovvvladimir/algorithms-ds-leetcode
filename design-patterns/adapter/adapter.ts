namespace NSAdapter {
  // Существующая система оплаты (старая)
  class PayPalPayment {
    makePayment(amount: number): void {
      console.log(`Making a payment of $${amount} via PayPal.`);
    }
  }

  // Новая система оплаты (новая)
  class StripePayment {
    processPayment(amount: number): void {
      console.log(`Processing a payment of $${amount} via Stripe.`);
    }
  }

  // Интерфейс для новой системы оплаты
  interface PaymentProcessor {
    pay(amount: number): void;
  }

  class PayPalAdapter implements PaymentProcessor {
    private payPalPayment: PayPalPayment;

    constructor(payPalPayment: PayPalPayment) {
      this.payPalPayment = payPalPayment;
    }

    pay(amount: number): void {
      console.log("Adapter is translating the request to PayPal...");
      this.payPalPayment.makePayment(amount);
    }
  }

  // Используем адаптер и новую систему оплаты
  const stripePayment = new StripePayment();
  stripePayment.processPayment(100);

  // Используем адаптер и старую систему оплаты через интерфейс новой системы
  const payPalPayment = new PayPalPayment();
  const payPalAdapter = new PayPalAdapter(payPalPayment);
  payPalAdapter.pay(150);
}
