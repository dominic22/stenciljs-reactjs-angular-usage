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
  async show() {
    this.isVisible = true;
  }

  @Method()
  async hide() {
    this.isVisible = false;
  }

  render() {
    return <div class={ `pop-up-container ${ this.isVisible ? 'visible' : '' }` }>
      <div class='pop-up-content'>
        <div class="header"><h3>{ this.headline }</h3></div>
        <div class="body"><p>{ this.message }</p></div>
        <div class="footer">
          <st-button label="Schließen" onClick={ () => {
            this.hide()
            this.popUpAccepted.emit(false);
          } }></st-button>
          <st-button class="primary" label="Akzeptieren" onClick={ () => {
            this.hide()
            this.popUpAccepted.emit(true);
          } }></st-button>
        </div>
      </div>
    </div>
  }
}
