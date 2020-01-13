import { Component, Prop, h, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'st-nav-bar',
  styleUrl: 'st-nav-bar.less'
})
export class StNavBar {
  @Prop() labels: Array<string> ;
  @Event() navBarItemClicked: EventEmitter<number>;

  render() {
    console.log('LABELS ', this.labels);
    return (
      <ul>
        {
          this.labels.map((label, index) => {
            <li onClick={ () => {
              this.navBarItemClicked.emit(index);
            } }>{ label }</li>
          })
        }
      </ul>
    );
  }
}

