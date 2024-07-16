import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';


const firstName = 'aouakli';

export default function App(){
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', margin: 'auto', padding: '20px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-4 text-center">
        {firstName ? (
          <>
            <h3>Hello, {firstName}!</h3>
          </>
        ) : (
          <h3>Hello, there!</h3>
        )}
      </div>
    </Container>
  );
};


