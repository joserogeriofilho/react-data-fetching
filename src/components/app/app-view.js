import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import './app-style.css';


export default function AppView({users, loading, onLoadUsers}) {
  return (
    <div className="App">
      <WideSection>
        <Jumbotron className="my-0">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary" onClick={() => onLoadUsers()}>Learn more</Button>
          </p>
        </Jumbotron>
      </WideSection>

      <Container className="section">
        <Row>
          {loading && (
            <Col xs="12" md="6" lg="4">
              <p>Loading...</p>
            </Col>
          )}

          {!loading && users.map(user =>
            <Col xs="12" md="6" lg="4" key={user.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    E-mail: {user.email}
                    <br/>
                    Catch Phrase: {user.catchPhrase}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>

      </Container>

      <WideSection>
        <Jumbotron className="my-0">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </WideSection>
    </div>
  );
}

function WideSection(props) {
  return (
    <div className="wide-section">
      <Container>
        {props.children}
      </Container>
    </div>
  );
}