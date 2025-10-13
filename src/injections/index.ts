import { PluginInjector } from "@this";
import Modules from "@lib/RequiredModules";

export const applyInjections = async (): Promise<void> => {
  await Modules.loadModules();
  await import("./SlashCommand");
  await import("./TokenLogin");
};
export const removeInjections = (): void => PluginInjector.uninjectAll();

export default { applyInjections, removeInjections };
