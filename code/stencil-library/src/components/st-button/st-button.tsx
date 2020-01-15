import { Component, h, Prop } from '@stencil/core';

@Component(
  {
    tag: 'st-button',
    styleUrl: 'st-button.less'
  })
export class StButton {
  @Prop() label: string;

  render() {
    return (<button>{ this.label }</button>);
  }
}
