console.log('Forms')

class Form {
  constructor(controls, action) {
    this.controls = controls
    this.action = action
  }

  getContent() {
    return `
      <form method="post" action="${this.action}">
        <hr />
        ${this.controls.reduce((acc, control) => {
          return (
            acc +
            `
            <div class="form-group">
              <div class="form-control">
                ${this.getLabel(control)}
                ${this.getInput(control)}
              </div>
            </div>
          `
          )
        }, '')}
        <hr />
        <button type="submit">Send</button>
      </form>
    `
  }

  getLabel(control) {
    return `
      <label labelFor="${control.name}">${control.text}</label>
    `
  }

  getInput(control) {
    return `
      <input
        type="${control.type}"
        name="${control.name}"
        id="${control.name}"
        ${control.placeholder ? `placeholder="${control.placeholder}"` : ''}
        ${control.required ? `required="${control.required}"` : ''}
      />
    `
  }
}

class FormBuilder {
  constructor() {
    this.reset()
  }

  setAction(action) {
    this.action = action
    return this
  }

  setCheckBox(name, text, placeholder, required = false) {
    this.controls.push({
      type: 'checkbox',
      name,
      text,
      placeholder,
      required,
    })
    return this
  }

  setText(name, text, placeholder, required = false) {
    this.controls.push({
      type: 'text',
      name,
      text,
      placeholder: placeholder || text,
      required,
    })
    return this
  }

  setEmail(name, text, placeholder, required = false) {
    this.controls.push({
      type: 'email',
      name,
      text,
      placeholder: placeholder || text,
      required,
    })
    return this
  }

  setNumber(name, text, placeholder, required = false) {
    this.controls.push({
      type: 'number',
      name,
      text,
      placeholder: placeholder || text,
      required,
    })
    return this
  }

  setColor(name, text, placeholder, required = false) {
    this.controls.push({
      type: 'color',
      name,
      text,
      placeholder: placeholder || text,
      required,
    })
    return this
  }

  build() {
    const form = new Form(this.controls, this.action)
    this.reset()
    return form
  }

  reset() {
    this.action = ''
    this.controls = []
  }

  static create(...args) {
    return new FormBuilder(...args)
  }
}

// class Director
class Director {
  constructor(formBuilder) {
    this.setBuilder(formBuilder)
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder
  }

  createPeopleForm() {
    this.formBuilder.reset()
    this.formBuilder
      .setText('name', 'Name', 'Enter your name', REQUIRED)
      .setText('lastName', 'Last Name', 'Enter your last name', OPTIONAL)
  }

  createContactForm() {
    this.formBuilder.reset()
    this.formBuilder
      .setText('name', 'Name', 'Enter your name', REQUIRED)
      .setText('lastName', 'Last Name', 'Enter your last name', OPTIONAL)
      .setEmail('email', 'Email', 'Enter your email', REQUIRED)
  }
}

const frmBuilder = new FormBuilder()

const REQUIRED = true,
  OPTIONAL = false

const formPeople = frmBuilder
  .setAction('add.php')
  .setText('firstName', 'Name', 'Your name', REQUIRED)
  .setText('lastName', 'Last Name', 'Enter your last name', OPTIONAL)
  .setNumber('age', 'Age', 'Enter your age', REQUIRED)
  .setEmail('email', 'Email', 'Enter your email', REQUIRED)
  .setCheckBox('terms', 'Terms and conditions', null, REQUIRED)
  .setCheckBox('newsletter', 'Newsletter', null, OPTIONAL)
  .setCheckBox('drinker', 'I am a drinker', null, OPTIONAL)
  .setColor('favoriteColor', 'Color', null, OPTIONAL)
  .build()

console.log(formPeople)

form1.innerHTML = formPeople.getContent()

const formEmail = frmBuilder
  .setAction('send.php')
  .setText('email', 'Email', 'Enter your email', REQUIRED)
  .setText('name', 'Name', 'Enter your name', REQUIRED)
  .build()

form2.innerHTML = formEmail.getContent()

const formDirector = new Director(frmBuilder)

formDirector.createPeopleForm()
form3.innerHTML = frmBuilder.build().getContent()

formDirector.createPeopleForm()
form4.innerHTML = frmBuilder.build().getContent()

formDirector.createContactForm()
form5.innerHTML = frmBuilder.build().getContent()
