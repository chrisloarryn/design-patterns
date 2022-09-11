class SaleContext {
  constructor(strategy) {
    this.strategy = strategy
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  calculate(amount) {
    return this.strategy.calculate(amount)
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax
  }

  calculate(amount) {
    return amount + amount * this.tax
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax
    this.discount = discount
  }

  calculate(amount) {
    const calculatedWithTax = amount + amount * this.tax,
      calculatedWithTaxAndDiscount = calculatedWithTax - this.discount

    const toPrintObjArr = [
      { name: 'Amount', value: amount },
      { name: 'Tax', value: this.tax },
      { name: 'Discount', value: this.discount },
      { name: 'CalculatedWTax', value: calculatedWithTax },
      {
        name: 'CalculatedWTaxAndDiscount',
        value: calculatedWithTaxAndDiscount,
      },
    ]
    console.log(toPrintObjArr)
    return amount + amount * this.tax - this.discount
  }
}

class ForeignSaleStrategy {
  get getDollarPrice() {
    return 20
  }

  calculate(amount) {
    return amount * this.getDollarPrice
  }
}

// const regularSale = new RegularSaleStrategy(0.19)
// const discountSale = new DiscountSaleStrategy(0.19, 3)
// const foreignSale = new ForeignSaleStrategy()

// const sale = new SaleContext(regularSale)
// // const sale2 = new SaleContext(discountSale)

// console.log(sale.calculate(10))

// // switch strategy
// sale.setStrategy(discountSale)
// console.log(sale.calculate(10))

// // switch strategy
// sale.setStrategy(foreignSale)
// console.log(sale.calculate(10))

// TODO: add strategy for foreign sale
// real world example
// if there is a lot of "if", "switch" or "else if" statements,
// strategy pattern is a good choice
const data = [
  {
    name: 'Erdinger Pikantus',
    country: 'Germany',
    info: 'Erdinger Pikantus is a German wheat beer with a spicy taste.',
    price: 2.5,
    type: 'beer',
    img: 'https://directwines.vtexassets.com/arquivos/ids/162209-800-917?v=637629309035400000&width=800&height=917&aspect=true',
  },
  // add Corona beer
  {
    name: 'Corona',
    country: 'Mexico',
    info: 'Corona is a Mexican beer with a spicy taste.',
    price: 2.5,
    type: 'beer',
    img: 'https://jumbo.vtexassets.com/arquivos/ids/434507/Cerveza-Corona-botella-330-cc.jpg?v=637559289407830000',
  },
  // add Heineken beer
  {
    name: 'Heineken',
    country: 'Netherlands',
    info: 'Heineken is a Dutch beer with a spicy taste.',
    price: 2.5,
    type: 'beer',
    img: 'https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?quality=85',
  },
  // add Budweiser beer
  {
    name: 'Budweiser',
    country: 'USA',
    info: 'Budweiser is a American beer with a spicy taste.',
    price: 2.5,
    type: 'beer',
    img: 'https://previews.123rf.com/images/brandonkleinvideo/brandonkleinvideo1801/brandonkleinvideo180100348/94559306-botella-de-cerveza-budweiser-bebida-alcoh%C3%B3lica-p%C3%A1lida-lager-estilo-americano-producida-por-el-cervec.jpg',
  },
  // add Delirium Tremens beer
  {
    name: 'Delirium Tremens',
    country: 'Belgium',
    info: 'Delirium Tremens is a Belgian beer with a spicy taste.',
    price: 2.5,
    type: 'beer',
    img: 'https://www.barrilitobeer.cl/wp-content/uploads/2020/12/Delirium-tremens-lata-1.jpg',
  },
]
// name,country,info,price,type,img

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy)
    this.data = data
    this.element = element
  }

  setStrategy(strategy) {
    this.strategy = strategy
  }

  show() {
    this.strategy.show(this.data, this.element)
  }
}

// name,country,info,price,type,img
class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulator, beer) => {
      return (
        accumulator +
        `<div>
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
        </div>
        <hr>`
      )
    }, '')
  }
}

// name,country,info,price,type,img
class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulator, beer) => {
      return (
        accumulator +
        `<div>
          <h2>${beer.name} (${beer.type})</h2>
          <p>${beer.country}</p>
          <p>${beer.info}</p>
          <!-- TODO: add price -->
          <p>$${beer.price} USD</p>
          <img width="10%" src="${beer.img}" alt="${beer.name}" />
        </div>
        <hr>`
      )
    }, '')
  }
}

// name,country,info,price,type,img
class ListWithImagesStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((accumulator, beer) => {
      return (
        accumulator +
        `<div>
          <h2>${beer.name} (${beer.type})</h2>
          <img width="10%" src="${beer.img}" alt="${beer.name}" />
        </div>
        <hr>`
      )
    }, '')
  }
}

const strategies = [
  undefined,
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImagesStrategy(),
]

const info = new InfoContext(new ListStrategy(), data, content)

// info.show()

slcOptions.addEventListener('change', (event) => {
  const op = event.target.value
  info.setStrategy(strategies[op])
  info.show()
})
