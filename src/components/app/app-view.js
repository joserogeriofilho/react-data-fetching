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
          <h1>Fetch Data From API</h1>
          <p>
            This application fetches data from a public API using axios library and displays it with React Bootstrap components.
          </p>
          <p>
            <Button variant="primary" onClick={() => onLoadUsers()}>Reload Data</Button>
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