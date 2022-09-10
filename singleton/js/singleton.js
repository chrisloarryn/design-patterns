console.log("singleton.js");

class Singleton {

  static getInstance () {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  constructor() {
    console.log("enter to the constructor");
    this.random = Math.random();
    if (Singleton.instance) {
      console.log("return existing instance");
      return Singleton.instance;
    }
    console.log("if doesn't exist, create a new instance");
    Singleton.instance = this;
  }
}

// const firstSingletonInstance = new Singleton();
// const secondSingletonInstance = new Singleton();
// const thirdSingletonInstance = new Singleton();


// console.log(firstSingletonInstance.random);
// console.log(secondSingletonInstance.random);
// console.log(thirdSingletonInstance.random);

// console.log(firstSingletonInstance === secondSingletonInstance);
// console.log(secondSingletonInstance === thirdSingletonInstance);


// const anotherInstance = Singleton.getInstance();

// console.log(anotherInstance.random);

class WeekDays {
  dayES = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  dayEN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor(lang) {
    if (!["es", "en"].includes(lang)) {
      throw new Error("Language not supported");
    }

    this.lang = lang;
    if(WeekDays.instance) {
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }

  getDays () {
    return this.lang === "es" ? this.dayES : this.dayEN;
  }


}

const weekDaysES = new WeekDays("es");
const weekDaysEN = new WeekDays("en");

// error because language not supported
// const weekDaysFR = new WeekDays("fr");

console.log(weekDaysES.getDays());
console.log(weekDaysEN.getDays());