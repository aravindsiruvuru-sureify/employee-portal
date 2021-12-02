import React from "react";

const Header = () => {
  return (
    <header id="header">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid top-nav">
          <div class="navbar-header page-scroll">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand logo-top page-scroll" href="#header">
              <i class="h4 fa fa-vk"></i>
            </a>
          </div>
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="hidden nav-buttons">
                <a href="#page-top"></a>
              </li>
              <li>
                <a class="page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#consulting">
                  Consulting
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#products">
                  Products
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#employees">
                  Employees
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#clients">
                  Clients
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li>
                <a class="page-scroll" href="#contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
