import { Component, h } from '@stencil/core';

@Component({
  tag: 'st-tile',
  styleUrl: 'st-tile.less'
})
export class StTile {
  render() {
    return (<slot/>);
  }
}
