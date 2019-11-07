import React from "react";
import { observer } from "mobx-react";
import { observable, action, computed, decorate, autorun } from "mobx";

import "./styles.css";

class Counter {
  count = 0;
  name = "Unnamed";

  increment() {
    this.count += 1;
  }

  setName() {
    this.name = "Test";
  }

  get countPowToSquere() {
    return this.count * this.count;
  }
}

decorate(Counter, {
  count: observable,
  name: observable,
  setName: action.bound,
  increment: action.bound,
  countPowToSquere: computed
});

const store = new Counter();

autorun(() => {
  console.log("count autorun", store.count);
});

function App() {
  return (
    <div className="App">
      <h1>{store.name}</h1>
      <h1>Counter {store.count}</h1>
      <h1>PowToSquere {store.countPowToSquere}</h1>
      <button onClick={() => store.increment()}>Increment</button>
      <button onClick={store.increment}>Increment</button>
      <button onClick={store.setName}>Set Name</button>
    </div>
  );
}

export const ObserverAppMobix = observer(App);
