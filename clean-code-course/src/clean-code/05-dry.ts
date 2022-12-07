type Size = '' | 'small' | 'medium' | 'large';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
    public quantity: number = 0,
  ) {}

  get getName() {
    return this.name;
  }

  #isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string>(<unknown>this[key])).length <= 0) throw new Error(`${key} is empty`);
          break;
        case 'number':
          if (<number>(<unknown>this[key]) <= 0) throw new Error(`${key} is zero or negative`);
          break;
        case 'object':
          if (this[key] === null) throw new Error(`${key} is null`);
          break;
        case 'undefined':
          throw new Error(`${key} is undefined`);
        case 'function':
          throw new Error(`${key} is a function`);
        case 'symbol':
          throw new Error(`${key} is a symbol`);
        case 'bigint':
          throw new Error(`${key} is a bigint`);
        case 'boolean':
          throw new Error(`${key} is a boolean`);
        default:
          throw new Error(`${key} is not valid`);
      }
    }

    return true;
  }

  toString(): string {
    // DRY - not apply
    // DRY - Don't Repeat Yourself - No te repitas
    // if (this.name.length <= 0) throw new Error('name is empty');
    // if (this.price <= 0) throw new Error('price is zero or negative');
    // if (this.size.length <= 0) throw new Error('size is empty');
    // if (this.quantity <= 0) throw new Error('quantity is zero or negative');

    if (!this.#isProductReady()) return '';

    return `${this.name} - ${this.price} - ${this.size} - ${this.quantity}`;
  }
}

(() => {
  const products = [new Product('Corne keyboard', 171, 'small')];

  products.forEach(product => console.log(product.toString()));
})();
