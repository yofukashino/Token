import addSlashCommand from "./SlashCommand";
import patchTokenLogin from "./TokenLogin";
export default (): void => {
  addSlashCommand();
  patchTokenLogin();
};
