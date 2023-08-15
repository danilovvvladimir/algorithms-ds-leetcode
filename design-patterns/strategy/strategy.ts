namespace NSStrategy {
  interface PaymentStrategy {
    pay(amount: number): void;
  }

  class CreditCardPayment implements PaymentStrategy {
    constructor(private cardNumber: string, private cardHolder: string) {}

    pay(amount: number): void {
      console.log(`Paid $${amount} with credit card ${this.cardNumber}`);
    }
  }

  class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}

    pay(amount: number): void {
      console.log(`Paid $${amount} with PayPal account ${this.email}`);
    }
  }

  class ShoppingCart {
    private paymentStrategy: PaymentStrategy | null = null;

    setPaymentStrategy(strategy: PaymentStrategy): void {
      this.paymentStrategy = strategy;
    }

    checkout(amount: number): void {
      if (this.paymentStrategy) {
        this.paymentStrategy.pay(amount);
      } else {
        console.log("No payment strategy set.");
      }
    }
  }

  const cart = new ShoppingCart();

  const creditCardStrategy = new CreditCardPayment(
    "1234-5678-9012-3456",
    "John Doe"
  );
  const paypalStrategy = new PayPalPayment("john.doe@example.com");

  cart.setPaymentStrategy(creditCardStrategy);
  cart.checkout(100);

  cart.setPaymentStrategy(paypalStrategy);
  cart.checkout(50);
}
