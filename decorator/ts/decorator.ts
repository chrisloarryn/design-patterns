interface Component {
  getDetail(): string;
}

// Component
class ProductComponent implements Component {
  protected name!: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDetail(): string {
    return `${this.name}`;
  }
}

// Decorator
abstract class ProductDecorator implements Component {
  protected component!: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }
}

// Decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename!: string;
  private brand!: string;

  constructor(component: Component, tradename: string, brand: string) {
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`;
  }
}

// Decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price!: number;

  constructor(component: Component, price: number) {
    super(component);

    this.price = price;
  }

  public getDetail(): string {
    return `${super.getDetail()} $${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  public getDetail(): string {
    return `
      <h1>Product Information</h1>
      <p>
        ${super.getDetail()}
      </p>
    `;
  }
}

// execute component
const product = new ProductComponent('Doritos');
console.log(product.getDetail());

// decorate component with decorator 1
const commercialInfoProduct = new CommercialInfoProductDecorator(
  product,
  'Evercrisp',
  'Doritos'
);
console.log(commercialInfoProduct.getDetail());

// decorate component with decorator 2
const storeProduct = new StoreProductDecorator(product, 15.99);
console.log(storeProduct.getDetail());

// decorate component with decorator 2 and 1
const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 45.99);
console.log(storeProduct2.getDetail());

// decorate component with decorator 3
const htmlProduct = new HTMLProductDecorator(storeProduct2);
console.log(htmlProduct.getDetail());

// Output:
