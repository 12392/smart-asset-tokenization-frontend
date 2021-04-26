import React from "react";
import map from "../../asset/images/map.jpg";
import NavIndex from "../NavBars/NavIndex";

const index1 = () => {
  return (
    <>
      <body>
        <div className="container-fluid">
          {/* <!-- Navbar --> */}

          <NavIndex />

          {/* <!-- navbar ends -->
        <!-- second row start --> */}
          <div className="p-4">
            <h4>Systems</h4>
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
                  >
                    List
                  </button>
                  <button
                    role="tab"
                    aria-selected="false"
                    aria-controls="agnes-tab"
                    id="agnes"
                    tabindex="-1"
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
                  >
                    Activations
                  </button>
                </div>
                <div
                  tabindex="0"
                  role="tabpanel"
                  id="nils-tab"
                  aria-labelledby="nils"
                >
                  <div className="float-left">
                    Showing 1 to 16 of 16 System (Filtered from 22 total system)
                    <button className="btns mb-2 ml-1">Show all systems</button>
                  </div>

                  <nav aria-label="Page navigation example">
                    <ul className="pagination mr-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                  {/* <!--Table--> */}
                  <div className="row">
                    <div className="col-lg-9">
                      <table
                        className="table table-striped"
                        onclick="window.location='index2.html'"
                      >
                        {/* <!--Table head--> */}
                        <thead className="bg">
                          <tr>
                            <th>Status</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Today</th>
                            <th>Past 7 Days</th>
                            <th>% of Estimated (Month)</th>
                            <th>Lifetime</th>
                            <th>Connection</th>
                          </tr>
                        </thead>
                        {/* <!--Table head-->

                      <!--Table body--> */}
                        <tbody>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Glenview</td>
                            <td>229 KWh</td>
                            <td>1.7 MWh</td>
                            <td>128%</td>
                            <td>308 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Lyon</td>
                            <td>30.8 KWh</td>
                            <td>177 MWh</td>
                            <td>149%</td>
                            <td>11.2 MWH</td>
                            <td>Wi-Fi</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>N. WATERBORO</td>
                            <td>14.5 KWh</td>
                            <td>209 KWh</td>
                            <td>117%</td>
                            <td>31.3 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Sebastoppo</td>
                            <td>22.8 KWh</td>
                            <td>231 MWh</td>
                            <td>122%</td>
                            <td>61.5 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Rollingstone</td>
                            <td>215 KWh</td>
                            <td>1.49 MWh</td>
                            <td>107%</td>
                            <td>160 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>L'IBLE'D'ABREWA</td>
                            <td>14.9 KWh</td>
                            <td>79.4 MWh</td>
                            <td>110%</td>
                            <td>11.2 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Sonoma</td>
                            <td>235 KWh</td>
                            <td>2.58 MWh</td>
                            <td>128%</td>
                            <td>476 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Wadeill</td>
                            <td>206 KWh</td>
                            <td>1.96 MWh</td>
                            <td>128%</td>
                            <td>465 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Borrego</td>
                            <td>40.0 KWh</td>
                            <td>375 MWh</td>
                            <td>128%</td>
                            <td>49.1 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Wadeill</td>
                            <td>206 KWh</td>
                            <td>1.96 MWh</td>
                            <td>128%</td>
                            <td>465 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row" className="text_color">
                              Normal
                            </th>
                            <td className="text_color">Kate</td>
                            <td>Borrego</td>
                            <td>40.0 KWh</td>
                            <td>375 MWh</td>
                            <td>128%</td>
                            <td>49.1 MWH</td>
                            <td>Ethernet</td>
                          </tr>
                        </tbody>
                        {/* <!--Table body--> */}
                      </table>
                    </div>
                    <div className="col-lg-3">
                      <img src={map} className="img-thumbnail" />
                      <div className="bg_custom text-white">
                        <p className="ml-1 leftt p-2">Filter System</p>
                      </div>
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
                      </ul>

                      {/* <!-- Tab panes --> */}
                      <div className="tab-content border border-dark">
                        <div id="home" className="container tab-pane active">
                          <br />
                          <div className="">
                            <p className="font_orange">Today</p>
                            <p className="m-0 font_big">
                              <strong>2.55</strong> MWH
                            </p>
                            <p className="font_orange">Past 7 Days</p>
                            <p className="m-0 font_big">
                              <strong>26.5</strong> MWH
                            </p>
                            <p className="font_orange">Month to Date</p>
                            <p className="m-0 font_big">
                              <strong>106</strong> MWH
                            </p>
                            <p className="font_orange">Lifetime</p>
                            <p className="m-0 font_big">
                              <strong>3.72</strong> MWH
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
        <!--Table-->
        <!-- second row end --> */}
        </div>

        <script src=".\js\tabs.js"></script>
      </body>
    </>
  );
};

export default index1;
