/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface StButton {
    'label': string;
  }
  interface StNavBar {
    'label': string;
  }
  interface StTile {}
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLStButtonElement extends Components.StButton, HTMLStencilElement {}
  var HTMLStButtonElement: {
    prototype: HTMLStButtonElement;
    new (): HTMLStButtonElement;
  };

  interface HTMLStNavBarElement extends Components.StNavBar, HTMLStencilElement {}
  var HTMLStNavBarElement: {
    prototype: HTMLStNavBarElement;
    new (): HTMLStNavBarElement;
  };

  interface HTMLStTileElement extends Components.StTile, HTMLStencilElement {}
  var HTMLStTileElement: {
    prototype: HTMLStTileElement;
    new (): HTMLStTileElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'st-button': HTMLStButtonElement;
    'st-nav-bar': HTMLStNavBarElement;
    'st-tile': HTMLStTileElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface StButton {
    'label'?: string;
  }
  interface StNavBar {
    'label'?: string;
  }
  interface StTile {}

  interface IntrinsicElements {
    'my-component': MyComponent;
    'st-button': StButton;
    'st-nav-bar': StNavBar;
    'st-tile': StTile;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'st-button': LocalJSX.StButton & JSXBase.HTMLAttributes<HTMLStButtonElement>;
      'st-nav-bar': LocalJSX.StNavBar & JSXBase.HTMLAttributes<HTMLStNavBarElement>;
      'st-tile': LocalJSX.StTile & JSXBase.HTMLAttributes<HTMLStTileElement>;
    }
  }
}


