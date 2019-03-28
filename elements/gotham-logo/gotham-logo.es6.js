import{LitElement,html}from"./node_modules/lit-element/lit-element.js";import{HAXWiring}from"./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js";class GothamLogo extends LitElement{render(){return html`
<style>:host {
  display: block;
}

:host([hidden]) {
  display: none;
}
</style>
<slot></slot>
<div>${this.theme}</div>`}static get haxProperties(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Gotham logo",description:"Official mark of Gotham University.",icon:"icons:android",color:"green",groups:["Logo"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"heymp",owner:"Gotham University"}},settings:{quick:[],configure:[{property:"theme",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}static get properties(){return{theme:{name:"theme",type:"String",value:"light",reflectToAttribute:!0,observer:"_themeChanged"}}}tag(){return"gotham-logo"}constructor(){super();this.tag=GothamLogo.tag;let obj=GothamLogo.properties;for(let p in obj){if(obj.hasOwnProperty(p)){if(this.hasAttribute(p)){this[p]=this.getAttribute(p)}else{this.setAttribute(p,obj[p].value);this[p]=obj[p].value}}}}connectedCallback(){super.connectedCallback();this.HAXWiring=new HAXWiring;this.HAXWiring.setup(GothamLogo.haxProperties,GothamLogo.tag,this)}_themeChanged(newValue,oldValue){if(typeof newValue!==typeof void 0){console.log(newValue)}}}customElements.define("gotham-logo",GothamLogo);export{GothamLogo};