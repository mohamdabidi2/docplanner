
import React, { Component } from 'react';
import './Apps.css';
class Header extends Component {
  render() {
    return (
      <div className="App">
<header>
        <div className="header">
            <div className="header-logo">
                <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="image" width="350px"/>
            </div>
            <div>
                    <ul>
                            <li><a className="aaa" href="#">About us</a></li>
                            <li><a href="#">Carrer</a></li>
                            <li className="dropdown">
                              <a href="javascript:void(0)" className="dropbtn">Departments</a>
                              <div className="dropdown-content">
                                <a href="#">Marketing & PR</a>
                                <a href="#">Customer Success & Sales</a>
                                <a href="#">IT, Product, Design & UX</a>
                                <a href="#">Finance & Administration</a>
                                <a href="#">HR & more </a>
                              </div>
                            </li>
                          </ul>
            </div>
        </div>
    </header>

      </div>
    );
  }
}

export default Header;

