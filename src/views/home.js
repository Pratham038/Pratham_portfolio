import React from "react";
import { Link } from "react-router-dom";

import DangerousHTML from "dangerous-html/react";
import { Helmet } from "react-helmet";

import Check from "../components/check";
import Line from "../components/line";
import IconContainer from "../components/icon-container";
import "./home.css";
import SocialIcons from "../components/SocialIcons";
import Skills from "../components/Skills";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Code with Pratham</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>PRATHAM HARAM</span>
                <br></br>
              </h1>
            </div>
            <h1 className="home-heading01">Web Developer</h1>
            <p className="home-caption">
              Recent IT graduate seeking to launch a career as a web developer
              or data analyst. Equipped with a strong foundation in programming
              languages and database management, this ambitious professional
              possesses a passion for leveraging technology to create
              user-friendly websites or derive valuable insights from data sets.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <SocialIcons />
          </div>

          {/* <div className="home-div">
            <button class="button1">
              <span>
                <code>More Info !! </code>
              </span>
            </button>
          </div> */}
        </div>
      </section>

      {/*NEW STATS*/}
      <Skills />
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">$1.69M</h3>
            <span className="home-caption01">
              Consectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">Multiverse</h3>
            <span className="home-caption02">Unde omnis iste</span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">500K</h3>
            <span className="home-caption03">Accusantium doloremque</span>
          </div>
        </div>
      </section>
      <section className="home-slider">
        <div className="home-header04">
          <h2 className="home-heading02">
            <span>The first all-in-one verse </span>
            <span className="home-text03">o</span>
            <span className="home-text04">
              ptimized for growth.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-selector">
          <p className="home-caption04">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </p>
          <div className="home-slide-titles">
            <div className="slide-title">
              <span>Metaverse</span>
            </div>
            <div className="slide-title slide-title-active">
              <span>Ecosystems</span>
            </div>
            <div className="slide-title">
              <span>Development</span>
            </div>
            <div className="slide-title">
              <span>Integration</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image"
                  />
                  <div className="home-content01">
                    <div className="home-header05">
                      <h3 className="home-heading03">Metaverse</h3>
                      <p className="home-caption05">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more">
                      <span className="home-caption06">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image01"
                  />
                  <div className="home-content02">
                    <div className="home-header06">
                      <h3 className="home-heading04">Ecosystems</h3>
                      <p className="home-caption07">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption08">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image02"
                  />
                  <div className="home-content03">
                    <div className="home-header07">
                      <h3 className="home-heading05">Development</h3>
                      <p className="home-caption09">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption10">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/slider-ecosystems-400h.png"
                    className="home-image03"
                  />
                  <div className="home-content04">
                    <div className="home-header08">
                      <h3 className="home-heading06">Integration</h3>
                      <p className="home-caption11">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: " ",
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more3">
                      <span className="home-caption12">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon10">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header09">
            <h2 className="home-heading07">
              Companies will dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore veniam and more opportunities.
            </h2>
            <p className="home-caption13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
          </div>
          <div className="home-button">
            <button className="button">
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img alt="image" src="/getstarted-800w.png" className="home-image04" />
      </section>
      <section className="home-objectives">
        <div className="home-content05">
          <span className="home-text10">Objectives</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text11">Growth</h3>
              <p className="home-text12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective1">
              <h3 className="home-text13">Develop</h3>
              <p className="home-text14">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text15">Optimize</h3>
              <p className="home-text16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content06">
          <div className="home-header10">
            <div className="home-header11">
              <h2 className="home-heading08">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text18">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <p className="home-caption15">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
          </div>
          <div className="home-testimonial">
            <div className="home-content07">
              <span className="home-text20">Testimonial</span>
              <p className="home-text21">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon12"
                />
                <span className="home-name">Andrew Gonzales</span>
              </div>
              <img alt="image" src="/logoipsum.svg" className="home-from" />
            </div>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img alt="image" src="/growth-1400w.png" className="home-image05" />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="/experience-1400w.png"
            className="home-image06"
          />
        </div>
        <div className="home-content08">
          <div className="home-header12">
            <div className="home-header-container2">
              <div className="home-header13">
                <h2 className="home-heading09">
                  <span>A worlds class </span>
                  <span className="home-text23">experience</span>
                </h2>
              </div>
              <p className="home-caption16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon13">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text24">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon15">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text25">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon17">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text26">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon19">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text27">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial1">
            <div className="home-content09">
              <span className="home-text28">Testimonial</span>
              <p className="home-text29">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon21"
                />
                <span className="home-name1">Cory Smith</span>
              </div>
              <img alt="image" src="/logoipsum-2.svg" className="home-from1" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content10">
          <div className="home-header14">
            <h2 className="home-heading10">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span className="home-text31">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button2 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-comparision">
        <div className="home-header-container3">
          <div className="home-header15">
            <h2 className="home-heading11">
              <span>Environment c</span>
              <span className="home-text38">omparision</span>
              <br></br>
            </h2>
          </div>
          <p className="home-caption17">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="home-table">
          <div className="home-row">
            <div className="home-headers">
              <span className="home-text40">Placeholder</span>
            </div>
            <div className="home-plans">
              <div className="home-row01">
                <span className="home-text41">TOGHTR</span>
                <span className="home-text42">AGENCY</span>
                <span className="home-text43">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="home-row02">
            <div className="home-headers1">
              <span className="home-text44">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans1">
              <div className="home-row03">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row04">
            <div className="home-headers2">
              <span className="home-text45">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans2">
              <div className="home-row05">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row06">
            <div className="home-headers3">
              <span className="home-text46">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans3">
              <div className="home-row07">
                <div className="value">
                  <span className="home-text47">Custom</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row08">
            <div className="home-headers4">
              <span className="home-text48">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans4">
              <div className="home-row09">
                <div className="value">
                  <span className="home-text49">Unlimited</span>
                </div>
                <div className="value">
                  <span className="home-text50">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row10">
            <div className="home-headers5">
              <span className="home-text51">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans5">
              <div className="home-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="home-text52">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row12">
            <div className="home-headers6">
              <span className="home-text53">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans6">
              <div className="home-row13">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row14">
            <div className="home-headers7">
              <span className="home-text54">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans7">
              <div className="home-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="home-text55">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-data">
        <div className="home-header-container4">
          <div className="home-header16">
            <div className="home-row16">
              <h2 className="home-heading12">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text57">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-caption18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </p>
        </div>
        <div className="home-content11">
          <div className="home-image07">
            <img alt="image" src="/data-1400w.png" className="home-image08" />
          </div>
          <div className="home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header17">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header18">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name1"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header19">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name2"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header20">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name3"></IconContainer>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header21">
          <h2 className="home-heading13">
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span className="home-text60">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote">
            <p className="home-quote1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <div className="home-author2">
              <span className="home-name2">Joanna Smith</span>
              <span className="home-location">Briville</span>
            </div>
          </div>
          <div className="home-quote2">
            <p className="home-quote3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote4">
            <p className="home-quote5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <div className="home-author4">
              <span className="home-name4">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote6">
            <p className="home-quote7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </p>
            <div className="home-author5">
              <span className="home-name5">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls1">
          <button className="home-previous1 button">
            <svg viewBox="0 0 1024 1024" className="home-icon22">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next1 button">
            <svg viewBox="0 0 1024 1024" className="home-icon24">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button3">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header22">
          <h2 className="home-heading14">
            <span>Frequently asked </span>
            <span className="home-text66">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content20">
          <div className="home-column">
            <div className="home-element04">
              <h3 className="home-header23">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
            <div className="home-element05">
              <h3 className="home-header24">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-content22">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element06">
              <h3 className="home-header25">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content23">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element07">
              <h3 className="home-header26">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content24">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element08">
              <h3 className="home-header27">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
            <div className="home-element09">
              <h3 className="home-header28">Incididunt ut labore et dolore?</h3>
              <p className="home-content26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content27">
          <div className="home-main">
            <div className="home-branding">
              <img alt="image" src="/logo.svg" className="home-image09" />
              <span className="home-text68">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header29">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="home-navlink03">
                    <span className="home-text69">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header30">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header31">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text71">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button4 button">
              <img alt="image" src="/arrow.svg" className="home-image10" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  );
};

export default Home;
