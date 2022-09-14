class DocumentContext {
  constructor() {
    this.content = ''
    this.state = new BlankState()
  }

  setState(state) {
    this.state = state
  }

  write(text = '', separator = ' ') {
    this.state.write(this, text, separator)
  }
}

class BlankState {
  write(documentContext, text = '', separator = ' ') {
    documentContext.content = text
    documentContext.setState(new WithContentState())
  }
}

class WithContentState {
  write(documentContext, text = '', separator = ' ') {
    documentContext.content += separator + text
  }
}

class ApprovedState {
  write(documentContext, text, separator) {
    console.log('Document will not be modified if it is approved')
  }
}

const doc = new DocumentContext()
console.log(doc.state)

doc.write('duck')
console.log(doc.content)
console.log(doc.state)
doc.write('something more')
doc.write('duck is swimming')
console.log(doc.content)

doc.setState(new ApprovedState())

console.log('====================================')
console.log(doc.state)
doc.write('last try to write')
console.error(doc.content)
console.log('====================================')

doc.setState(new WithContentState())
console.log(doc.content)
doc.write('we can write again')

console.log(doc.content)
