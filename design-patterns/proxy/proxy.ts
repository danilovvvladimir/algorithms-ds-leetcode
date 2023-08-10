namespace NSProxy {
  interface BankAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
  }

  class ConcreteBankAccount implements BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited ${amount} units. New balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew ${amount} units. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient balance.`);
      }
    }

    getBalance(): number {
      return this.balance;
    }
  }

  class BankAccountProxy implements BankAccount {
    private realAccount: ConcreteBankAccount;

    constructor() {
      this.realAccount = new ConcreteBankAccount();
    }

    deposit(amount: number): void {
      this.realAccount.deposit(amount);
    }

    withdraw(amount: number): void {
      if (this.isAllowed(amount)) {
        this.realAccount.withdraw(amount);
      } else {
        console.log(`Withdrawal amount ${amount} exceeds limit.`);
      }
    }

    getBalance(): number {
      return this.realAccount.getBalance();
    }

    private isAllowed(amount: number): boolean {
      // В данном примере, допустим, у нас есть ограничение на максимальную сумму для снятия
      const withdrawalLimit = 1000;
      return amount <= withdrawalLimit;
    }
  }

  const account: BankAccount = new BankAccountProxy();

  account.deposit(1500);
  account.withdraw(800);
  account.withdraw(1200);
}
