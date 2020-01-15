import { Component, h, Prop } from '@stencil/core';

export type StButtonType = 'primary' | 'error';

@Component(
  {
    tag: 'st-button',
    styleUrl: 'st-button.less',
    shadow: true,
  })
export class StButton {
  @Prop() label: string;
  @Prop() buttonType?: StButtonType;

  render() {
    return (<button class={ this.buttonType }>{ this.label }</button>);
  }
}
