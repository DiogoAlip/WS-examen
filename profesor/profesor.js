import { arrAlumnos } from "../listAlumnos";

let socket = io();

const form = document.querySelector("form");
const inputCode = document.getElementById("inputCode");
const inputNote = document.getElementById("inputNote");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputCode.value && inputNote.value && arr) {
    socket.emit("submitNotes", [inputCode.value, inputNote.value]);
    inputCode.value = "";
    inputNote.value = "";
    inputCode.blur();
    inputNote.blur();
  }
});
