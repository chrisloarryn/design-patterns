class Person {
  private name!: string;
  private lastName!: string;
  private age!: number;
  private address!: string;
  private city!: string;
  private country!: string;
  private phone!: string;
  private email!: string;
  private hobbies!: string[];
  private profession!: string;
  private company!: string;
  private position!: string;
  private salary!: number;

  constructor(
    name: string,
    lastName: string,
    age: number,
    address: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    hobbies: string[],
    profession: string,
    company: string,
    position: string,
    salary: number
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.city = city;
    this.country = country;
    this.phone = phone;
    this.email = email;
    this.hobbies = hobbies;
    this.profession = profession;
    this.company = company;
    this.position = position;
    this.salary = salary;
  }

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  getFullAddress(): string {
    return `${this.address}, ${this.city}, ${this.country}`;
  }
}

interface PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  address: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  hobbies: string[];
  profession: string;
  company: string;
  position: string;
  salary: number;

  setName(name: string): PersonBuilder;
  setLastName(lastName: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setAddress(address: string): PersonBuilder;
  setCity(city: string): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  setPhone(phone: string): PersonBuilder;
  setEmail(email: string): PersonBuilder;
  addHobby(hobbies: string): PersonBuilder;
  setProfession(profession: string): PersonBuilder;
  setCompany(company: string): PersonBuilder;
  setPosition(position: string): PersonBuilder;
  setSalary(salary: number): PersonBuilder;
  build(): Person;
}

class NormalPersonBuilder implements PersonBuilder {
  name!: string;
  lastName!: string;
  age!: number;
  address!: string;
  city!: string;
  country!: string;
  phone!: string;
  email!: string;
  hobbies!: string[];
  profession!: string;
  company!: string;
  position!: string;
  salary!: number;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.address = '';
    this.city = '';
    this.country = '';
    this.phone = '';
    this.email = '';
    this.hobbies = [];
    this.profession = '';
    this.company = '';
    this.position = '';
    this.salary = 0;
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setAddress(address: string): PersonBuilder {
    this.address = address;
    return this;
  }

  setCity(city: string): PersonBuilder {
    this.city = city;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  setPhone(phone: string): PersonBuilder {
    this.phone = phone;
    return this;
  }

  setEmail(email: string): PersonBuilder {
    this.email = email;
    return this;
  }

  addHobby(hobby: string): PersonBuilder {
    if (this.hobbies === undefined) {
      this.hobbies = [];
    }
    this.hobbies.push(hobby);
    return this;
  }

  setProfession(profession: string): PersonBuilder {
    this.profession = profession;
    return this;
  }

  setCompany(company: string): PersonBuilder {
    this.company = company;
    return this;
  }

  setPosition(position: string): PersonBuilder {
    this.position = position;
    return this;
  }

  setSalary(salary: number): PersonBuilder {
    this.salary = salary;
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.address,
      this.city,
      this.country,
      this.phone,
      this.email,
      this.hobbies,
      this.profession,
      this.company,
      this.position,
      this.salary
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
  private personBuilder!: PersonBuilder;

  constructor(personBuilder: PersonBuilder) {
    this.setPersonBuilder(personBuilder);
  }

  setPersonBuilder = (personBuilder: PersonBuilder) => {
    this.personBuilder = personBuilder;
  };

  createSimplePerson(name: string, lastName: string) {
    return this.personBuilder.setName(name).setLastName(lastName).build();
  }

  createFullPerson(
    name: string,
    lastName: string,
    age: number,
    address: string,
    city: string,
    country: string,
    phone: string,
    email: string,
    hobbies: string[],
    profession: string,
    company: string,
    position: string,
    salary: number
  ) {
    return this.personBuilder
      .setName(name)
      .setLastName(lastName)
      .setAge(age)
      .setAddress(address)
      .setCity(city)
      .setCountry(country)
      .setPhone(phone)
      .setEmail(email)
      .addHobby(hobbies[0])
      .setProfession(profession)
      .setCompany(company)
      .setPosition(position)
      .setSalary(salary)
      .build();
  }
}

const personBuilder = new NormalPersonBuilder();
const person = personBuilder
  .setName('Cristobal')
  .setAge(25)
  .setLastName('Contreras');

console.log(person);

const personDirector = new PersonDirector(personBuilder);
const simplePerson = personDirector.createSimplePerson(
  'Cristobal',
  'Contreras'
);
console.log(simplePerson);

const fullPerson = personDirector.createFullPerson(
  'Cristobal',
  'Contreras',
  25,
  'Calle 1',
  'Santiago',
  'Chile',
  '123456789',
  '',
  ['Coding'],
  'Software Engineer',
  'Google',
  'Software Engineer',
  100000
);
