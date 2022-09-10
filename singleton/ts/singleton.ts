class SingletonTS {
  private static instance: SingletonTS;
  public random: number | undefined;

  private constructor() {
    this.random = Math.random();
  }

  static getInstance(): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS();
    }
    return SingletonTS.instance;
  }
}

const instance1 = SingletonTS.getInstance();
const instance2 = SingletonTS.getInstance();

console.log(instance1.random);
console.log(instance2.random);

instance1.random = 10;

console.log(instance1.random);
console.log(instance2.random);
