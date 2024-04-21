import Modules from "../lib/requiredModules";
import addSlashCommand from "./SlashCommand";
import injectTokenLogin from "./TokenLogin";
export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  addSlashCommand();
  injectTokenLogin();
};
export default { applyInjections };
