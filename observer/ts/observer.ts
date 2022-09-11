interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;

  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[] = [];

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T) {
    this.observers.forEach((observer) => observer.refresh(value));
  }
}

class Observer<T> {
  private fn: (value: T) => void;
  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }
  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();

const observer1 = new Observer<number>((value) => {
  console.log('osn 1: ', value);
});
const observer2 = new Observer<number>((value) => {
  console.log('osn 2: ', value);
});

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify(1.2);
subject.notify(2.3);
subject.notify(3.4);

const subjectString = new Subject<string>();

const observerString1 = new Observer<string>((value) => {
  console.log('oss 1: ', value);
});
const observerString2 = new Observer<string>((value) => {
  console.log('oss 2: ', value);
});

subjectString.subscribe(observerString1);
subjectString.subscribe(observerString2);

subjectString.notify('Hello World');
subjectString.notify('from');
subjectString.notify('Observer Pattern');
