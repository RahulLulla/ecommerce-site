import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Create MSW worker
export const worker = setupWorker(...handlers);
