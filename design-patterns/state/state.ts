namespace NSState {
  interface OrderState {
    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
  }

  class ProcessingState implements OrderState {
    cancelOrder(): void {
      console.log("Order is being cancelled.");
    }

    verifyPayment(): void {
      console.log("Payment verified, order still processing.");
    }

    shipOrder(): void {
      console.log("Cannot ship order while still processing.");
    }
  }

  class ShippedState implements OrderState {
    cancelOrder(): void {
      console.log("Cannot cancel shipped order.");
    }

    verifyPayment(): void {
      console.log("Payment already verified.");
    }

    shipOrder(): void {
      console.log("Order is already shipped.");
    }
  }

  // Класс заказа, использующий состояния
  class Order {
    private state: OrderState;

    constructor() {
      this.state = new ProcessingState();
    }

    setState(state: OrderState): void {
      this.state = state;
    }

    cancelOrder(): void {
      this.state.cancelOrder();
    }

    verifyPayment(): void {
      this.state.verifyPayment();
    }

    shipOrder(): void {
      this.state.shipOrder();
    }
  }

  const order = new Order();

  order.verifyPayment(); // Output: Payment verified, order still processing.
  order.shipOrder(); // Output: Cannot ship order while still processing.

  order.setState(new ShippedState());

  order.verifyPayment(); // Output: Payment already verified.
  order.shipOrder(); // Output: Order is already shipped.
  order.cancelOrder(); // Output: Cannot cancel shipped order.
}
