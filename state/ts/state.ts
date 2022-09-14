interface State {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  private state: State;
  quantity: number;
  readonly limit: number;
  private number: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  get getNumber(): number {
    return this.number++;
  }
  set setState(state: State) {
    this.state = state;
  }
  get getState(): State {
    return this.state;
  }
  next(): number | null {
    return this.state.next(this);
  }
  add(quantity: number): void {
    this.state.add(this, quantity);
  }
}

class EmptyState implements State {
  next(): number | null {
    return null;
  }
  add(ticket: Ticket, quantity: number): void {
    // validate limit
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new FullState();
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    // validate limit
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

class FullState implements State {
  next(ticket: Ticket): number | null {
    ticket.quantity--;
    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }
    return ticket.getNumber;
  }
  add(ticket: Ticket, quantity: number): void {
    console.log('Ticket is full');
  }
}

// Language: typescript
// Path: state/ts/index.ts
const ticket = new Ticket(10);
console.log('====================================');
console.log(ticket.getState);
console.log('====================================');

console.log('====================================');
console.log(ticket.next());
console.log('====================================');

console.log('====================================');
ticket.add(11);
console.log(ticket.getState);
console.log('====================================');

console.log('====================================');
console.log(ticket.next());
console.log('====================================');

ticket.add(7); // is not full, so add 7 and change state to WithDataState

console.log('====================================');
console.log(ticket.getState);
console.log('====================================');

console.log('====================================');
console.log(ticket.next());
console.log('====================================');

console.log('====================================');
console.log(ticket.next());
console.log('====================================');

console.log('====================================');
ticket.add(4); // will change state to FullState, because 7 + 4 = 11
console.log(ticket.getState);
console.log('====================================');

console.log('====================================');
console.log(ticket.add(1)); // will not change state, because 11 + 1 = 12
console.log(ticket.getState);
console.log('====================================');

console.log('====================================');
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.next());
console.log(ticket.getState);
console.log(ticket.next());
console.log('====================================');
