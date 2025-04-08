import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state;

  if (!movie) return <p>No movie data found!</p>;

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={() => navigate('/home')}>
        ⬅ Back to Home
      </Button>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={movie.poster} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>{movie.name}</h2>
          <p><strong>Year:</strong> {movie.year}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <p><strong>Stars:</strong> {movie.stars}</p>
          <p><strong>Directed by:</strong> {movie.directed_by}</p>
          <p><strong>Music by:</strong> {movie.Music_by}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
