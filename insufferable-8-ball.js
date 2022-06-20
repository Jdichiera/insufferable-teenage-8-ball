import { greetingMessagePartials } from "./message_partials/greeting-message-partials.js";
import { beginningMessagePartials } from "./message_partials/beg-message-partials.js";
import { middleMessagePartials } from "./message_partials/mid-message-partials.js";
import { endMessagePartials } from "./message_partials/end-message-partials.js";

const generateMessage = () => {
  let greeting = selectGreeting();
  let messageBeginning = selectMessageBeginning();
  let messageMiddle = selectMessageMiddle();
  let messageEnding = selectMessageEnding();

  return formatMesssage(
    greeting,
    messageBeginning,
    messageMiddle,
    messageEnding
  );
};

const selectGreeting = () => {
  let randomIndex = getRandomIndex(greetingMessagePartials.length);
  return greetingMessagePartials[randomIndex];
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

const formatMesssage = (greeting, message1, message2, message3) => {
  let newLine = "\n";
  let tab = "\t";
  let message =
    "--== Insufferable Teenage Magic 8-Ball ==--" +
    "\n\n\tWith your question in mind .. you approach the all knowing 8-Ball .." +
    "\n\n\t" +
    greeting +
    "\n\tYou ask your question..." +
    "\n\n\t" +
    "\n\t" +
    message1 +
    "\n\t" +
    message2 +
    " " +
    message3;
  return message;
};

const getRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};

const printMessage = () => {
  let message = generateMessage();

  console.log(message);
};

printMessage();
