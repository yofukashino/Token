import { webpack } from "replugged";
import type Types from "@Types";

export default await webpack.waitForStore<Types.AuthenticationStore>("AuthenticationStore");
