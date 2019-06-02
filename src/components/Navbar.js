import React, { Component } from "react";
import { Navbar } from "react-bulma-components/full";
import logo from "../styles/assets/replacewithlogo.png";

class NavBar extends Component {
  render() {
    return (
      <nav
        class="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="">
            <figure class="image is-150x80">
            <img
              class="is-rounded"
              src={logo}
              width="112"
              height="28"
            />
            </figure>
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navLinks" class="navbar-menu">
          <div class="navbar-end">
          <div class="navbar-end">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Connection</a>
            <a class="navbar-item">Books</a>
          </div>
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-inverted is-info is-outlined is-small">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light is-small">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
