import { beginningMessagePartials } from "./message_partials/beg-message-partials.js";
import { middleMessagePartials } from "./message_partials/mid-message-partials.js";
import { endMessagePartials } from "./message_partials/end-message-partials.js";

const generateMessage = () => {
  let messageBeginning = selectMessageBeginning();
  let messageMiddle = selectMessageMiddle();
  let messageEnding = selectMessageEnding();

  return formatMesssage(messageBeginning, messageMiddle, messageEnding);
};

const selectMessageBeginning = () => {
  let randomIndex = getRandomIndex(beginningMessagePartials.length);
  return beginningMessagePartials[randomIndex];
};

const selectMessageMiddle = () => {
  let randomIndex = getRandomIndex(middleMessagePartials.length);
  return middleMessagePartials[randomIndex];
};

const selectMessageEnding = () => {
  let randomIndex = getRandomIndex(endMessagePartials.length);
  return endMessagePartials[randomIndex];
};

const formatMesssage = (message1, message2, message3) => {
  return `${message1} ${message2} ${message3}`;
};

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const printMessage = () => {
  let message = generateMessage();

  console.log(`--== ${message} ==--`);
};

printMessage();
