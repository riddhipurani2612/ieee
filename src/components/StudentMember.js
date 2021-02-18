import React from "react";
import {Container,Table} from 'react-bootstrap';
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text{
    color: white;
  }
`;
const StudentMember = () => {
  return (
    <Styles>
      <div className="main-bg text">
        <Container>
          <div className="display-3 text-left text">CEPT University</div>
            <Table striped bordered hover className="text">
                <tr>
                    <td>Kushal Chandrakant Shah</td>
                    <td>kushal.pg190490@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Megh Bharatbhai Shah </td>
                    <td>shahmegh1313@gmail.com</td>
                </tr>
                <tr>
                    <td>Zeel Samir Shah</td>
                    <td>shahzeel999@gmail.com</td>
                </tr>
                <tr>
                    <td>Jignesh R Patel </td>
                    <td> jignnesh@gmail.com</td>
                </tr>
                <tr>
                    <td>Gaurang Mahendrabhai Patel </td>
                    <td>patelgaurang1995@gmail.com</td>
                </tr>
                <tr>
                    <td>Het  Thakkar</td>
                    <td>het.pg190379@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Urvi  Shroff</td>
                    <td>urvi.shroff.mgeo17@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Aseem Ahmad Shaikh</td>
                    <td>aseemshaikh1496@gmail.com</td>
                </tr>
                <tr>
                    <td>Aagam  Shah</td>
                    <td>artistaagam@gmail.com</td>
                </tr>
                <tr>
                    <td>Vrutti  Bhatt </td>
                    <td>vruttibhatt.vb@gmail.com</td>
                </tr>
                <tr>
                    <td>Ashish  Upadhyay</td>
                    <td>ashishbu@yahoo.com</td>
                </tr>
                <tr>
                    <td>Neha  Sharma</td>
                    <td>neha.pg180592@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Tej Dilipbhai Chavda </td>
                    <td>tejp400@gmail.com</td>
                </tr>
                <tr>
                    <td>Aditya Sanjay Saraswat</td>
                    <td>aditya.pg190040@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Disha  Patel  </td>
                    <td>disha.pg190295@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Shubham Vinod Raut   </td>
                    <td>ar.shubhamraut@gmail.com</td>
                </tr>
                <tr>
                    <td>Virat Divyangbhai Desai</td>
                    <td>viratdesai1426@gmail.com</td>
                </tr>
                <tr>
                    <td>Sindhuja  Ranganath</td>
                    <td> sindhuja.pg190943@cept.ac.in</td>
                </tr>
                <tr>
                    <td>Shivani  Kharra</td>
                    <td>shivanikharra@gmail.com</td>
                </tr>
                <tr>
                    <td>Medhini  Heeramaglore</td>
                    <td>medhs.iyengar@gmail.com</td>
                </tr>
            </Table>
            <div className="display-3 text-left text">IIT</div>
            <Table striped bordered hover className="text">
                <tr>
                    <td>Vikas Kumar Jain</td>
                    <td> vikasjain.cse@gmail.com</td>
                </tr>
                <tr>
                    <td>Vijayashekhar S Sankannanavar</td>
                    <td>201671003@iiitvadodara.ac.in</td>
                </tr>
                <tr>
                    <td>Tushar  Gadhiya</td>
                    <td>tushky.exe@gmail.com</td>
                </tr>
            </Table>
            <div className="display-3 text-left text">Nirma University</div>
            <Table striped bordered hover className="text">
                <tr>
                    <td>Dhwanilnath  Gharekhan</td>
                    <td>   dhwanilnath@gmail.com</td>
                </tr>
                <tr>
                    <td>Jayachandra  Ravi</td>
                    <td> jayachandra.ravi50@gmail.com</td>
                </tr>
                <tr>
                    <td>Kinjal  Dave</td>
                    <td>kjdave.27@gmail.com</td>
                </tr>
                <tr>
                    <td>Pooja Bhavesh Shah</td>
                    <td> poojabshah2512@gmail.com</td>
                </tr>
                <tr>
                    <td>Nimra Mohamed Husain Memon</td>
                    <td>nimra3091@gmail.com</td>
                </tr>
            </Table>
        </Container>
      </div>
    </Styles>
  );
};

export default StudentMember;
