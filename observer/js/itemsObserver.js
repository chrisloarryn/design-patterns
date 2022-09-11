class Subject {
  constructor() {
    this.observers = []
  }
  subscribe(observer) {
    this.observers.push(observer)
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => observer !== obs)
  }
  notify(data) {
    this.observers.forEach((observer) => {
      observer.refresh(data)
    })
  }
}

class ItemsSubject extends Subject {
  constructor() {
    super()

    this.data = []
  }
  add(item) {
    this.data.push(item)
    this.notify(this.data)
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element
  }
  refresh(data) {
    this.element.innerHTML = data.reduce((acc, e) => {
      return (
        acc +
        `
        <p style="color: white;">${e}</p>
        <hr />
      `
      )
    }, '')
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn
  }
  refresh(data) {
    console.log(`Observers were notified with data: ${data}`)
    this.fn(data)
  }
}

const item = new ItemsSubject()

const o1 = new HtmlElementObserver(div1)
const o2 = new HtmlElementObserver(div2)
const o3 = new Observer((data) => {
  console.log(data)
  div3.innerHTML = `
    <p style="color: white;">${data.length}</p>
  `
})

item.subscribe(o1)
item.subscribe(o2)
item.subscribe(o3)

function add() {
  if (txtName.value.length > 0) {
    item.add(txtName.value)
  }
}
