import { contextMenu as ContextMenuApi } from "replugged/common";
import { ContextMenu } from "replugged/components";
import Types from "../types";
class HomeButtonContextMenuApi {
  items: Map<string, React.ReactElement>;
  constructor() {
    this.items = new Map();
    this.openContextMenu = this.openContextMenu.bind(this);
  }
  addItem(id: string, item: React.ReactElement) {
    this.items.set(id, item);
  }
  removeItem(id: string) {
    this.items.delete(id);
  }
  openContextMenu(event: React.MouseEvent) {
    const HomeButtonContextMenuItems = this.items.size
      ? Array.from(this.items.values())
          .filter(Boolean)
          .sort((a, b) => a?.props?.label?.localeCompare(b?.props?.label))
      : [];
    const HomeButtonContextMenu = (props) => (
      <ContextMenu.ContextMenu {...{ ...props, navId: "tharki" }}>
        {...HomeButtonContextMenuItems}
      </ContextMenu.ContextMenu>
    );
    ContextMenuApi.open(event, (e) => (
      <HomeButtonContextMenu {...Object.assign({}, e, { onClose: ContextMenuApi.close })} />
    ));
  }
}

export default await new Promise<Types.HomeButtonContextMenuApi>((resolve, reject) => {
  try {
    if (Object.hasOwnProperty.call(window, "HomeButtonContextMenuApi"))
      resolve(window.HomeButtonContextMenuApi);
    else
      window.HomeButtonContextMenuApi =
        new HomeButtonContextMenuApi() as Types.HomeButtonContextMenuApi;
    resolve(window.HomeButtonContextMenuApi);
  } catch (error) {
    reject(error);
  }
});
