import addSlashCommand from "./SlashCommand";
import patchTokenLogin from "./TokenLogin";
export const applyInjections = (): void => {
  addSlashCommand();
  patchTokenLogin();
};
export default { applyInjections };
