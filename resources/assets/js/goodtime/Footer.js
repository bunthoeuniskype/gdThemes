import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
  render(){
    return(
      <div>
         <Footer className="font-small pt-4 mt-4 footer-gd-0">
           <Container className="text-center text-md-left">
            <Row col="md-4">   
              <Col md="4">
                <h5 className="title">Links</h5>
              </Col>
              <Col md="4">
                <h5 className="title">Links</h5>               
              </Col>
             <Col md="4">
                <h5 className="title">Links</h5>
              </Col>
            </Row>
          </Container>
        </Footer>
        <Footer className="font-small pt-4 mt-4 footer-gd-1">
           <Container className="text-center text-md-left">
            <Row col="md-4">   
              <Col md="4">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled"><a href="#!">Link 1</a></li>
                  <li className="list-unstyled"><a href="#!">Link 2</a></li>
                  <li className="list-unstyled"><a href="#!">Link 3</a></li>
                  <li className="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
              </Col>

              <Col md="4">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled"><a href="#!">Link 1</a></li>
                  <li className="list-unstyled"><a href="#!">Link 2</a></li>
                  <li className="list-unstyled"><a href="#!">Link 3</a></li>
                  <li className="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
              </Col>

                <Col md="4">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled"><a href="#!">Link 1</a></li>
                  <li className="list-unstyled"><a href="#!">Link 2</a></li>
                  <li className="list-unstyled"><a href="#!">Link 3</a></li>
                  <li className="list-unstyled"><a href="#!">Link 4</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Footer>
        <Footer className="font-small pt-4 mt-4 footer-gd-2">
           <Row col="md-4">   
              <Col md="4">
                <h5 className="title">Links</h5>
              </Col>
              <Col md="4">
                <h5 className="title">Links</h5>               
              </Col>
             <Col md="4">
                <h5 className="title">Links</h5>
              </Col>
            </Row>
        </Footer>
      </div>
    );
  }
}

export default FooterPage;
