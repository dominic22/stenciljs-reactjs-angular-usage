import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'st-nav-bar',
  styleUrl: 'st-nav-bar.less'
})
export class StButton {
  @Prop() label: string;

  render() {
  return (
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li style={ {float: "right" }}><a class="active" href="#about">About</a></li>
    </ul>
  );
  }
}
