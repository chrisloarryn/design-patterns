// component: decorator
class ProductComponent {
  constructor(name) {
    this.name = name
  }

  getDetail() {
    return `${this.name}`
  }
}

// decorator
class ProductDecorator {
  constructor(productComponent) {
    this.productComponent = productComponent
  }

  getDetail() {
    return this.productComponent.getDetail()
  }
}

// concrete decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {
  constructor(productComponent, tradename, brand) {
    super(productComponent)

    this.tradename = tradename
    this.brand = brand
  }

  getDetail() {
    return `${this.tradename} ${this.brand} ${super.getDetail()}`
  }
}

// concrete decorator 2
class StoreProductDecorator extends ProductDecorator {
  constructor(productComponent, price) {
    super(productComponent)

    this.price = price
  }

  getDetail() {
    return super.getDetail() + ` $${this.price}`
  }
}

// concrete decorator 3
class HTMLProductDecorator extends ProductDecorator {
  getDetail() {
    return `
      <h1>Product information</h1>
      <p>${super.getDetail()}</p>`
  }
}

const productComponent = new ProductComponent('Cerveza')
console.log(productComponent.getDetail())

const commercialInfoProductDecorator = new CommercialInfoProductDecorator(
  productComponent,
  'Corona',
  'Modelo'
)

console.log(commercialInfoProductDecorator.getDetail())

const storeProductDecorator = new StoreProductDecorator(productComponent, 100)
console.log(storeProductDecorator.getDetail())

// const htmlProductDecorator = new HTMLProductDecorator(productComponent)
// console.log(htmlProductDecorator.getDetail())

const anotherDecorated = new StoreProductDecorator(
  commercialInfoProductDecorator,
  100
)

console.log('=================================================')
console.log(anotherDecorated.getDetail())
console.log('=================================================')

const htmlProductDecorator = new HTMLProductDecorator(anotherDecorated)
console.log(htmlProductDecorator.getDetail())
div1.innerHTML = htmlProductDecorator.getDetail()
