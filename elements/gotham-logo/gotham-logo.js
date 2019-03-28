/**
 * Copyright 2019 Gotham University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html } from "lit-element";
import { HAXWiring } from "@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";
/**
 * `gotham-logo`
 * `Official mark of Gotham University.`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @demo demo/index.html
 */
class GothamLogo extends LitElement {
  // render function
  render() {
    return html`
<style>:host {
  --gotham-logo-fill: #410a41;
  --gotham-logo-fill-dark: #e8b0e8;
  display: block;
}

:host([hidden]) {
  display: none;
}

#container {
  display: block;
  overflow: hidden;
}

svg {
  width: 100%;
  height: auto;
  fill: var(--gotham-logo-fill);
}
:host([theme="dark"]) svg {
  fill: var(--gotham-logo-fill-dark);
}</style>
<div id="container">
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="896.275px" height="896.275px" viewBox="0 0 896.275 896.275" style="enable-background:new 0 0 896.275 896.275;"
    xml:space="preserve">
  <g>
    <path d="M741.371,0L589.225,184.435c-41.758-23.773-91.697-35.617-142.945-35.617c-51.609,0-100.07,12.018-142.026,36.165
      L155.341,0l-0.104,463.281c-0.748,12.105,0,24.436,0,37.271c0,177.252,72.321,329.373,175.791,394.852
      c-58.271-75.131-108.722-156.678-85.348-235.877c133.931-5.393,148.087-6.104,148.087-6.104l47.305,38.557l58.178-38.557
      c97.408,0.695,143.383,2.713,143.383,2.713c6.035,49.635-2.592,158.486-85.869,240.139
      C660.92,831.232,734.676,678.57,734.676,500.57c0-12.469-0.547-24.52-0.547-36.295L741.371,0z M380.706,522.432
      c-13.982,5.6-45.296,24.051-59.844,28.521c-14.548,4.486-34.67,7.27-42.504,0c-7.834-7.271-33.009-31.322-38.035-36.904
      c-5.035-5.617-8.392-50.365,21.252-48.105c30.191,2.279,111.861,35.791,116.896,37.461
      C383.505,505.092,394.689,516.83,380.706,522.432z M647.971,514.049c-5.025,5.582-30.207,29.635-38.025,36.904
      c-7.854,7.27-27.957,4.486-42.504,0c-14.539-4.471-45.861-22.924-59.844-28.521c-14-5.602-2.801-17.34,2.227-19.027
      c5.035-1.67,86.703-35.182,116.904-37.461C656.379,463.684,653.023,508.432,647.971,514.049z"/>
  </svg>
</div>`;
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Gotham logo",
        description: "Official mark of Gotham University.",
        icon: "icons:android",
        color: "green",
        groups: ["Logo"],
        handles: [
          {
            type: "todo:read-the-docs-for-usage"
          }
        ],
        meta: {
          author: "heymp",
          owner: "Gotham University"
        }
      },
      settings: {
        quick: [],
        configure: [
          {
            property: "theme",
            description: "",
            inputMethod: "textfield",
            required: false,
            icon: "icons:android"
          }
        ],
        advanced: []
      }
    };
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      theme: {
        name: "theme",
        type: "String",
        value: "light",
        reflectToAttribute: true,
        observer: "_themeChanged"
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  tag() {
    return "gotham-logo";
  }

  // life cycle
  constructor() {
    super();

    this.tag = GothamLogo.tag;
    // map our imported properties json to real props on the element
    // @notice static getter of properties is built via tooling
    // to edit modify src/gotham-logo-properties.json
    let obj = GothamLogo.properties;
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (this.hasAttribute(p)) {
          this[p] = this.getAttribute(p);
        } else {
          this.setAttribute(p, obj[p].value);
          this[p] = obj[p].value;
        }
      }
    }
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    this.HAXWiring = new HAXWiring();
    this.HAXWiring.setup(GothamLogo.haxProperties, GothamLogo.tag, this);
  }
  // static get observedAttributes() {
  //   return [];
  // }
  // disconnectedCallback() {}

  // attributeChangedCallback(attr, oldValue, newValue) {}
  // Observer theme for changes
  _themeChanged(newValue, oldValue) {
    if (typeof newValue !== typeof undefined) {
      console.log(newValue);
    }
  }
}
customElements.define("gotham-logo", GothamLogo);
export { GothamLogo };
