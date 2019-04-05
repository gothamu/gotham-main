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
      <style>
        :host {
          --gotham-logo-fill: #410a41;
          --gotham-logo-fill-dark: #e8b0e8;
          --gotham-logo-height: 80px;
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
          height: var(--gotham-logo-height);
          fill: var(--gotham-logo-fill);
        }
        :host([theme="dark"]) svg {
          fill: var(--gotham-logo-fill-dark);
        }
      </style>
      <div id="container">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 269.996 269.996"
          style="enable-background:new 0 0 269.996 269.996;"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M256.925,137.064c-0.823,0.067-1.63,0.149-2.426,0.24
       C255.365,137.532,256.189,137.475,256.925,137.064z"
              />
              <path
                d="M267.728,99.195c-29.327-26.908-9.023-52.473,2.268-59.774
       c-74.255,29.398-69.55,105.234-81.829,113.156c-11.727,7.797-22.692-2.98-28.14-13.195c3.392,13.162-10.42,21.885-20.414,7.166
       c2.686,20.109,9.489,33.442-18.316,25.955C90.703,164.274,39.174,139.222,0,170.907c22.894-1.74,47.758,16.474,46.624,36.849
       c16.125-12.228,41.249,3.672,40.871,22.819c7.446-20.636,40.434-25.318,55.434-6.389c-5.479-33.531,35.738-27.986,44.412-6.672
       c-10.837-45.279,22.031-46.93,40.482-36.654c-6.701-28.987,4.347-40.996,26.676-43.555
       C245.425,134.918,231.762,100.52,267.728,99.195z"
              />
            </g>
          </g>
        </svg>
      </div>
    `;
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
