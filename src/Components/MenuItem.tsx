import { toast } from "replugged/common";
import { ContextMenu } from "replugged/components";
import { PluginLogger, SettingValues } from "@this";
import { DefaultSettings } from "@consts";
import { AuthenticationStore } from "@lib/RequiredModules";
import Icons from "@Icons";

export default (): React.ReactElement | null => {
  const showToast = SettingValues.get("showToast", DefaultSettings.showToast);
  const token = AuthenticationStore.getToken?.();

  if (!token) {
    PluginLogger.error("Failed to find your token");
    return null;
  }

  return (
    <ContextMenu.MenuItem
      label="Copy Token"
      id="copy-token"
      icon={() => <Icons.auth width="20" height="20" />}
      action={() => {
        try {
          DiscordNative.clipboard.copy(token);
          if (showToast) toast.toast(`Token Copied to Clipboard.`, toast.Kind.SUCCESS);
        } catch (error) {
          if (showToast) toast.toast(` Copying the token.`, toast.Kind.FAILURE);
          PluginLogger.error(error);
        }
      }}
    />
  );
};
