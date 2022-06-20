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
  return beginningMessagePartials[0];
};

const selectMessageMiddle = () => {
  return middleMessagePartials[0];
};

const selectMessageEnding = () => {
  return endMessagePartials[0];
};

const formatMesssage = (message1, message2, message3) => {
  return `${message1} ${message2} ${message3}`;
};

const printMessage = () => {
  let message = generateMessage();

  console.log(`--== ${message} ==--`);
};

printMessage();
