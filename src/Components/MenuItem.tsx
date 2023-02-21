import { common, components } from "replugged";
import * as Icons from "./Icons";
import { AuthenticationStore, DiscordNative } from "../lib/requiredModules";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
const {
  ContextMenu: { MenuItem },
} = components;
const { toast: Toasts } = common;
export const TokenMenuItem = (
  <MenuItem
    {...{
      label: "Copy Token",
      id: "copy-token",
      icon: () => Icons.auth("20", "20"),
      action: () => {
        try {
          const token = AuthenticationStore.getToken();
          if (!token) {
            PluginLogger.error(`Whoops! I couldn't find your token.`);
            if (SettingValues.get("showToast", defaultSettings.showToast))
              Toasts.toast(`Whoops! I couldn't find your token.`, Toasts.Kind.FAILURE);
            return;
          }
          DiscordNative.clipboard.copy(token);
          if (SettingValues.get("showToast", defaultSettings.showToast))
            Toasts.toast(`Token Copied to Clipboard.`, Toasts.Kind.SUCCESS);
        } catch (error) {
          PluginLogger.error(error);
          if (SettingValues.get("showToast", defaultSettings.showToast))
            Toasts.toast(`Error: ${error}.`, Toasts.Kind.FAILURE);
        }
      },
    }}
  />
);
