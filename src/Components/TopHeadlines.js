import { Component } from "react";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import { getTopHeadlines } from "../Services/NewsApiService";

export class TopHeadlines extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }

  async componentDidMount() {
    const data = await getTopHeadlines();
    console.log(data.articles);
    this.setState({ news: data.articles });
  }

  render() {
    return (
      <>
        <Container className="mt-5 text-center">
          <Alert variant="primary">View Top Headlines</Alert>
        </Container>

        <Container className="mt-5">
          <Row>
            {this.state.news.map((item) => {
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
}
