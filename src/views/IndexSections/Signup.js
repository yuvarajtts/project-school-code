/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import background from '../../assets/img/demos.png'
export default function Signup() {
  const [fullNameFocus, setFullNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const myStyle={
    backgroundImage: `url(${background})`,
    // backgroundImage: "url(/assets/img/demo.jpg)",
//     backgroundImage: 
// "url('assets/img/demo.jpg')",
    height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const handleclick = () =>{
  console.log("welcome!")
}
  return (
    <div style={myStyle} className="section section-signup">
      <Container>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className="squares square-3" />
        <div className="squares square-4" />
        <Row className="row-grid justify-content-between align-items-center">
          
          <Col className="mb-lg-auto" lg="6">
            <Card style={{backgroundColor:'transparent'}} className="card-register">
              <CardHeader>
                <CardImg
                  alt="...no image"
                  src={require("assets/img/square-purple-1.png").default}
                />
                <CardTitle tag="h4">Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  {/* <InputGroup
                    className={classnames({
                      "input-group-focus": fullNameFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      onFocus={(e) => setFullNameFocus(true)}
                      onBlur={(e) => setFullNameFocus(false)}
                    />
                  </InputGroup> */}
                  <InputGroup
                    className={classnames({
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="username"
                      type="text"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                  <InputGroup
                    className={classnames({
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-lock-circle" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="text"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                  {/* <FormGroup check className="text-left">
                    <Label check>
                      <Input type="checkbox" />
                      <span className="form-check-sign" />I agree to the{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        terms and conditions
                      </a>
                      .
                    </Label>
                  </FormGroup> */}
                </Form>
              </CardBody>
              <CardFooter  >
                <Button className="btn-round " color="primary" size="lg">
                  Help with Login
                </Button >
                <Button  style={{ marginLeft:"30%"}} className="btn-round" color="primary" size="lg" onClick={handleclick}>
                  Login
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="6">
            <h3 className="display-3 text-darker">
               Tip:
            </h3>
            <span className="text-darker"> place the tab key to enter Password?</span>
            <p className="text-darker mb-3" tag={Link}>
             To include any other pertinent instructions for the teacher 
            </p>
            <h3 className="display-3 text-darker">
               Tip:
            </h3>
            <p className="text-darker mb-3">
             To include any other pertinent instructions for the teacher 
            </p>
            {/* <div className="btn-wrapper">
              <Button color="primary" to="register-page" tag={Link}>
                Join to Scratch
              </Button>
            </div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
