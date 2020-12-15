import React, { useState } from "react";
import {
  Col,
  Grid,
  Row,
  FormControl,
  FormGroup,
  Label,
  Form,
  Modal,
} from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
import DateTimePicker from "react-datetime-picker";
import "./add.css";

const NewMOC = () => {
  const [value, onChange] = useState(new Date());
  const [showPreview, setShowPreview] = useState(false);

  //Fields

  const [Description, setDescription] = useState("");
  const [Station, setStation] = useState("");
  const [Department, setDepartment] = useState("");
  const [TypeOfChange, setTypeOfChange] = useState("");
  const [IdentificationTagNo, setIdentificationTagNo] = useState("");
  const [DetailsofProcess, setDetailsofProcess] = useState("");
  const [Reasonsforchange, setReasonsforchange] = useState("");
  const [Impactofchange, setImpactofchange] = useState("");
  const [ChangeProposed, setChangeProposed] = useState("");
  const [HazardsIdentified, setHazardsIdentified] = useState("");
  const [AdditionalPrecautions, setAdditionalPrecautions] = useState("");
  const [ReviseddrawingsFrom, setReviseddrawingsFrom] = useState(new Date());
  const [ReviseddrawingsTo, setReviseddrawingsTo] = useState(new Date());
  const [Remarks, setRemarks] = useState("");
  const [Reviewer, setReviewer] = useState("");
  
  return (

    <div style={{ padding: "50px" }}>
      <Row>
        <Col>
          <div className="card">
            <div className="card-body" style={{ padding: "30px" }}>
              <Row>
                <Col lg={12}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Description
                    </label>
                    <textarea
                      style={{ marginTop: "10px" }}
                      className="form-control"
                      placeholder="Description"
                      value={Description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Station
                    </label>
                    <select
                      className="form-control"
                      id="inputGroupSelect01"
                      value={Station}
                      onChange={(e) => setStation(e.target.value)}
                      style={{ marginTop: "10px" }}
                    >
                      <option selected>Choose...</option>
                      <option value="CHAKSU">CHAKSU</option>
                      <option value="MOHANPURA">MOHANPURA</option>
                      <option value="SANGANER">SANGANER</option>
                    </select>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Department
                    </label>
                    <select
                      className="form-control"
                      id="inputGroupSelect01"
                      value={Department}
                      onChange={(e) => setDepartment(e.target.value)}
                      style={{ marginTop: "10px" }}
                    >
                      <option selected>Choose...</option>
                      <option value="CIVIL">CIVIL</option>
                      <option value="ELECTRICAL">ELECTRICAL</option>
                      <option value="INSPECTION">INSPECTION</option>
                      <option value="MAINLINE">MAINLINE</option>

                      <option value="MECHANICAL">MECHANICAL</option>
                      <option value="OPERATIONS">OPERATIONS</option>
                      <option value="T&I">T&I</option>
                      <option value="OTHER">OTHER</option>
                    </select>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Type of Change
                    </label>
                    <select
                      className="form-control"
                      id="inputGroupSelect01"
                      value={TypeOfChange}
                      onChange={(e) => setTypeOfChange(e.target.value)}
                      style={{ marginTop: "10px" }}
                    >
                      <option selected>Choose...</option>
                      <option value="PERMANENT">PERMANENT</option>
                      <option value="TEMPORARY">TEMPORARY</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginTop: "10px" }}>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Process / Equipment Details / Identification Tag No.
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      value={IdentificationTagNo}
                      onChange={(e) => setIdentificationTagNo(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Details of Process / Component / Circuit / system proposed
                      to be changed
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      value={DetailsofProcess}
                      onChange={(e) => setDetailsofProcess(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Reasons for change
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      className="form-control"
                      value={Reasonsforchange}
                      onChange={(e) => setReasonsforchange(e.target.value)}
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Likely impact of change
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      value={Impactofchange}
                      onChange={(e) => setImpactofchange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "30px",
                  marginTop: "30px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <Col style={{ borderBottom: "1px solid #c4c4c4" }}></Col>
              </Row>
              <Row>
                <Col lg={12} style={{ textAlign: "left" }}>
                  <h5>Risk Analysis / Hazard Identification</h5>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Change Proposed
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      value={ChangeProposed}
                      onChange={(e) => setChangeProposed(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Hazards Identified
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      value={HazardsIdentified}
                      onChange={(e) => setHazardsIdentified(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      {" "}
                      Arrangement for mitigation of impact / Additional
                      precautions , if any
                    </label>
                    <input
                      type="text"
                      style={{ marginTop: "10px" }}
                      className="form-control"
                      value={AdditionalPrecautions}
                      onChange={(e) => setAdditionalPrecautions(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <label className="label-custom"> File</label>
                  <div className="file-upload">
                    <div className="file-select">
                      <div className="file-select-button" id="fileName">
                        Choose File
                      </div>
                      <div className="file-select-name" id="noFile">
                        No file chosen...
                      </div>
                      <input type="file" name="chooseFile" id="chooseFile" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row
                style={{
                  marginBottom: "30px",
                  marginTop: "30px",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <Col style={{ borderBottom: "1px solid #c4c4c4" }}></Col>
              </Row>

              <Row>
                <Col lg={12} style={{ textAlign: "left" }}>
                  <h5>Revised drawings (if required)</h5>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      From (Date / Time)
                    </label>
                    <br />
                    <br />
                    <DateTimePicker
                      style={{ marginTop: "10px" }}
                      onChange={(e) => setReviseddrawingsFrom(e)}
                      value={ReviseddrawingsFrom}
                    
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      To (Date / Time)
                    </label>
                    <br />
                    <br />
                    <DateTimePicker
                      style={{ marginTop: "10px" }}
                      onChange={(e) => setReviseddrawingsTo(e)}
                      value={ReviseddrawingsTo}
                    
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Remarks
                    </label>
                    <textarea
                      style={{ marginTop: "10px" }}
                      className="form-control"
                      placeholder="Description"
                      value={Remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div className="form-group">
                    <label className="label-custom" for="exampleInputEmail1">
                      Reviewer
                    </label>
                    <select
                      className="form-control"
                      id="inputGroupSelect01"
                      style={{ marginTop: "10px" }}
                      value={Reviewer}
                      onChange={(e) => setReviewer(e.target.value)}
                    >
                      <option selected>Choose...</option>
                      <option value="SUSHIL BHATI, DGM (O&M)- CHAKSU">
                        SUSHIL BHATI, DGM (O&M)- CHAKSU
                      </option>
                      <option value="DINESH MISHRA, DGM-MOHANPURA">
                        DINESH MISHRA, DGM-MOHANPURA
                      </option>
                      <option value="P SRINIVASAN, CM (T&I)- CHAKSU">
                        P SRINIVASAN, CM (T&I)- CHAKSU
                      </option>
                      <option value="MUKESH PRASAD SINGH, CM - SANGANER">
                        MUKESH PRASAD SINGH, CM - SANGANER
                      </option>
                      <option value="CHAMAN LAL">CHAMAN LAL</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <div style={{ float: "right" }}>
                    <button
                      style={{ width: "100px", marginRight: "30px" }}
                      className="btn btn-primary-outline"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPreview(true);
                      }}
                    >
                      Preview
                    </button>

                    <button
                      style={{ width: "100px" }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      {showPreview && (
        <PreviewMOCModal
          Description={Description}
          Station={Station}
          Department={Department}
          TypeOfChange={TypeOfChange}
          IdentificationTagNo={IdentificationTagNo}
          DetailsofProcess={DetailsofProcess}
          Reasonsforchange={Reasonsforchange}
          Impactofchange={Impactofchange}
          ChangeProposed={ChangeProposed}
          HazardsIdentified={HazardsIdentified}
          AdditionalPrecautions={AdditionalPrecautions}
          ReviseddrawingsFrom={ReviseddrawingsFrom}
          ReviseddrawingsTo={ReviseddrawingsTo}
          Remarks={Remarks}
          Reviewer={Reviewer}
        />
      )}
    </div>
  );
};

const PreviewMOCModal = ({
  Description,
  Station,
  Department,
  TypeOfChange,
  IdentificationTagNo,
  DetailsofProcess,
  Reasonsforchange,
  Impactofchange,
  ChangeProposed,
  HazardsIdentified,
  AdditionalPrecautions,
  ReviseddrawingsFrom,
  ReviseddrawingsTo,
  Remarks,
  Reviewer,
}) => {
  return (
    <div className="card">
      <div className="card-body" style={{ padding: "20px" }}>
        <table className="custom_table custom_table_">
          <tr>
            <th
              className="custom_table custom_data"
              className="custom_table custom_data"
            >
              Date:{" "}
            </th>
            <td className="custom_table custom_data">
              {new Date().toLocaleDateString()}
            </td>
            <th className="custom_table custom_data">Department </th>
            <td className="custom_table custom_data">{Department}</td>
          </tr>

          <tr>
            <th className="custom_table custom_data">Type of Change</th>
            <td className="custom_table custom_data" colspan="3">
              {TypeOfChange}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data">
              Process / Equipment Details / Identification Tag No.
            </th>
            <td className="custom_table custom_data" colspan="3">
              {IdentificationTagNo}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data">Details of Process /</th>
            <td className="custom_table custom_data" colspan="3">
              {DetailsofProcess}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data">Reasons for change</th>
            <td className="custom_table custom_data" colspan="3">
              {Reasonsforchange}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data">
              Likely impact of change
            </th>
            <td className="custom_table custom_data" colspan="3">
              {Impactofchange}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data" rowspan="2">
              Risk Analysis / Hazard Identification
            </th>

            <th className="custom_table custom_data" colspan="2">
              Change Proposed
            </th>
            <th className="custom_table custom_data" colspan="2">
              Hazards Identified
            </th>
          </tr>
          <tr>
            <td className="custom_table custom_data" colspan="2">
              {ChangeProposed}
            </td>
            <td className="custom_table custom_data" colspan="2">
              {HazardsIdentified}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data">
              Revised drawings (if required)
            </th>
            <td className="custom_table custom_data" colspan="4"></td>
          </tr>
          <tr>
            <th className="custom_table custom_data" rowspan="2">
              Periodicity for change
            </th>

            <th className="custom_table custom_data" colspan="2">
              From (Date / Time)
            </th>
            <th className="custom_table custom_data" colspan="2">
              To (Date / Time)
            </th>
          </tr>
          <tr>
            <td className="custom_table custom_data" colspan="2">
              {ReviseddrawingsFrom.toLocaleDateString()}
            </td>
            <td className="custom_table custom_data" colspan="2">
              {ReviseddrawingsTo.toLocaleDateString()}
            </td>
          </tr>
          <tr>
            <th className="custom_table custom_data" rowspan="2">
              Remarks
            </th>

            <td
              className="custom_table custom_data"
              colspan="4"
              rowspan="2"
            ></td>
          </tr>
          {/* <tr>
            <th className="custom_table custom_data" rowspan="2">Mobile No.</th>
            <td className="custom_table custom_data">7503520801</td>
          </tr>
          <tr>
            <td className="custom_table custom_data">9555879135</td>
          </tr> */}
        </table>

        <table style={{ marginTop: "30px", width: "100%" }}>
          <tr>
            <th
              className="custom_table custom_data"
              style={{ textAlign: "center" }}
            >
              Originator
            </th>
            <th
              className="custom_table custom_data"
              style={{ textAlign: "center" }}
            >
              Reviewer
            </th>
            <th
              className="custom_table custom_data"
              style={{ textAlign: "center" }}
            >
              Approver
            </th>
          </tr>
          <tr rowspan="2">
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Signature :{" "}
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Signature :{" "}
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Signature :{" "}
            </td>
          </tr>

          <tr>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Name : MUKESH PRASAD SINGH
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Name : {Reviewer}
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Name : Piyush Kumar Jha
            </td>
          </tr>
          <tr>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Designation: : CM, SANGANER
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Designation: : DGM-MOHANPURA
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Designation: : GM, CHAKSU BASE
            </td>
          </tr>
          <tr>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Date: : {new Date().toLocaleDateString()}
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Date: : {new Date().toLocaleDateString()}
            </td>
            <td
              className="custom_table custom_data"
              style={{ textAlign: "left" }}
            >
              Date : {new Date().toLocaleDateString()}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default NewMOC;
