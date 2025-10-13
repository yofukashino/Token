import { webpack } from "replugged";
import type Types from "@Types";

export default await webpack
  .waitForProps<Types.LoginUtils>(["login", "logout"], { timeout: 10000 })
  .catch(() => {
    throw new Error("Failed To Find LoginUtils Module");
  });
