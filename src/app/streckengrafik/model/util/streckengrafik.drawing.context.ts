import {D3Utils} from "../../../view/editor-main-view/data-views/d3.utils";

export class StreckengrafikDrawingContext {
  static oldRect: DOMRect = undefined;

  public static updateDrawingContainerData() {
    if (D3Utils.isFastRenderingUpdateOn()) {
      return;
    }
    const rootDoc = document.getElementById("main-drawing-container-root");
    if (rootDoc !== null) {
      const rect: DOMRect = rootDoc.getBoundingClientRect();
      let enforceUpdate = false;
      if (StreckengrafikDrawingContext.oldRect === undefined) {
        StreckengrafikDrawingContext.oldRect = rect;
        enforceUpdate = true;
      }
      if (
        enforceUpdate ||
        StreckengrafikDrawingContext.oldRect.width !== rect.width ||
        StreckengrafikDrawingContext.oldRect.height !== rect.height
      ) {
        document.documentElement.style.setProperty(
          "--STRECKENGRAFIK_MAIN_CONTENT_WIDTH",
          rect.width + "px",
        );
        document.documentElement.style.setProperty(
          "--STRECKENGRAFIK_MAIN_CONTENT_HEIGHT",
          rect.height + "px",
        );
        document.documentElement.style.setProperty(
          "--STRECKENGRAFIK_MAIN_W",
          rect.width - 100 + "px",
        );
        document.documentElement.style.setProperty(
          "--STRECKENGRAFIK_MAIN_H",
          rect.height - 120 + "px",
        );
        StreckengrafikDrawingContext.oldRect = rect;
      }
    }
  }

  public static getDrawingContextRect(): DOMRect {
    StreckengrafikDrawingContext.updateDrawingContainerData();
    return StreckengrafikDrawingContext.oldRect;
  }
}
