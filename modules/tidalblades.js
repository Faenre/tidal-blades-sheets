import {CustomCypherSheet} from "./cs-extensions.js";

// create new class extensions for godforsaken sheets => overrides templates

  export class TidalBlade extends CustomCypherSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        template: "modules/tidal-blades-sheets/templates/expandedworlds/tidal-blades.html"
      });
    }
  }
