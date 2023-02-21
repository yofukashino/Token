import { common, components, util } from "replugged";
import { NavBarClasses } from "./requiredModules";
import { PluginInjector } from "../index";
import * as Types from "../types";
const { contextMenu: ContextMenuApi } = common;
const {
  ContextMenu: { ContextMenu, MenuItem },
} = components;
class HomeButtonContextMenuApi {
  items: Map<string, Types.ReactElement>;
  constructor() {
    this.items = new Map();
    this.openContextMenu = this.openContextMenu.bind(this);
  }
  addItem(id: string, item: Types.ReactElement) {
    this.items.set(id, item);
    this.forceUpdate();
  }
  removeItem(id: string) {
    this.items.delete(id);
    this.forceUpdate();
  }
  forceUpdate() {
    const element = document.querySelector(`.${NavBarClasses.guilds}`);
    if (!element) return;
    const toForceUpdate = util.getOwnerInstance(element);
    const forceRerender = PluginInjector.instead(toForceUpdate, "render", () => {
      forceRerender();
      return null;
    });
    toForceUpdate.forceUpdate(() => toForceUpdate.forceUpdate(() => {}));
  }
  openContextMenu(event: Types.UIEvent) {
    const HomeButtonContextMenuItems = this.items.size
      ? Array.from(this.items.values()).sort((a, b) =>
          a?.props?.label?.localeCompare(b?.props?.label),
        )
      : [
          <MenuItem
            {...{
              label: "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
              id: "no-items",
            }}
          />,
        ];
    const HomeButtonContextMenu = (props: Types.ExtendedContextMenuArgs) => (
      <ContextMenu {...{ ...props, navId: "tharki" }}>{...HomeButtonContextMenuItems}</ContextMenu>
    );
    ContextMenuApi.open(event, ((e: Types.ContextMenuArgs) => (
      <HomeButtonContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
    )) as unknown as Types.ContextMenu);
  }
}

export const HBCM = ((): Types.HomeButtonContextMenuApi => {
  if (Object.hasOwnProperty.call(window, "HomeButtonContextMenuApi"))
    return window.HomeButtonContextMenuApi;
  window.HomeButtonContextMenuApi =
    new HomeButtonContextMenuApi() as Types.HomeButtonContextMenuApi;
  return window.HomeButtonContextMenuApi;
})();
