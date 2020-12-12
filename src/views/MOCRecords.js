import React from "react";
import { Row, Col, Table, Grid } from "react-bootstrap";
import { thArray, tdArray } from "../variables/Variables.jsx";
import { Link } from "react-router-dom";

const MOCRecords = () => {
  return (
    <div>
      <Grid fluid style={{ padding: "50px", overflowX: "scroll" }}>
        <Row>
          <Col>
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
      </Grid>
    </div>
  );
};

export default MOCRecords;
