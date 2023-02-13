/* eslint-disable no-multi-assign */
import { common, components, util } from "replugged";
import { NavBarClasses } from "./requiredModules.jsx";
import { PluginInjector } from "../index.jsx";
const { contextMenu: ContextMenuApi } = common;
const {
  ContextMenu: { ContextMenu, MenuItem },
} = components;
export const HBCM = (window.HomeButtonContextMenuApi ||= new (class HomeButtonContextMenuApi {
  constructor() {
    this.items = new Map();
    this.openContextMenu = this.openContextMenu.bind(this);
  }
  addItem(id, item) {
    this.items.set(id, item);
    this.forceUpdate();
  }
  removeItem(id) {
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
  openContextMenu(event) {
    const HomeButtonContextMenuItems = this.items.size
      ? Array.from(this.items.values()).sort((a, b) => a?.props?.label?.localeCompare(b.label))
      : [
          <MenuItem
            {...{
              label: "♫ ⊂(｡◕‿‿◕｡⊂) ♪",
              id: "no-items",
            }}
          />,
        ];
    const HomeButtonContextMenu = (props) => (
      <ContextMenu {...props}>{...HomeButtonContextMenuItems}</ContextMenu>
    );
    ContextMenuApi.open(event, (e) => (
      <HomeButtonContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
    ));
  }
})());
