import { PluginInjectorUtils, PluginLogger } from "../index";
import { AuthenticationStore } from "../lib/requiredModules";
import Types from "../types";
export default (): void => {
  PluginInjectorUtils.registerSlashCommand({
    name: "token",
    description: "Slash command to get token",
    options: [
      {
        name: "send",
        displayName: "send",
        description: "Share the token publicly in chat",
        type: Types.DefaultTypes.ApplicationCommandOptionType.Boolean,
        required: false,
      },
    ],
    executor: (interaction) => {
      try {
        const token = AuthenticationStore.getToken();
        if (!token) {
          PluginLogger.error(`Whoops! I couldn't find your token.`);
          return {
            send: false,
            result: "Whoops! I couldn't find your token.",
          };
        }
        return {
          send: interaction.getValue("send", false),
          result: token,
        };
      } catch (error) {
        PluginLogger.error(error);
        return {
          send: false,
          result: error,
        };
      }
    },
  });
};
