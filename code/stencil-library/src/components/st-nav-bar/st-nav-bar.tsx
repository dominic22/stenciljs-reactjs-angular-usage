import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component(
  {
    tag: 'st-nav-bar',
    styleUrl: 'st-nav-bar.less'
  })
export class StNavBar {
  @Prop() labels: string[];
  @Event() navBarItemClicked: EventEmitter<number>;

  render() {
    return (
      <ul>
        {
          this.labels.map((label, index) => {
            return (<li onClick={ () => {
              this.navBarItemClicked.emit(index);
            } }>{ label }</li>)
          })
        }
      </ul>
    );
  }
}

