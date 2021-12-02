import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid wrapper">
        <div>
          <a>
            <i class="h4 fa fa-vk"></i>
          </a>
          <p class="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="col-sm-6 col-md-12 social-icons-footer">
          <ul class="list-inline social-buttons">
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 copyright-bottom">
          <span class="copyright">Copyright &copy; Vinnotech 2021</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
