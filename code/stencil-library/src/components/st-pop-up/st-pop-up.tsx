import { Component, Event, EventEmitter, h, Method, Prop, State } from '@stencil/core';

@Component(
  {
    tag: 'st-pop-up',
    styleUrl: 'st-pop-up.less'
  })
export class StPopUp {
  @Prop() headline: string;
  @Prop() message: string;
  @State() isVisible: boolean = false;
  @Event() popUpAccepted: EventEmitter<boolean>;

  @Method()
  async showPopUp() {
    this.isVisible = true;
  }

  @Method()
  async hidePopUp() {
    this.isVisible = false;
  }

  render() {
    return <div class={ `pop-up-container ${ this.isVisible ? 'visible' : '' }` }>
      <div class='pop-up-content'>
        <div class="header"><h1>{ this.headline }</h1></div>
        <div class="body"><h3>{ this.message }</h3></div>
        <div class="footer">
          <st-button label="Schließen" onClick={ () => {
            this.hidePopUp()
            this.popUpAccepted.emit(false);
          } }></st-button>
          <st-button label="Akzeptieren" onClick={ () => {
            this.hidePopUp()
            this.popUpAccepted.emit(true);
          } }></st-button>
        </div>
      </div>
    </div>
  }
}
