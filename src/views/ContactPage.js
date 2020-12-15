import React from "react";
import { Grid } from "react-bootstrap";
const ContactPage = () => {
  return (
    <Grid fluid style={{ padding: "50px" }}>    
    <div className="panel panel-default">
         <div className="panel-heading">For any queries kindly contact the followings:</div>  
       <table className="table">
             <thead> <tr> <th>#</th> <th>Name</th> <th>E-mail Id</th> <th>Designation</th> </tr> </thead>
             <tbody>
                <tr> <th scope="row">1</th> <td>SUSHIL BHATI, DGM (O&M)- CHAKSU</td> <td>test@test.com</td> <td>Reveiwer</td> </tr> 
                <tr> <th scope="row">2</th> <td>DINESH MISHRA, DGM- MOHANPURA</td> <td>test@test.com</td> <td>Reveiwer</td> </tr> 
                <tr> <th scope="row">3</th> <td>P SRINIVASAN, CM (T&I)- CHAKSU</td> <td>test@test.com</td> <td>Reveiwer</td> </tr>
                <tr> <th scope="row">4</th> <td>MUKESH PRASAD SINGH, CM - SANGANER</td> <td>test@test.com</td> <td>Reveiwer</td> </tr> 
                <tr> <th scope="row">5</th> <td>PIYUSH KUMAR JHA, GM CHAKSU BASE</td> <td>test@test.com</td> <td>Approver</td> </tr>
            </tbody>
  </table>
  
</div>
  </Grid>
  );
};

export default ContactPage;
