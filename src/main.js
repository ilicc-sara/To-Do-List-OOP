"use strict";
import "./style.css";

const form = document.querySelector(".form");
const inputNameEl = document.querySelector(".input-name");
const toDoListContainer = document.querySelector(".todo-list");

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
    return this.toDos.find((toDo) => toDo.id === id);
  }

  filter(item) {
    this.toDos = this.toDos.filter((toDo) => toDo.id !== item.id);
  }
}

const allToDos = new ManagerCreator();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newToDo = new ToDo(inputName);
  allToDos.set(newToDo);

  const item = document.createElement("li");
  item.innerHTML = `<span class="todo-name">${inputName}</span> <div class="btn-cont"><button class="btn-done">DONE</button><button class="btn-del">DELETE</button></div>`;
  item.setAttribute("data-id", newToDo.id);
  toDoListContainer.appendChild(item).className = "to-do";
  inputNameEl.value = "";
});

toDoListContainer.addEventListener("click", function (e) {
  // prettier-ignore
  if (!e.target.classList.contains("btn-done") && !e.target.classList.contains("btn-del")) return;

  const targetEl = e.target.closest(".to-do");
  const target = allToDos.findId(targetEl.getAttribute("data-id"));

  if (e.target.classList.contains("btn-done")) {
    target.changeIsDone();

    e.target.style.backgroundColor = "gray";
    targetEl.querySelector(".todo-name").style.textDecoration = "line-through";
  }

  if (e.target.classList.contains("btn-del")) {
    allToDos.filter(target);

    targetEl.remove();
  }
});
