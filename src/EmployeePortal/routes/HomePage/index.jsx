import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from 'react-router-dom';

import "./css/animate.css";
import "./css/bootstrap.css";
import "./css/font-awesome.min.css";
import "./css/style-demo-picker.css";
import "./css/style.css";

import headerBG from "./img/backgrounds/headerbg1.jpg";
import headerBG2 from "./img/backgrounds/headerbg2.jpg";

import JobCard from "../../components/JobCard"



const HomePage = () => {
  const history = useHistory();

  const job = {
    title: "Java – 7 – 12 Yrs – Bangalore",
    description:
      "Expertise in Performance Testing tools like Jmeter|Expertise in Programming/Scripting in C,C++,Java etc|Knowledge of Agile and Dev-Ops methodologies|Nice to have knowledge/experience on container-based applications|Design and Execute Load Tests as per plan and provide detailed feedback after Analysis and look into Infrastructure and Application Metrics to identify potential bottlenecks|Strong background in developing Performance Testing frameworks|utilities, assets & accelerators on various platforms|Knowledge of Performance monitoring tools like (AppDynamisc / Grafana etc)|Knowledge of Performance troubleshooting (heap dump & thread dump analysis) is preferred|Ability to Work with teams to monitor and suggest solutions, test environment-related, monitoring related & load balancing related|Excellent communication skills and ability to work with multiple teams and Clients/ stakeholders in a dynamic environment|",
    primarySkill: "JAVA",
    secondarySkill: "ReactJS",
    salary: "10k - 20k pm",
    ref: 10126,
    postedOn: "November 10, 2021",
    experienceLevel: "Experienced",
    experience: "2-4 years",
    contractType: "Permanent",
    contractDuration: "6 months",
    location: "Bangalore",
    publish: true,
  };
  const handleJobsShowMore=()=>{
      history.push('/jobs');
  }
  
  return (
    <div>
      <Helmet></Helmet>
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
      <section id="slider">
        <div id="myCarousel-one" class="carousel slide">
          <ol class="carousel-indicators">
            <li
              data-target="#myCarousel-one"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#myCarousel-one" data-slide-to="1"></li>
          </ol>
          <div class="carousel-inner">
            <div class="item active">
              <div class="carousel-caption wrapper">
                <div class="row">
                  <div class="col-md-12">
                    <div class="intro-text">
                      <h1 class="intro-lead-in animated bounceInLeft">
                        Creative Digital
                      </h1>
                      <h2 class="intro-heading animated bounceInRight">
                        Agency
                      </h2>
                      <p class="intro-paragraph animated bounceInRight">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima maxime
                        <br />
                        quam architecto quo inventore harum ex magni, dicta
                        impedit.
                      </p>
                    </div>
                    <a
                      href="#services"
                      class="
                      page-scroll
                      btn btn-xl
                      slider-button
                      animated
                      bounceInUp
                    "
                    >
                      Services
                    </a>
                  </div>
                </div>
              </div>
              <img src={headerBG} alt="slider-image" />
            </div>
            <div class="item">
              <div class="carousel-caption wrapper">
                <div class="row">
                  <div class="col-md-12">
                    <div class="intro-text">
                      <h1 class="intro-lead-in animated bounceInLeft">
                        Creative Digital
                      </h1>
                      <h2 class="intro-heading animated bounceInRight">
                        Agency
                      </h2>
                      <p class="intro-paragraph animated bounceInRight">
                        Welcome to our private quarters on the web
                      </p>
                    </div>
                    <a
                      href="#services"
                      class="
                      page-scroll
                      btn btn-xl
                      slider-button
                      animated
                      bounceInUp
                    "
                    >
                      Services
                    </a>
                  </div>
                </div>
              </div>
              <img src={headerBG2} alt="slider" />
            </div>
            <a
              class="myCarousel-one-left"
              href="#myCarousel-one"
              data-slide="prev"
            >
              <i class="fa fa-angle-left"></i>{" "}
            </a>
            <a
              class="myCarousel-one-right"
              href="#myCarousel-one"
              data-slide="next"
            >
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="services">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-lg-12 text-left">
              <h2 class="section-heading">Services</h2>
              <h3 class="section-subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
            </div>
          </div>
          <div class="row text-center">
            <div class="row first-services">
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-desktop"></i>
                <h4 class="service-heading">Web and Graphic Design</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-mobile"></i>
                <h4 class="service-heading">Mobile Applications</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-envelope"></i>
                <h4 class="service-heading">Content Management</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
            <div class="row second-services">
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-cloud"></i>
                <h4 class="service-heading">Cloud Services</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-database"></i>
                <h4 class="service-heading">Data Engineering</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div class="col-sm-12 col-md-4 service">
                <i class="fa fa-line-chart"></i>
                <h4 class="service-heading">Analytics</h4>
                <p class="text-services">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        <div class="container-fluid wrapper ">
          <div class="row">
            <div class="col-lg-12 text-left">
              <h2 class="section-heading">Jobs</h2>
              <h3 class="section-subheading">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div class="center-container">
            <JobCard job={job}/>
            <JobCard job={job}/>
            <JobCard job={job}/>
            <div class="pricing">
              <a href="" class="btn btn-send" onClick={handleJobsShowMore}>
                Show more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="products">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading">Our Product Portfolio</h2>
              <h3 class="section-subheading text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
            </div>
          </div>
          <div id="myCarousel-two" class="carousel slide">
            <div class="carousel-inner team-wrapper">
              <div class="item active">
                <div class="col-xs-12 col-sm-4 col-md-4 team-member">
                  <img src="./img/team/david.png" alt="team-member-img1" />
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 team-member-bio">
                  <h3 class="team-member-name">Some Website1</h3>
                  <p class="text-muted-role">This is a ____ website</p>
                  <p class="team-text-short">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
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
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="col-xs-12 col-sm-4 col-md-4 team-member">
                  <img src="./img/team/jenna.png" alt="team-member-img1" />
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 team-member-bio">
                  <h3 class="team-member-name">Some Website2</h3>
                  <p class="text-muted-role">A _____ website</p>
                  <p class="team-text-short">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
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
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="col-xs-12 col-sm-4 col-md-4 team-member">
                  <img src="./img/team/nicole.png" alt="team-member-img1" />
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 team-member-bio">
                  <h3 class="team-member-name">Some Website 3</h3>
                  <p class="text-muted-role">This is a Design Website</p>
                  <p class="team-text-short">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
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
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a
              class="left carousel-control"
              href="#myCarousel-two"
              data-slide="prev"
            >
              <span class="glyphicon glyphicon-chevron-left"></span>{" "}
            </a>
            <a
              class="right carousel-control"
              href="#myCarousel-two"
              data-slide="next"
            >
              <span class="glyphicon glyphicon-chevron-right"></span>
            </a>
            <ol class="carousel-indicators">
              <li
                data-target="#myCarousel-two"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#myCarousel-two" data-slide-to="1"></li>
              <li data-target="#myCarousel-two" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
      <section id="consulting">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-heading">Consulting</h2>
              <h3 class="section-subheading text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </h3>
            </div>
            <div class="col-xs-12 col-md-12 portfolio-submenu text-center">
              <ul class="filter">
                <li>
                  <a class="active" href="#" data-filter="*">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".wordpress">
                    WordPress
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".html">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".graphic">
                    Graphic Design
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".php">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".bootstrap">
                    Bootstrap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="portfolio-wrapper portfolio-container-fluid">
          <div class="portfolio-items">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 work-grid php graphic">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal1"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Wine Label</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/card.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 work-grid php graphic">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal2"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Business Card</h4>
                      <h5>Stationary</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/2.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              bootstrap
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal1"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Logo Design</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/3.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              html
              bootstrap
              graphic
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal2"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Logo Design</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/4.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              graphic
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal1"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Web Design</h4>
                      <h5>Web Design</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/5.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              html
              graphic
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal2"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Packageing and Label Design</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/6.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              graphic
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal1"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Logo Design</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/1.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="
              col-xs-12 col-sm-6 col-md-6 col-lg-3
              work-grid
              wordpress
              graphic
            "
            >
              <div class="portfolio-item">
                <div class="hover-bg">
                  <a
                    href="#portfolioModal2"
                    class="portfolio-link"
                    data-toggle="modal"
                  >
                    <div class="hover-text">
                      <h4>Book Cover</h4>
                      <h5>Branding</h5>
                      <div class="clearfix"></div>
                      <i class="fa fa-plus"></i>
                    </div>
                    <img
                      src="./img/portfolio/book.jpg"
                      class="img-responsive"
                      alt="portfolio-image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-lg-12 text-left">
              <h2 class="section-heading">Pricing</h2>
              <h3 class="section-subheading">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="pricing text-center">
              <div class="pricing-top-box">
                <h3 class="pricing-title">Basic</h3>
                <h4 class="price">$39</h4>
              </div>
              <ul>
                <li>Free Download</li>
                <li>1000+ Softwear</li>
                <li>Full Access</li>
                <li>Free Update</li>
                <li>Live Support</li>
              </ul>
              <a href="" class="btn btn-send">
                Sign Up
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="pricing text-center">
              <div class="pricing-top-box">
                <h3 class="pricing-title">Medium</h3>
                <h4 class="price">$89</h4>
              </div>
              <ul>
                <li>Free Download</li>
                <li>1000+ Softwear</li>
                <li>Full Access</li>
                <li>Free Update</li>
                <li>Live Support</li>
              </ul>
              <a href="" class="btn btn-send">
                Sign Up
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="pricing text-center">
              <div class="pricing-top-box">
                <h3 class="pricing-title">Premium</h3>
                <h4 class="price">$119</h4>
              </div>
              <ul>
                <li>Free Download</li>
                <li>1000+ Softwear</li>
                <li>Full Access</li>
                <li>Free Update</li>
                <li>Live Support</li>
              </ul>
              <a href="" class="btn btn-send">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="clients">
        <div class="container-fluid-clients wrapper">
          <div class="row">
            <div class="col-lg-12">
              <h2 class="section-heading animated fadeInUp">Clients</h2>
              <h3 class="section-subheading text-muted animated fadeInUp">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div id="myCarousel-three" class="carousel-clients slide">
            <div class="carousel-inner">
              <div class="item active">
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/envato-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/geforce-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/uber-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/airbnb-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/bootstrap-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/tmobile-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
              <div class="item">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/woo-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/valve-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/talenthouse-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/amazon-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/river-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-2">
                  <a href="#" class="logo-link">
                    <img
                      src="./img/clients/audio-logo.png"
                      class="client-logo"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-sm-8 col-lg-12 text-left">
              <h2 class="section-heading">Testimonial</h2>
              <h3 class="section-subheading">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div
            id="myCarousel-four"
            class="carousel-testimonials slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-inner">
                <div class="item active">
                  <div class="col-md-6 col-sm-6">
                    <div class="block-text">
                      <img
                        src="./img/team/1.png"
                        alt="team-member-img3"
                        class="col-md-6 img-circle"
                      />
                      <h5 class="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h5>
                      <p class="testimonial-author">
                        <strong>Martin Santorini</strong>, CEO Talenthouse
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="block-text">
                      <img
                        src="./img/team/2.png"
                        alt="team-member-img3"
                        class="col-md-6 img-circle"
                      />
                      <h5 class="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h5>
                      <p class="testimonial-author">
                        <strong>Pierre Bronson</strong>, CEO Talenthouse
                      </p>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="col-md-6 col-sm-6">
                    <div class="block-text">
                      <img
                        src="./img/team/4.png"
                        alt="team-member-img3"
                        class="col-md-6 img-circle"
                      />
                      <h5 class="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h5>
                      <p class="testimonial-author">
                        <strong>Victor Vella</strong>, CEO Talenthouse
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6">
                    <div class="block-text">
                      <img
                        src="./img/team/3.png"
                        alt="team-member-img3"
                        class="col-md-6 img-circle"
                      />
                      <h5 class="testimonial-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </h5>
                      <p class="testimonial-author">
                        <strong>Lora Jones</strong>, CEO Talenthouse
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="container-fluid wrapper">
          <div class="row">
            <div class="col-lg-6 text-center">
              <h2 class="section-heading">Get in touch</h2>
              <h3 class="section-subheading">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <div class="col-md-6">
              <div class="company-address col-sm-6 col-md-6">
                <address>
                  xBe - Creative Agency
                  <br />
                  <span id="map-input">
                    284 Swanston St,
                    <br />
                    Melbourne VIC 3000, Australia
                  </span>
                  <br />
                </address>
              </div>
              <div class="company-contact col-sm-6 col-md-6">
                <address>
                  Email Us
                  <br />
                  <a href="mailto:#">your.email@example.com</a>
                  <br />
                  <a href="mailto:#">support@example.com</a>
                </address>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <form name="sentMessage" novalidate>
                <div class="row">
                  <div class="col-md-6 contact-form-box">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name *"
                        id="name"
                        required
                        data-validation-required-message="Please enter your name."
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email *"
                        id="email"
                        required
                        data-validation-required-message="Please enter your email address."
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Your Phone *"
                        id="phone"
                        required
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Your Message *"
                        id="message"
                        required
                        data-validation-required-message="Please enter a message."
                      ></textarea>
                      <p class="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" class="btn btn-xl">
                      Send Message
                    </button>
                  </div>
                  <div class="col-md-6">
                    <div id="map-canvas"></div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div class="container-fluid wrapper">
          <div class="col-lg-12 footer-info">
            <a class="footer-logo" href="#header">
              <i class="h4 fa fa-vk"></i>
            </a>
            <p class="footer-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
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
      <div class="scroll-up">
        <a href="#header" class="page-scroll">
          <i class="fa fa-angle-up"></i>
        </a>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal1"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <div class="modal-body">
                  <h2>Project Name</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-responsive img-centered"
                    src="./img/portfolio/flattastic-free.jpg"
                    alt="modal"
                  />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>
                    <strong>Want this UI kit sample?</strong>You can download it
                    for free, courtesy of <a href="#">edubd.net</a>, or you can
                    download it <a href="#">here</a>.
                  </p>
                  <ul class="list-inline">
                    <li>Date: November 04, 2021</li>
                    <li>Client: Web Designer Depot</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button type="button" class="btn btn-xl" data-dismiss="modal">
                    <i class="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="portfolio-modal modal fade"
        id="portfolioModal2"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2">
                <div class="modal-body">
                  <h2>Project Name</h2>
                  <p class="item-intro text-muted">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <img
                    class="img-responsive img-centered"
                    src="./img/portfolio/flat.jpg"
                    alt="modal"
                  />
                  <p>
                    Use this area to describe your project. Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Est blanditiis
                    dolorem culpa incidunt minus dignissimos deserunt repellat
                    aperiam quasi sunt officia expedita beatae cupiditate,
                    maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>
                    <strong>Want this flat style illustrations? </strong>You can
                    download it for free, courtesy of <a href="#">edubd.net</a>,
                    or you can download it <a href="#">here</a>.
                  </p>
                  <ul class="list-inline">
                    <li>Date: November 03, 2021</li>
                    <li>Client: Web Designer Depot</li>
                    <li>Category: Graphic Design</li>
                  </ul>
                  <button type="button" class="btn btn-xl" data-dismiss="modal">
                    <i class="fa fa-times"></i> Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
