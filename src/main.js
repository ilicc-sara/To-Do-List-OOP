"use strict";
import "./style.css";

const form = document.querySelector(".form");
const inputNameEl = document.querySelector(".input-name");

let inputName = "";

inputNameEl.addEventListener("input", function (e) {
  inputName = e.target.value;
});

class ToDoCreator {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.isDone = false;
  }

  // set id(id) {
  //   id = crypto.randomUUID();
  //   this._id = id;
  // }

  // set name(name) {
  //   name = "";
  //   this._name = name;
  // }

  // set isDone(value) {
  //   value = false;
  //   this._isDone = value;
  // }

  // get id() {
  //   return this._id;
  // }

  // get name() {
  //   return this._name;
  // }

  // get isDone() {
  //   return this._isDone;
  // }
}

class ManagerCreator {
  constructor() {
    this.toDos = [];
  }

  // get toDos() {
  //   return this.toDos;
  // }

  set(toDo) {
    this.toDos.push(toDo);
  }
}

const allToDos = new ManagerCreator();

// const toGo = new ToDoCreator("run");
// console.log(toGo);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputNameEl.value = "";
  console.log("submit form");

  console.log(inputName);

  const newToDo = new ToDoCreator(inputName);

  console.log(newToDo);

  allToDos.set(newToDo);
});
