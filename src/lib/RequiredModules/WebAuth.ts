import { webpack } from "replugged";
import type Types from "@Types";

export default await webpack
  .waitForModule<Types.DefaultTypes.ObjectExports>(webpack.filters.bySource(".joiningAsAvatar,"), {
    timeout: 10000,
  })
  .catch(() => {
    throw new Error("Failed To Find  Module");
  });
