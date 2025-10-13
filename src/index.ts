import { Injector, Logger, settings } from "replugged";
import { DefaultSettings, MENU_ITEM_ID } from "@consts";
import Settings from "@components/Settings";
import TokenMenuItem from "@components/MenuItem";
import HomeContext from "@HomeContext";
import Injections from "@Injections";

export const PluginLogger = Logger.plugin("Token", "#ffffff80");
export const SettingValues = settings.init("dev.tharki.Token", DefaultSettings);
export const PluginInjector = new Injector();
export const { utils: PluginInjectorUtils } = PluginInjector;

export const start = (): void => {
  Settings.registerSettings();
  HomeContext.add(MENU_ITEM_ID, TokenMenuItem);
  void Injections.applyInjections().catch((err: unknown) => PluginLogger.error(err));
};

export const stop = (): void => {
  HomeContext.remove(MENU_ITEM_ID);
  Injections.removeInjections();
};

export { _getTokenLogin } from "./plaintextFunctions";

export { Settings } from "@components/Settings";
