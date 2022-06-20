import { beginningMessagePartials } from "./message_partials/beg-message-partials.js";
import { middleMessagePartials } from "./message_partials/mid-message-partials.js";
import { endMessagePartials } from "./message_partials/end-message-partials.js";

const generateMessage = () => {
  return (
    beginningMessagePartials[0] +
    middleMessagePartials[0] +
    endMessagePartials[0]
  );
};

console.log(`--== ${generateMessage()} ==--`);
