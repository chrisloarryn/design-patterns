class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder
  }

  encode(str) {
    return this.encoder.encode(str)
  }

  decode(str) {
    return this.encoder.decode(str)
  }
}

class Base64EncoderImplementor {
  encode(str) {
    console.log('====================================')
    console.log(str)
    console.log('====================================')
    return window.btoa(str)
  }

  decode(str) {
    return window.atob(str)
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str
      .split('.')
      .filter(Boolean)
      .reduce((acc, cur) => {
        return acc + `<p>${cur.trim()}</p>`
      }, '')
  }
  decode(str) {
    return str
      .split('</p>')
      .filter(Boolean)
      .map((el) => el.replace('<p>', ''))
      .reduce((acc, cur) => {
        return acc + `${cur.trim()}.`
      }, '')
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor())

console.log('====================================')
console.log('====================================')
console.log('====================================')

const encoded = encoder1.encode('duck duck go')
console.log(encoded)
const decoded = encoder1.decode(encoded)
console.log(decoded)

console.log('====================================')
console.log('====================================')
console.log('====================================')

const encode2 = new EncoderTextAbstraction(new HTMLEncoderImplementor())
const encoded2 = encode2.encode(
  'This is the first sentence. This is the second sentence. This is the third sentence.'
)
console.log(encoded2)
const decoded2 = encode2.decode(encoded2)
console.log(decoded2)
