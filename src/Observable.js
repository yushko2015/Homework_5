class Observable {
  constructor(val) {
    this._value = val;

    this._listners = [];
  }

  subscribe(cb) {
    this._listners.push(() => cb(this._value));
  }

  next(val) {
    this._value = val;

    this._listners.forEach(cb => {
      cb();
    });
  }
}

const customObservable = new Observable(1);

customObservable.subscribe(curentValue => {
  console.log(curentValue);
});

customObservable.subscribe(curentValue => {
  console.log("second", curentValue);
});

customObservable.next(2);
