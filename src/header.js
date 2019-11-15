import { Component } from "preact";

// Header nav bar for the app

export default class Header extends Component {
  render() {
    return (
      <div class="nav">
        <div class="nav__left">
          <button class="nav__title">
            <img src="wasm-logo.jpg" />
            <h1>Made with WebAssembly</h1>
          </button>
        </div>
        <div class="nav__right">
          <a class="nav__link">Home</a>
          <a class="nav__link">About</a>
        </div>
      </div>
    );
  }
}
