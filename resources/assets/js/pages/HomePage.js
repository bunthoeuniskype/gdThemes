import React from 'react';
const NavLink = require('react-router-dom').NavLink;

import './HomePage.css';

import {
  Mask, EdgeHeader, FreeBird, Container, Col,
  Row,  Fa, View,Card,
  CardImage, CardTitle, CardText, CardBody, Button
 } from 'mdbreact';

class HomePage extends React.Component {
  render(){
    return(
      <div>
        <img src="/img/home_page.jpg" style={{width:'100%'}} />
        <Container>
          <Row className="mt-4 card-list">  
            <Col md="12">
              <h2 className="title">Recommendation Offer</h2>
            </Col>

            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>   

            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>

            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col> 
          
            <Col md="4"> 
                <Card reverse>
                  <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                  <CardBody cascade>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card</CardText>
                    <CardText>Cambodia </CardText>
                  </CardBody>
                </Card>    
              </Col>

               <Col md="4"> 
                <Card reverse>
                  <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                  <CardBody cascade>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card</CardText>
                    <CardText>Cambodia </CardText>
                  </CardBody>
                </Card>    
              </Col>   
              <Col md="4"> 
                <Card reverse>
                  <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                  <CardBody cascade>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card</CardText>
                    <CardText>Cambodia </CardText>
                  </CardBody>
                </Card>    
              </Col>           
          </Row>

          <Row className="mt-4 card-list">  
            <Col md="12">
              <h2 className="title">Popular</h2>
            </Col> 
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>   
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>            
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>

             <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>   
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                  <CardText>Some quick example text to build on the card</CardText>
                  <CardText>Cambodia </CardText>
                </CardBody>
              </Card>    
            </Col>           
          </Row>

          <Row className="mt-4 card-list">  
            <Col md="12">
              <h2 className="title">Short Break</h2>
            </Col> 
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col>   
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col>
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col> 
           
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col>

             <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col>   
            <Col md="4"> 
              <Card reverse>
                <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" waves/>
                <CardBody cascade>
                  <CardTitle>Card title</CardTitle>
                </CardBody>
              </Card>    
            </Col> 
          </Row>        
        </Container>
      </div>
    );
  }
}

export default HomePage;
