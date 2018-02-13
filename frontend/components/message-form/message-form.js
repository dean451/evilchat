// frontend/components/message-form/message-form.js

// we need to import sendMessage from our client/chat.js

import { sendMessage } from "client/chat";
import "./message-form.css";

function submitMessage(input) {
  // invokes sendMessage, that, in turn, invokes Ruby send_message method
  // that will create a Message instance with ActiveRecord
  sendMessage(input.value);

  // eslint-disable-next-line
  input.value = "";
  input.focus();
}

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  // send a message with cmd/ctrl+enter

  input.addEventListener("keydown", event => {
    if (event.keycode === 13 && event.metaKey) {
      event.preventDefault();
      submitMessage(input);
    }
  });

  submit.addEventListener("click", event => {
    event.preventDefault();
    submitMessage(input);
  });
}
