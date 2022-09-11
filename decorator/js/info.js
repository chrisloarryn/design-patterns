console.log('Decorator')

// component
class ClientComponent {
  constructor(url) {
    this.url = url
  }

  async getData() {
    const response = await fetch(this.url)
    const data = await response.json()
    return data
  }
}

// decorator
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent
  }

  async getData() {
    return await this.clientComponent.getData()
  }
}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData()
    return data.map((item) => ({
      ...item,
      title: item.title.toUpperCase(),
    }))
  }
}

// decorator 2
class HTMLClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData()
    return data.map((item) => ({
      ...item,
      title: `<h2>${item.title}</h2>`,
      thumbnailUrl: `<img src="${item.thumbnailUrl}" width="120px" />`,
    }))
  }
}

;(async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos'
  const clientComponent = new ClientComponent(url)
  const data = await clientComponent.getData()
  // console.log(data)

  const upperCaseClientDecorator = new UpperCaseClientDecorator(clientComponent)
  const data2 = await upperCaseClientDecorator.getData()
  // console.log(data2)

  const htmlClient = new HTMLClientDecorator(upperCaseClientDecorator)
  const data3 = await htmlClient.getData()
  // console.log(data3)
  divContent1.innerHTML = data3.reduce(
    (acc, item) => acc + `${item.title}${item.thumbnailUrl}`,
    ''
  )

  const htmlClient2 = new HTMLClientDecorator(clientComponent)
  const data4 = await htmlClient2.getData()
  // console.log(data4)
  divContent2.innerHTML = data4.reduce(
    (acc, item) => acc + `${item.title}${item.thumbnailUrl}`,
    ''
  )
})()
