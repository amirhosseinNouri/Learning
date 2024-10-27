import { expect, it } from "vitest";

/**
 * How do we add a LOG_OUT and UPDATE_USERNAME events to the
 * DispatchableEvent interface from WITHIN
 * this file?
 */

declare global {
  interface DispatchableEvent {
    LOG_OUT: {};
    UPDATE_USERNAME: {
      username: string;
    };
  }
}

const handler = (event: UnionOfDispatchableEvents) => {
  switch (event.type) {
    case "LOG_OUT":
      console.log("LOG_OUT");
      break;
    case "UPDATE_USERNAME":
      console.log(event.username);
      break;
  }
};

it("Should be able to handle LOG_OUT and UPDATE_USERNAME events", () => {
  handler({ type: "LOG_OUT" });
  handler({ type: "UPDATE_USERNAME", username: "matt" });
});
