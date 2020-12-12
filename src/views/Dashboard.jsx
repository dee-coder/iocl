/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table, Alert } from "react-bootstrap";
import { thArray, tdArray } from "variables/Variables.jsx";


import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import { Tasks } from "../components/Tasks/Tasks.jsx";
import { Link } from 'react-router-dom';
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables.jsx";

const Dashboard = () => {
  
  const [ShowAlert, setShowAlert] = useState(true);
  const createLegend = (json)=> {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  
  
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={12}>
              {/* <div className="content">
            <Alert bsStyle="info" className="alert-with-icon">
                    <button type="button" aria-hidden="true" className="close">
                      &#x2715;
                    </button>
                    <span data-notify="icon" className="pe-7s-bell" />
                    <span data-notify="message">
                      This is a notification with close button and icon and have
                      many lines. You can see that the icon and the close button
                      are always vertically aligned. This is a beautiful
                      notification. So you don't have to worry about the style.
                    </span>
                  </Alert></div> */}
              {ShowAlert &&  <Alert bsStyle="warning"   style = {{padding:'30px',borderRadius:'5px'}} >
                    <button type="button" aria-hidden="true" className="close" style ={{marginRight:'20px',marginTop:'-30px'}} onClick = {(e)=>setShowAlert(false)}>
                      &#x2715;
                    </button>
                    <span>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada.
                    </span>
                  </Alert>}
            </Col>
          </Row>
          <Row>

            <Col lg={3}>
              <Link to="/admin/newmoc">
              <div className="card">
                <div className="card-body" style={{ padding: '30px' }}>
                  <i className="pe-7s-plus" style ={{fontSize:'50px',color:'green'}}></i><br/>
                  <span style ={{fontSize:'20px',fontWeight:'600',color:'black'}} >
                    New MOC + 
                    </span><br/>
                  <span style={{ color:'gray'}}> Create a new MOC</span>
                </div>
                </div>
                </Link>
            </Col>
            <Col lg={3}>
            <Link to="/admin/mymocs">
              <div className="card">
                <div className="card-body" style ={{padding:'30px'}}>
                <i className="pe-7s-copy-file" style ={{fontSize:'50px',color:'green'}}></i><br/>
                <span style ={{fontSize:'20px',fontWeight:'600',color:'black'}} >
                    My MOCs
                    </span><br/>
                  <span style={{ color:'gray'}}> View your all MOC</span>
                </div>
                
                </div>
                </Link>
            </Col>
            <Col lg={3}>
            <Link to="/admin/mocrecords">
              <div className="card">
                <div className="card-body" style ={{padding:'30px'}}>
                <i className="pe-7s-portfolio" style ={{fontSize:'50px',color:'green'}}></i><br/>
                <span style ={{fontSize:'20px',fontWeight:'600',color:'black'}} >
                   MOC Records
                    </span><br/>
                  <span style={{ color:'gray'}}>View all MOC Records</span>
                </div>
                
              
                </div>
               </Link>
            </Col> 
            <Col lg={3}>
            <Link to="/admin/pendingmoc">
              <div className="card">
                <div className="card-body" style ={{padding:'30px'}}>
                <i className="pe-7s-refresh-2" style ={{fontSize:'50px',color:'green'}}></i><br/>
                <span style ={{fontSize:'20px',fontWeight:'600',color:'black'}} >
                   Pending MOCs
                    </span><br/>
                  <span style={{ color:'gray'}}> View all Pending MOCs</span>
                </div>
                
               
                </div>
               </Link>
            </Col> 
            {/* <Col lg={3}>
              <div className="card">
                <div className="card-body" style ={{padding:'30px'}}>

                </div>
              </div>
            </Col>
             {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
          </Row>
          <Row style ={{marginTop:'50px'}}>
            <Col lg={12}>
            <div className="card">
              <div className="card-body" style={{ padding: "30px" }}>
                <Table striped hover>
                  <thead>
                    <tr>
                      {thArray.map((prop, key) => {
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tdArray.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.map((prop, key) => {
                            return (
                              <td key={key}>
                                {" "}
                                {key === 8 ? (
                                  <div className="d-flex ">
                                    {" "}
                                    <Link to="/admin/viewmoc/1234">
                                      <i
                                        class="fa fa-eye"
                                        style={{
                                          margin: "5px",
                                          fontSize: "20px",
                                          color: "blue",
                                        }}
                                      ></i>
                                    </Link>
                                    <Link to="/admin/edit/1234">
                                      {" "}
                                      <i
                                        class="fa fa-pencil"
                                        style={{
                                          margin: "5px",
                                          fontSize: "20px",
                                          color: "red",
                                        }}
                                      ></i>
                                    </Link>
                                  </div>
                                ) : (
                                  prop
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            </Col>
          </Row>
          {/* <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row> */}
        </Grid>
      </div>
    );
  
}

export default Dashboard;
