interface Strategy {
  login(user: string, password: string): boolean;
}

class LoginContext {
  private strategy!: Strategy;

  constructor(strategy: Strategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginDBStrategy');
    console.log(`user: ${user}, password: ${password}`);
    if (user !== 'admin' && password !== 'admin') return false;
    console.log('LoginDBStrategy: Login success');
    return true;
  }
}

class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginServiceStrategy');
    console.log(`user: ${user}, password: ${password}`);
    return user === 'admin' && password === 'myPassword';
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log('LoginGoogleStrategy');
    console.log(`user: ${user}, password: ${password}`);
    return user === 'admin' && password === 'myGooglePassword';
  }
}

console.log('=====================================');
const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', 'admin'));
console.log('=====================================');
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin', 'myPassword'));
console.log('=====================================');
auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin', 'myGooglePassword'));
console.log('=====================================');
