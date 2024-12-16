import {Injectable} from "@angular/core";
import {DataService} from "../data/data.service";
import {FilterService} from "../ui/filter.service";
import {TrainrunService} from "../data/trainrun.service";
import {TrainrunSectionService} from "../data/trainrunsection.service";
import {UiInteractionService} from "../ui/ui.interaction.service";
import {NodeService} from "../data/node.service";
import {NoteService} from "../data/note.service";
import {Vec2D} from "../../utils/vec2D";
import {Node} from "../../models/node.model";
import {ViewportCullService} from "../ui/viewport.cull.service";

@Injectable({
  providedIn: "root",
})
export class PositionTransformationService {
  constructor(
    private readonly dataService: DataService,
    private readonly trainrunService: TrainrunService,
    private readonly trainrunSectionService: TrainrunSectionService,
    private readonly nodeSerivce: NodeService,
    private readonly noteSerivce: NoteService,
    private readonly filterService: FilterService,
    private readonly uiInteractionService: UiInteractionService,
    private readonly viewportCullService: ViewportCullService,
  ) {
  }

  private scaleFullNetzgrafikArea(factor: number, zoomCenter: Vec2D, windowViewboxPropertiesMapKey: string) {
    const scaleCenterCoordinates: Vec2D = this.computeScaleCenterCoordinates(zoomCenter, windowViewboxPropertiesMapKey);
    const focalNode: Node = this.getFocalNode(scaleCenterCoordinates);

    this.nodeSerivce.getNodes().forEach((n, index) => {
      let newPos = new Vec2D(
        (n.getPositionX() - scaleCenterCoordinates.getX()) * factor + scaleCenterCoordinates.getX(),
        (n.getPositionY() - scaleCenterCoordinates.getY()) * factor + scaleCenterCoordinates.getY()
      );

      if (focalNode?.getId() === n.getId()) {
        const delta = Vec2D.sub(newPos, new Vec2D(focalNode.getPositionX(), focalNode.getPositionY(),));
        newPos = Vec2D.sub(newPos, delta);
      }
      n.setPosition(newPos.getX(), newPos.getY());
    });
  }

  private computeScaleCenterCoordinates(zoomCenter: Vec2D,
                                        windowViewboxPropertiesMapKey: string): Vec2D {
    const vp =
      this.uiInteractionService.getViewboxProperties(windowViewboxPropertiesMapKey);
    const scaleCenterCoordinates = new Vec2D(
      vp.panZoomLeft + zoomCenter.getX() * vp.panZoomWidth,
      vp.panZoomTop + zoomCenter.getY() * vp.panZoomHeight,
    );

    return scaleCenterCoordinates;
  }

  private getFocalNode(scaleCenterCoordinates: Vec2D): Node {
    // get the node under the mouse cursos and update the scaleCenter
    const focalNode = this.nodeSerivce.getNodes().find((n) =>
      scaleCenterCoordinates.getX() > n.getPositionX() && scaleCenterCoordinates.getX() < (n.getPositionX() + n.getNodeWidth()) &&
      scaleCenterCoordinates.getY() > n.getPositionY() && scaleCenterCoordinates.getY() < (n.getPositionY() + n.getNodeHeight())
    );
    return focalNode;
  }

  private scaleNetzgrafikSelectedNodesArea(factor: number, zoomCenter: Vec2D, nodes: Node[], windowViewboxPropertiesMapKey: string) {
    const scaleCenterCoordinates: Vec2D = this.computeScaleCenterCoordinates(zoomCenter, windowViewboxPropertiesMapKey);
    const focalNode: Node = this.getFocalNode(scaleCenterCoordinates);

    if (!focalNode) {
      /*
      * if more than one node is selected (multi-selected nodes) transform the nodes with center of
      * mass
       */
      let centerOfMass = new Vec2D(0, 0);
      nodes.forEach(n => {
        centerOfMass = Vec2D.add(
          centerOfMass,
          new Vec2D(n.getPositionX() + n.getNodeWidth() / 2.0, n.getPositionY() + n.getNodeHeight() / 2.0)
        );
      });
      centerOfMass = Vec2D.scale(centerOfMass, 1.0 / Math.max(1, nodes.length));

      scaleCenterCoordinates.setData(centerOfMass.getX(), centerOfMass.getY());
    }

    nodes.forEach((n, index) => {
      let newPos = new Vec2D(
        (n.getPositionX() + n.getNodeWidth() / 2.0 - scaleCenterCoordinates.getX()) * factor + scaleCenterCoordinates.getX() - n.getNodeWidth() / 2.0,
        (n.getPositionY() + n.getNodeHeight() / 2.0 - scaleCenterCoordinates.getY()) * factor + scaleCenterCoordinates.getY() - n.getNodeHeight() / 2.0
      );

      if (focalNode?.getId() === n.getId()) {
        const delta = Vec2D.sub(newPos, new Vec2D(focalNode.getPositionX(), focalNode.getPositionY(),));
        newPos = Vec2D.sub(newPos, delta);
      }

      n.setPosition(newPos.getX(), newPos.getY());

    });
  }

  scaleNetzgrafikArea(factor: number, zoomCenter: Vec2D, windowViewboxPropertiesMapKey: string) {
    const nodes: Node[] = this.nodeSerivce.getSelectedNodes();

    if (nodes.length < 2) {
      this.scaleFullNetzgrafikArea(factor, zoomCenter, windowViewboxPropertiesMapKey);
    } else {
      this.scaleNetzgrafikSelectedNodesArea(factor, zoomCenter, nodes, windowViewboxPropertiesMapKey);
    }

    this.trainrunSectionService.getTrainrunSections().forEach(ts => {
      ts.routeEdgeAndPlaceText();
      ts.getSourceNode().updateTransitionsAndConnections();
    });

    this.nodeSerivce.initPortOrdering();

    this.viewportCullService.onViewportChangeUpdateRendering(true);
  }

}
