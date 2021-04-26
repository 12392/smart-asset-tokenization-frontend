import React from "react";
import graph from "../../asset/images/graph_png.png";
import rain from "../../asset/images/rain.jpg";
import NavIndex from "../NavBars/NavIndex";
const index2 = () => {
  return (
    <>
      <body>
        <div className="container-fluid">
          {/* <!-- Navbar --> */}
          <NavIndex />

          {/* <!-- navbar ends -->
        <!-- second row start --> */}
          <div className="p-3">
            <h4 className="font_sm">System List</h4>
            <ul className="navbar-nav mr-auto row_dir">
              <li className="nav-item mr-4">
                <a className="nav-link font_sm" href="#">
                  Mark Remdiswormarg
                </a>
              </li>
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link dropdown-toggle font_sm"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Microventor 030213999882
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    #
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tabs">
                <div
                  role="tablist"
                  aria-label="Entertainment"
                  className="top"
                  id="tabss"
                >
                  <button
                    role="tab"
                    aria-selected="true"
                    aria-controls="nils-tab"
                    id="nils"
                    active
                  >
                    View
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="agnes-tab"
                    id="agnes"
                    tabindex="-1"
                    disabled=""
                  >
                    Graph
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="complexcomplex"
                    id="complex"
                    tabindex="-1"
                    data-deletable=""
                    disabled=""
                  >
                    Reports
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="complexcomplex"
                    id="complex"
                    tabindex="-1"
                    data-deletable=""
                    disabled=""
                  >
                    Events
                  </button>
                </div>
                <div
                  tabindex="0"
                  role="tabpanel"
                  id="nils-tab"
                  aria-labelledby="nils"
                >
                  <ul className="navbar-nav mr-auto row_dir ml-2">
                    <li className="nav-item dropdown mr-4">
                      <a
                        className="nav-link dropdown-toggle font_sm1"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Power:Past 7 Days
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          #
                        </a>
                        <a className="dropdown-item" href="#">
                          #
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">
                          #
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown mr-4">
                      <p className="nav-link font_sm12" href="#">
                        Apr 23,2015 - Apr 29,2015
                      </p>
                    </li>
                  </ul>
                  {/* <!--Table--> */}
                  <div className="row">
                    <div className="col-lg-9" style={{ position: "relative" }}>
                      <table className="table table-striped">
                        {/* <!--Table head-->
                      <!--Table head-->
                      <!--Table body--> */}
                        <tbody>
                          <tr>
                            <img
                              src={graph}
                              className="ml-4"
                              style={{
                                position: "absolute",
                                height: "347px",
                                width: "90%",
                              }}
                            />
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color"></th>
                            <td className="text_color"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                        {/* <!--Table body--> */}
                      </table>
                      <div className="p-2">
                        <h4>Maximum Produced</h4>
                        <p className="m-0 font_big">
                          <strong>660</strong> W
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="border border-dark d-flex p-3 radius">
                        <div>
                          34 Maleysiyansas
                          <p>
                            Jd malay
                            <br />
                            Gattesangarghs CA
                          </p>
                        </div>
                        <div className="ml-4 d-flex mt-3">
                          <h3>
                            <i>47.5</i>
                          </h3>
                          <div>
                            <img src={rain} className="img-fluid smimg ml-3" />
                          </div>
                        </div>
                      </div>
                      <div className="bg_custom text-white">
                        <p className="ml-1 leftt p-2">
                          Microinverter 0980128312
                        </p>
                      </div>
                      <div>
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#home"
                            >
                              Energy
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#menu1"
                            >
                              Status
                            </a>
                          </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content border border-dark">
                          <div id="home" className="container tab-pane active">
                            <br />
                            <div className="">
                              <p className="font_orange">Today</p>
                              <p className="m-0 font_big">
                                <strong>660</strong> Wh
                              </p>
                              <div className="bg-blue">
                                <p className="font_orange">Past 7 Days</p>
                                <p className="m-0 font_big">
                                  <strong>682</strong> kWh
                                </p>
                              </div>
                              <p className="font_orange">Month to Date</p>
                              <p className="m-0 font_big">
                                <strong>27.0</strong> kWh
                              </p>
                              <div className="bg-blue">
                                <p className="font_orange">Lifetime</p>
                                <p className="m-0 font_big">
                                  <strong>1.58</strong> MWh
                                </p>
                              </div>
                            </div>
                          </div>
                          <div id="menu1" className="container tab-pane fade">
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Table-->
        <!-- second row end --> */}
        </div>
        <script src=".\js\tabs.js"></script>
      </body>
    </>
  );
};

export default index2;
