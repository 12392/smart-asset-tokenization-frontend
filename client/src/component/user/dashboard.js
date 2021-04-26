import React from "react";

const dashBoard = () => {
  return (
    <>
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg_custom border_radius">
          <div className="collapse navbar-collapse m-1">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ml-4">
                <a className="nav-link" href="#">
                  CLIENT DASHBOARD
                </a>
              </li>
            </ul>
            <form className="form-inline  my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">
                    Description
                  </a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" onclick="window.location='index.html'">
                    System
                  </a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">
                    Reports
                  </a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">
                    Graph
                  </a>
                </li>
                <li className="nav-item mr-4">
                  <a className="nav-link" href="#">
                    Site Layout
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </nav>

        <div className="row mt-3 ">
          <div className="col-lg-12 ">
            <table className="table table-striped">
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
              {/* <!--Table head--> */}

              {/* <!--Table body--> */}
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
        </div>
      </body>
    </>
  );
};

export default dashBoard;
