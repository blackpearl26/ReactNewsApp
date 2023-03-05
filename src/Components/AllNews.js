import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { getAllNews } from "../Services/NewsApiService";
export function AllNews() {
  const [news, setNews] = useState([]);

  const [topic, setTopic] = useState("");

  async function getNews(topic) {
    const data = await getAllNews(topic);
    setNews(data.articles);
  }

  useEffect(() => {
    getNews('indian politics');
  }, []);



  const handleChange=(event)=>{
    setTopic(event.target.value)
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    getNews(topic);
  }

  return (
    <>
      <Container className="mt-5 text-center">
        <Alert variant="success">View All News</Alert>
      </Container>
      <Container className="mt-5 mb-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" placeholder="Enter topic" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Container className="mt-5">
        <Row>
          {news.map((item) => {
            return (
              <Col lg={4}>
                <Card>
                  <Card.Img variant="top" src={item.urlToImage} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
