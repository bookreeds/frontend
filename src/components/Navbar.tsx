import React, { Component } from "react";
// import { Navbar } from "react-bulma-components";
import logo from "../styles/assets/replacewithlogo.png";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar is-info" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="">
						<figure className="image is-150x80">
							<img className="is-rounded" src={logo} width="112" height="28" />
						</figure>
					</a>

					<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navLinks" className="navbar-menu">
					<div className="navbar-end">
						<div className="navbar-end">
							<a className="navbar-item">Home</a>
							<a className="navbar-item">Connection</a>
							<a className="navbar-item">Books</a>
						</div>
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-inverted is-info is-outlined is-small">
									<strong>Sign up</strong>
								</a>
								<a className="button is-light is-small">Log in</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
