"use strict";
import "./style.css";

const form = document.querySelector(".form");
const inputNameEl = document.querySelector(".input-name");

let inputName = "";

inputNameEl.addEventListener("input", function (e) {
  inputName = e.target.value;
});

class ToDo {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.isDone = false;
  }

  changeIsDone() {
    this.isDone = !this.isDone;
  }
}

class ManagerCreator {
  constructor() {
    this.toDos = [];
  }

  set(toDo) {
    this.toDos.push(toDo);
  }

  findId(id) {
    this.toDos.find((toDo) => toDo.id === id);
  }
}

const allToDos = new ManagerCreator();

// const toGo = new ToDoCreator("run");
// console.log(toGo);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputNameEl.value = "";
  const newToDo = new ToDo(inputName);

  allToDos.set(newToDo);

  console.log(allToDos.toDos);
});
