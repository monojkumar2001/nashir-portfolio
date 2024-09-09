import React, { useEffect, useState } from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Digital Product Designer</title>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      {/* ========= Hero Section ==============*/}
      <section className="hero-section cpb-7" id="hero">
        <div className="hero-wrapper">
          <div className="hero-img">
            <img src="/assets/images/home/hero.png" alt="" />
          </div>
          <h1 className="hero-title title-item1">Digital</h1>
          <h1 className="hero-title title-item2">Product</h1>
          <h1 className="hero-title title-item3">Designer</h1>
          <div className="hero-scroll-item" onClick={scrollToBottom}>
            <p>scroll to find more</p>
            <div>
              <img src="/assets/images/icons/arrow-down.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* =========== About Me ================ */}
      <section className="about cpt-7 cpb-7" id="about">
        <div className="container">
          <div className="about-wrapper ">
            <div className="section-header">
              <p>About me</p>
              <Link href={"#courses"}>
                <span>
                  <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
                </span>
              </Link>
            </div>
            <div className="about-content">
              <div className="about-title">
                <h3>Hi,</h3>
                <h1>
                  <small>I am</small> <span>Nasir</span>Ahmed
                </h1>
              </div>
              <div className="about-des-content">
                <p>
                  I am passionate about crafting intuitive and visually
                  appealing user experiences that leave a lasting impact.{" "}
                  <span>With two years of experience in the industry,</span> I
                  have honed my skills in translating complex ideas into
                  delightful, user-centric designs.
                </p>
              </div>
              <div className="about-img">
                <img src="/assets/images/home/about.png" alt="" />
              </div>
              <div className="about-des-content">
                <p>
                  My design philosophy revolves around the idea of blending
                  aesthetics with functionality.{" "}
                  <span>
                    I believe that great design goes beyond creating visually
                    pleasing interfaces.
                  </span>{" "}
                  It should also enhance the overall user experience and drive
                  meaningful interactions.{" "}
                  <span>
                    I strive to create intuitive and accessible designs that
                    captivate users and solve their pain points effectively.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== Design Study ============ */}
      <section className="design cpb-7 cpt-7" id="courses">
        <div className="container">
          <div className="design-wrapper">
            <div className="section-header">
              <div className="section-title">
                <p>Design Study</p>
                <h4>Completed UX/UI Courses</h4>
              </div>
              <Link href={"#experience"}>
                <span>
                  <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
                </span>
              </Link>
            </div>
            <div className="design-content cpt-7">
              <div className="design-content-item">
                <Link href={"https://nurencyacademy.com/"}>
                  <a href="#" target="_blank">
                    UI/UX & Product Design Course
                  </a>
                </Link>
                <p>Nurancy Academy</p>
              </div>
              <div className="design-content-item">
                <Link
                  href={
                    "https://www.coursera.org/account/accomplishments/professional-cert/UP9XHCGMAGBW?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
                  }
                >
                  <a target="_blank">Google UX Design</a>
                </Link>
                <p>Coursera</p>
              </div>
              <div className="design-content-item">
                <Link
                  href={
                    "https://www.coursera.org/account/accomplishments/verify/NENZE6TGZJDD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
                  }
                >
                  <a target="_blank">
                    Introduction to User Experience Principles and Processes
                  </a>
                </Link>
                <p>University of Michigan</p>
              </div>
              <div className="design-content-item">
                <Link href={"https://www.futurelearn.com/certificates/khgirhi"}>
                  <a target="_blank">Digital Skills: User Experience</a>
                </Link>
                <p>FutureLearn</p>
              </div>
              <div className="design-content-item">
                <Link
                  href={
                    "https://www.credential.net/ea653a88-f14c-493c-82c0-18e7368a8017#gs.6y9qs9"
                  }
                >
                  <a target="_blank">UX Fundamentals</a>
                </Link>
                <p>Gymnasium</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== Jobs ============ */}
      <section className="jobs cpb-7 cpt-7" id="experience">
        <div className="container">
          <div className="jobs-wrapper">
            <div className="section-header">
              <div className="section-title">
                <p>Jobs</p>
                <h4>Work Experience</h4>
              </div>
              <Link href={"#achievement"}>
                <span>
                  <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
                </span>
              </Link>
            </div>
            <div className="design-content cpt-7">
              <div className="design-content-item">
                <Link href={"https://www.redlimesolutions.com/"}>
                  <a target="_blank">Redlime Solutions</a>
                </Link>
                <p>UX/UI Designer (November 2022 - Present)</p>
              </div>
              <div className="design-content-item">
                <Link href={"https://www.facebook.com/BookLeaf.07/"}>
                  <a target="_blank">BookLeaf</a>
                </Link>
                <p>Graphic Designer (April 2020 - October 2022)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== Achievement =============  */}
      <section className="achievement cpb-7 cpt-7" id="achievement">
        <div className="container">
          <div className="achievement-wrapper">
            <div className="section-header">
              <div className="section-title">
                <p>Achievement and </p>
                <h4>Awards</h4>
              </div>
              <Link href={"#project"}>
                <span>
                  <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
                </span>
              </Link>
            </div>
            <div className="achievement-card-items cpt-7">
              <div className="achievement-card">
                <div className="achievement-img">
                  <img src="/assets/images/home/achievement1.png" alt="" />
                </div>
                <div className="achievement-content">
                  <h4>Rising Star</h4>
                  <p>Redlime Solutions</p>
                </div>
              </div>
              <div className="achievement-card">
                <div className="achievement-img">
                  <img src="/assets/images/home/achievement2.png" alt="" />
                </div>
                <div className="achievement-content">
                  <h4>Employee of The Year</h4>
                  <p>Redlime Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Work & Project ============= */}
      <section className="work-web cpb-7 cpt-7" id="project">
        <div className="container">
          <div className="work-web-wrapper">
            <div className="section-header">
              <div className="section-title">
                <p>Work & </p>
                <h4>Projects</h4>
              </div>
              <div className="section-title section-title-work">
                <Link href={"#work_process"}>
                  <span>
                    <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
                  </span>
                </Link>
                <h3>Web</h3>
              </div>
            </div>
            <div className="work-web-all-content cpt-7">
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web1.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://quartolab.com/"}>
                      <a className="work-web-title" target="_blank">
                        Quarto
                      </a>
                    </Link>
                    <p>Web & Mobile App</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web2.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://mangorx.com/"}>
                      <a className="work-web-title" target="_blank">
                        Mango
                      </a>
                    </Link>
                    <p>E-Commerce</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web3.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://dev.alignwell.com/"}>
                      <a className="work-web-title" target="_blank">
                        Align Wellness
                      </a>
                    </Link>
                    <p>Event Management (SaaS Project -Web & App)</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web4.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://ridecentric.com/"}>
                      <a className="work-web-title" target="_blank">
                        RideCentric
                      </a>
                    </Link>
                    <p>Ride Booking (SaaS Project -Web & App)</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web5.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.aligndentalcare.com/"}>
                      <a className="work-web-title" target="_blank">
                        Align Dental Care
                      </a>
                    </Link>
                    <p>Medical Website with Appointment Booking System</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web6.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://epiqscripts.com/"}>
                      <a className="work-web-title" target="_blank">
                        Epic Script
                      </a>
                    </Link>
                    <p>E-Commerce</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web7.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.gainesvilleministorage.com"}>
                      <a className="work-web-title" target="_blank">
                        Gainesville Mini Storage
                      </a>
                    </Link>
                    <p>Website</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web8.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.verticaltransport.com/"}>
                      <a className="work-web-title" target="_blank">
                        Vertical Transport System
                      </a>
                    </Link>
                    <p>Website</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web9.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"/"}>
                      <a className="work-web-title" target="_blank">
                        Docmedlink
                      </a>
                    </Link>
                    <p>Medical Prescription System</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/web10.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.verticaltransport.com/"}>
                      <a className="work-web-title" target="_blank">
                        RL Event Management
                      </a>
                    </Link>
                    <p>Event Management System</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-wrapper">
            <div className="section-header">
              <div className="section-title">
                <h4>Projects</h4>
              </div>
              <div className="section-title-work">
                <h3>Mobile</h3>
              </div>
            </div>
            <div className="work-mobile-content cpt-7">
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-1.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"#"}>
                      <a className="work-web-title" target="_blank">
                        RideCentric Driver App
                      </a>
                    </Link>
                    <p>Driver Sharing App</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-2.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://quartolab.com/"}>
                      <a className="work-web-title" target="_blank">
                        Quarto
                      </a>
                    </Link>
                    <p>Web & Mobile App</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-3.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://dev.alignwell.com/login"}>
                      <a className="work-web-title" target="_blank">
                        Align Wellness
                      </a>
                    </Link>
                    <p>Event Management (SaaS Project -Web & App)</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-4.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.behance.net/nasir-ahmed03"}>
                      <a className="work-web-title" target="_blank">
                        D-Rx
                      </a>
                    </Link>
                    <p>Prescription Service App</p>
                  </div>
                </div>
              </div>
              <div className="work-web-card-item">
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-5.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.behance.net/nasir-ahmed03"}>
                      <a className="work-web-title" target="_blank">
                        DiaScore
                      </a>
                    </Link>
                    <p>Diabetes Calculator App</p>
                  </div>
                </div>
                <div className="work-web-card">
                  <div className="work-web-img">
                    <img src="/assets/images/home/mobile-6.png" alt="" />
                  </div>
                  <div className="work-web-content">
                    <Link href={"https://www.behance.net/nasir-ahmed03"}>
                      <a className="work-web-title" target="_blank">
                        3N Food
                      </a>
                    </Link>
                    <p>Food Delivery App</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-all-btn">
              <Link href={"https://www.behance.net/nasir-ahmed03"}>
                <a target="_blank">View All</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ========= Work Process =========== */}
      <section className="work-process cpb-7 cpt-7" id="work_process">
        <div className="container work-process-wrapper">
          <div className="section-header sticky-section">
            <div className="section-title">
              <p>My Work</p>
              <div className="process-title-item">
                <h4>Process</h4>
                <h5>For RL Event Managemnet</h5>
              </div>
            </div>
            <Link href={"#blogs"}>
              <span>
                <img src="/assets/images/icons/bottom-arrow.svg " alt="" />
              </span>
            </Link>
          </div>
          <div className="work-phase-items ">
            <div className="work-phase-item">
              <h4>Phase 1</h4>
              <a href="#empathize">Empathize</a>
            </div>
            <div className="work-phase-item">
              <h4>Phase 2</h4>
              <a href="#define">Define</a>
            </div>
            <div className="work-phase-item">
              <h4>Phase 3</h4>
              <a href="#ideate">Ideate</a>
            </div>
            <div className="work-phase-item">
              <h4>Phase 4</h4>
              <a href="#prototype">Prototype</a>
            </div>
            <div className="work-phase-item">
              <h4>Phase 5</h4>
              <a href="#test">Test</a>
            </div>
          </div>
          {/* ================= Empathize ==================== */}
          <div className="work-process-content cpt-7" id="empathize">
            <div className="work-process-title">
              <div className="process-title">
                <div>
                  <span>1</span>
                </div>
                <h1>Empathize</h1>
              </div>
              <p>
                Empathy is one of the most crucial phases. After all, how can
                you hope to solve a user’s problem if you don’t understand who
                the user is and what they want? Empathy creates an emotional
                bridge between designers and target users, one that facilitates
                the kind of deep user insights at the heart of human-based
                design thinking. In Align Wellness project I follow some methods
                such as:{" "}
                <span>
                  Stakeholder Interview, Survey, Focus Group, Diary Studies,
                  Field Study, Card Sorting
                </span>{" "}
                etc.
              </p>
            </div>
            <div className="process-card-items cpt-7">
              <div className="process-card-item">
                <div className="empathize-img">
                  <img src="/assets/images/home/empathize.png" alt="" />
                </div>
              </div>
              <div className="process-card-item">
                <h4 className="title-2">Stakeholder Interview</h4>
                <p>
                  In the meeting with the client, I aim to discern their
                  specific needs and understand their overarching business
                  objectives to tailor my services effectively.
                </p>
              </div>
            </div>
            <div className="empathize-image-content">
              <h4 className="title-2 cpt-7">Why you want make this 4system?</h4>
              <div className="empathize-img ">
                <img src="/assets/images/home/empathize2.png" alt="" />
              </div>
              <p>
                Event management is an ever growing industry and is a major
                contributor to Indian economy. Events require the expertise of
                professionals just like any other enterprise or company.
                Specific categories of events provide unique products that
                satisfy a variety of needs. The scope of event management
                encompasses everything, from international mega events like the
                Commonwealth Games to small birthday parties.
              </p>
              <p>
                The revenue of the organised events industry was estimated to be
                more than a 100 billion Indian rupees in the financial year
                2021. This was an increase from around 56 billion rupees in the
                financial year 2017.
              </p>
              <p>
                Also, now as we leave the pandemic behind and return to the old
                normal, India is expected to see as many as 32 lakh weddings to
                take place in a span of less than four months (Nov 2022 to Feb
                2023).
              </p>
            </div>

            <div className="audience-content cpt-7">
              <h1 className="section-title cmb-4">My Target Audience</h1>
              <p>
                Categorizing the target audience into these categories allows me
                to personalize the app’s features, functions, and user
                experience to each segment’s individual needs and preferences.
              </p>
              <p>
                This strategy ensures that the app delivers appropriate answers
                to a broad range of event-planning customers.
              </p>

              <div className="empathize-img cmt-4">
                <img src="/assets/images/home/audience.png" alt="" />
              </div>
            </div>
            <div className="cpt-7 process-card-items">
              <div className="process-card-item">
                <h4 className="title-2">Interview</h4>
                <p>
                  I conducted numerous user interviews and gathered valuable
                  insights regarding the projects
                </p>
              </div>
              <div className="process-card-item">
                <div className="empathize-img">
                  <img src="/assets/images/home/interview-img.png" alt="" />
                </div>
              </div>
            </div>
            <div className="process-card-items cpt-7">
              <div className="process-card-item">
                <div className="empathize-img">
                  <img src="/assets/images/home/servey.png" alt="" />
                </div>
              </div>
              <div className="process-card-item ">
                <h4 className="title-2">Survey</h4>
                <p>
                  This project involves conducting a survey that proves
                  immensely beneficial for a large number of users, allowing us
                  to gather substantial data from their responses.
                </p>
              </div>
            </div>
            <div className="process-card-items cpt-7">
              <div className="process-card-item">
                <h4 className="title-2">Focus Group</h4>
                <p>
                  I follow this research method that brings together a small
                  group of people to answer questions in a moderated setting.
                  The group is chosen due to predefined demographic traits, and
                  the questions are designed to shed light on a topic of
                  interest
                </p>
              </div>
              <div className="process-card-item">
                <div className="empathize-img">
                  <img src="/assets/images/home/fuece.png" alt="" />
                </div>
              </div>
            </div>
            <div className="user-insight-content cpt-7">
              <h1 className="section-title cmb-4">User insights</h1>
              <div className="empathize-img">
                <img src="/assets/images/home/insight.png" alt="" />
              </div>
            </div>
          </div>
          {/* ================= Define ==================== */}
          <div className="define-wrapper cpt-7" id="define">
            <div className="work-process-title">
              <div className="process-title">
                <div>
                  <span>2</span>
                </div>
                <h1>Define</h1>
              </div>
              <p>
                During this step, I take the raw data and findings from my
                research, interviews, surveys, and our analysis of the problem –
                gathered in the empathize stage – and make sense of it by using
                <span>
                  Affinity Diagram, Persona, Empathy Map, User Stories, User
                  Journey Map
                </span>
              </p>
            </div>
            <div className="cpt-7 define-content-item">
              <h1 className="section-title cmb-4">Affinity Diagram</h1>
              <div className="empathize-img">
                <img src="/assets/images/home/define-1.png" alt="" />
              </div>
            </div>
            <div className="cpt-7 define-content-item">
              <h1 className="section-title cmb-4">Persona</h1>
              <div className="persona-img empathize-img">
                <img src="/assets/images/home/define-2.png" alt="" />
              </div>
              <div className="persona-img-2">
                <div className="persona-img empathize-img ">
                  <img src="/assets/images/home/define-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cpt-7 define-content-item">
              <h1 className="section-title cmb-4">Empathy Map</h1>
              <div className="empathize-img">
                <img src="/assets/images/home/define-4.png" alt="" />
              </div>
            </div>
            <div className="cpt-7 define-content-item">
              <h1 className="section-title cmb-4">User Stories</h1>
              <p className="user-text-dis">
                User stories are invaluable tools for designing applications.
                They enable you to :
              </p>
              <ul className="user-stories-lists">
                <li className="user-stories-list">
                  <p>
                    <span> Understand user needs:</span> User stories are
                    written from the user’s point of view, allowing you to focus
                    on their needs and expectations.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> Prioritize functionalities:</span>  User stories can
                    be used to prioritize the functionalities to be developed,
                    according to their importance to users.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User stories from persona 2 ( Walid ) :</span> 
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 1 : </span> As Walid, I want to be able to
                    search for events by category (culture, technology,
                    professional, etc.) to quickly find events that match my
                    interests.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 2 : </span> As Walid, I want to be able to
                    filter events by date, location and price, so I can plan my
                    attendance according to my availability and budget.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 3 : </span> As Walid, I want access to
                    detailed information on events, including times, locations,
                    ticket prices and descriptions, to make it easier to plan my
                    participation.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 4 : </span> As Walid, I’d like to receive
                    personalized notifications about upcoming events that match
                    my interests, to stay informed about opportunities that
                    might interest me.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User stories from persona 3 ( Ninir ) : </span> 
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 1 : </span>  As Amine, I want to be able
                    to create a new event with a simple and intuitive interface,
                    so I can quickly start planning my event.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 2 : </span> As Amine, I want to be able to
                    set the date and time of my event, add details about the
                    venue and specify whether it’s a virtual or physical event,
                    making sure that all the information needed for the event is
                    easily accessible and editable.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 3 : </span> As Amine, I want to be able to
                    invite participants to my event by importing contacts from
                    my address book or manually adding e-mail addresses, to make
                    it easier to manage my guest list.
                  </p>
                </li>
                <li className="user-stories-list">
                  <p>
                    <span> User Story 4 : </span> As Amine, I want to be able to
                    personalize the details of the event, for example by adding
                    a description, specifying the agenda and attaching relevant
                    documents or multimedia files, to ensure that my event is
                    well-documented and informative for participants. for
                    proposed a interviews
                  </p>
                </li>
              </ul>
            </div>
            <div className="cpt-7 define-content-item">
              <h1 className="section-title cmb-4">User Journey Map</h1>
              <div className="empathize-img">
                <img src="/assets/images/home/define-5.png" alt="" />
              </div>
            </div>
          </div>
          {/* ============= Ideate ==================== */}
          <div className="ideate-wrapper cpt-7 cpb-7" id="ideate">
            <div className="work-process-title">
              <div className="process-title">
                <div>
                  <span>3</span>
                </div>
                <h1>Ideate</h1>
              </div>
              <p>
                During this step, I take the raw data and findings from my
                research, interviews, surveys, and our analysis of the problem –
                gathered in the empathize stage – and make sense of it by using
                <span>
                  Affinity Diagram, Persona, Empathy Map, User Stories, User
                  Journey Map
                </span>
              </p>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title">Site Map</h1>
              <div className="ideate-site-desktop-img cpt-7">
                <img src="/assets/images/home/site-map-dasktop.png" alt="" />
              </div>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">Information Architecture</h1>
              <div className="ideate-site-desktop-img">
                <img src="/assets/images/home/information-desktop.png" alt="" />
              </div>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">User Flow</h1>
              <div className="ideate-site-desktop-img">
                <img src="/assets/images/home/flow-desktop.png" alt="" />
              </div>
            </div>
          </div>
          {/* ============= Prototype ============== */}
          <div className="prototype-wrapper cpt-7" id="prototype">
            <div className="work-process-title">
              <div className="process-title">
                <div>
                  <span>4</span>
                </div>
                <h1>Prototype</h1>
              </div>
              <p>
                During this phase of design thinking, I create prototypes of the
                ideas they generated in the previous stage. Prototypes don’t
                need to be finished products. They are meant to convey a
                possible solution, not deliver it. Sketches, models, and digital
                renders are all examples of prototypes: scaled-down versions of
                the product created during the ideation stage. In this stage my
                commonly ideation methods techniques are{" "}
                <span>Sketch, Wireframe, Design, Prototype</span> etc
              </p>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">Sketch</h1>
              <div className="prototype-img-item">
                <div className="empathize-img">
                  <img src="/assets/images/home/prototype-1.png" alt="" />
                </div>
                <div className="empathize-img">
                  <img src="/assets/images/home/prototype-2.png" alt="" />
                </div>
              </div>
              <div className="prototype-img cpt-7">
                <img src="/assets/images/home/prototype-3.png" alt="" />
              </div>
              <div className="prototype-img-item cpt-7">
                <div className="empathize-img">
                  <img src="/assets/images/home/prototype-4.png" alt="" />
                </div>
                <div className="empathize-img">
                  <img src="/assets/images/home/prototype-5.png" alt="" />
                </div>
              </div>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">Wireframe</h1>
              <div className="prototype-img">
                <img src="/assets/images/home/prototype-6.png" alt="" />
              </div>
              <div className="prototype-img cpt-7">
                <img src="/assets/images/home/prototype-7.png" alt="" />
              </div>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">Design</h1>
              <div className="prototype-img ">
                <img src="/assets/images/home/prototype-8.png" alt="" />
              </div>
            </div>
            <div className="ideate-content-item cpt-7">
              <h1 className="section-title cmb-4">Prototype</h1>
              <div className="prototype-img">
                <img src="/assets/images/home/prototype-9.png" alt="" />
              </div>
            </div>
          </div>
          {/* ============= Test =========== */}
          <div className="test-wrapper cpb-7 cpt-7" id="test">
            <div className="work-process-title">
              <div className="process-title">
                <div>
                  <span>5</span>
                </div>
                <h1>Test</h1>
              </div>
              <p>
                The testing phase of the design thinking process involves real
                users and real user feedback. During this phase, prototypes are
                given to participants to try out. Design teams observe how
                participants interact with the prototype and gather feedback
                about the experience.
              </p>
            </div>
            <div className="ideate-content-item cpt-7">
              <h4 className="title-2 cmb-4">
                Commonly used testing tools include:
              </h4>

              <div className="prototype-img">
                <img src="/assets/images/home/test.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== My Blogs ========= */}
      <section className="blogs cpb-7 cpt-7" id="blogs">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>My Blogs</p>
            </div>
            <Link href={"https://nasirahmed.design/about"}>
              <a target="_blank">View All</a>
            </Link>
          </div>
          <div className="blog-wrapper">
            <Swiper
              spaceBetween={27}
              slidesPerView={4}
              loop={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/blog-img-1.png" alt="" />
                  </div>
                  <div className="blog-content">
                    <Link href={"#"}>
                      <a className="blog-title">
                        The benefit of sketching in UI UX..
                      </a>
                    </Link>
                    <p className="blog-date">December 20, 2023</p>
                    <p>
                      Sketching is a distinctive form of drawing that designers
                      use to propose, explore, refine...
                    </p>
                    <Link href={"#"}>
                      <a className="blog-read-more">Read more</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/blog-img-2.png" alt="" />
                  </div>
                  <div className="blog-content">
                    <Link href={"#"}>
                      <a className="blog-title">
                        A Beginner&apos;s Guide to Usability...
                      </a>
                    </Link>
                    <span>October 18, 2023</span>
                    <p>
                      Usability testing is a method of testing the functionality
                      of a website, app, or other digital product by observing
                      real...
                    </p>
                    <Link href={"#"}>
                      <a className="blog-read-more">Read more</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/blog-img-3.png" alt="" />
                  </div>
                  <div className="blog-content">
                    <Link href={"#"}>
                      <a className="blog-title">
                        Strategies for Keeping Up with...
                      </a>
                    </Link>
                    <span>December 22, 2023</span>
                    <p>
                      The world of technology is constantly changing, and the
                      field of UI/UX design is no exception. With new trends...
                    </p>
                    <Link href={"#"}>
                      <a className="blog-read-more">Read more</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/blog-img-4.png" alt="" />
                  </div>
                  <div className="blog-content">
                    <Link href={"#"}>
                      <a className="blog-title">
                        Cognitive Load - Strategies...
                      </a>
                    </Link>
                    <span>November 30, 2023</span>
                    <p>
                      Cognitive load is a mental effort that takes a user to
                      process information reasoning and decision making. When...
                    </p>
                    <Link href={"#"}>
                      <a className="blog-read-more">Read more</a>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* =============== Explore ================= */}
      <section className="explore cpt-7 cpb-7" id="explore">
        <div className="container">
          <div className="section-header">
            <div className="section-title">
              <p>Explore Nasir</p>
            </div>
            <Link href={"https://nasirahmed.design/about"}>
              <a target="_blank">View All</a>
            </Link>
          </div>
          <div className="explore-wrapper blog-wrapper">
            <Swiper
              spaceBetween={27}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/explore-1.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/explore-2.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/explore-3.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog-card-item">
                  <div className="blog-img">
                    <img src="/assets/images/home/explore-4.png" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
Home.layout = AppLayout;

export default Home;
