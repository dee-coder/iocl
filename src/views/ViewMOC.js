import React from "react";
import { Grid } from "react-bootstrap";
const ViewMOC = () => {
  return (
    <Grid fluid style={{ padding: "50px" }}>
      <div className="card">
        <div style={{ float: "right", padding: "12px" }}>
          <button style={{ margin: "5px" }} className="btn btn-secondary">
            Print
          </button>
          <button style={{ margin: "5px" }} className="btn btn-primary">
            Edit
          </button>
        </div>
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
              <td className="custom_table custom_data">CIVIl</td>
            </tr>

            <tr>
              <th className="custom_table custom_data">Type of Change</th>
              <td className="custom_table custom_data" colspan="3">
                PERMANENT
              </td>
            </tr>
            <tr>
              <th className="custom_table custom_data">
                Process / Equipment Details / Identification Tag No.
              </th>
              <td className="custom_table custom_data" colspan="3">
                977490458
              </td>
            </tr>
            <tr>
              <th className="custom_table custom_data">Details of Process /</th>
              <td className="custom_table custom_data" colspan="3">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi,
              </td>
            </tr>
            <tr>
              <th className="custom_table custom_data">Reasons for change</th>
              <td className="custom_table custom_data" colspan="3">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi,
              </td>
            </tr>
            <tr>
              <th className="custom_table custom_data">
                Likely impact of change
              </th>
              <td className="custom_table custom_data" colspan="3">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi,
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
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi,
              </td>
              <td className="custom_table custom_data" colspan="2">
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Quisque velit nisi,
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
                {new Date().toLocaleDateString()}
              </td>
              <td className="custom_table custom_data" colspan="2">
                {new Date().toLocaleDateString()}
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
                Name : TEST NAME
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
    </Grid>
  );
};

export default ViewMOC;
