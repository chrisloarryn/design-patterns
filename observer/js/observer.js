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

class Observer {
  constructor(fn) {
    this.fn = fn
  }
  refresh(data) {
    console.log(`Observers were notified with data: ${data}`)
    this.fn(data)
  }
}

const s = new Subject()
const o1 = new Observer((data) => {
  console.log('============================================')
  console.log(`Observer 1 got notified with data: ${data}`)
  console.log('============================================')
})

const o2 = new Observer((data) => {
  console.log('============================================')
  console.log(`Observer 2 add data to div 1: ${data}`)
  console.log('============================================')
  div1.innerHTML = data
})

const o3 = new Observer((data) => {
  console.log('============================================')
  console.log(`Observer 3 add data to div 2: ${data}`)
  console.log('============================================')
  div2.innerHTML = data.split('').reverse().join('')
})

s.subscribe(o1)
s.subscribe(o2)
s.subscribe(o3)

function change() {
  s.notify(myText.value)
}
