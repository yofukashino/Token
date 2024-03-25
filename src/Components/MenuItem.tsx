import { toast as Toasts } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { AuthenticationStore } from "../lib/requiredModules";
import Icons from "./Icons";
export default (
  <ContextMenu.MenuItem
    label="Copy Token"
    id="copy-token"
    icon={() => <Icons.auth width="20" height="20" />}
    action={() => {
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
    }}
  />
);
