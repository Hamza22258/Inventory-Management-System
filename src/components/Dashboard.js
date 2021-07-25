import React, { Component } from "react";
import Chart from "react-google-charts";
class Dashboard extends Component {
  render() {
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="card ">
                <div className="card-header ">
                  <h4 className="card-title">Stock Statistics</h4>
                  <p className="card-category">Stocks Availability</p>
                </div>
                <div className="card-body ">
                  <Chart
                    width={"500px"}
                    height={"450px"}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ["Board", "Hours per Day"],
                      ["Sofas", 11],
                      ["Beds", 2],
                      ["Luxury Beds", 2],
                      ["TV", 2],
                      ["Tables", 7],
                    ]}
                    options={{
                      title: "My Daily Activities",
                      // Just add this option
                      pieHole: 0.4,
                    }}
                    rootProps={{ "data-testid": "3" }}
                  />

                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Bounce
                    <i className="fa fa-circle text-warning"></i> Unsubscribe
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-header ">
                  <h4 className="card-title">Sales</h4>
                  <p className="card-category">24 Hours performance</p>
                </div>
                <div className="card-body ">
                  <Chart
                    width={"600px"}
                    height={"400px"}
                    chartType="Line"
                    loader={<div>Loading Chart</div>}
                    data={[
                      [
                        "Day",
                        "Luxury Items",
                        "Local Furniture",
                        "Functional Goods",
                      ],
                      [1, 37.8, 80.8, 41.8],
                      [2, 30.9, 69.5, 32.4],
                      [3, 25.4, 57, 25.7],
                      [4, 11.7, 18.8, 10.5],
                      [5, 11.9, 17.6, 10.4],
                      [6, 8.8, 13.6, 7.7],
                      [7, 7.6, 12.3, 9.6],
                      [8, 12.3, 29.2, 10.6],
                      [9, 16.9, 42.9, 14.8],
                      [10, 12.8, 30.9, 11.6],
                      [11, 5.3, 7.9, 4.7],
                      [12, 6.6, 8.4, 5.2],
                      [13, 4.8, 6.3, 3.6],
                      [14, 4.2, 6.2, 3.4],
                    ]}
                    options={{
                      chart: {
                        title: "Sales for the given items",
                        subtitle: "in thousand of ruppees (pkr)",
                      },
                    }}
                    rootProps={{ "data-testid": "3" }}
                  />
                </div>
                <div className="card-footer ">
                  <div className="legend">
                    <i className="fa fa-circle text-info"></i> Open
                    <i className="fa fa-circle text-danger"></i> Click
                    <i className="fa fa-circle text-warning"></i> Click Second
                    Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav>
              <ul className="footer-menu"></ul>
              <p className="copyright text-center">Hamza Inc. © 2020</p>
            </nav>
          </div>
        </footer>
      </div>
    );
  }
}

export default Dashboard;
