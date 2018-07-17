'use strict';

export class ExpandableBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("Custom element is on the page!");
  }
}

// export ExpandableBox;
