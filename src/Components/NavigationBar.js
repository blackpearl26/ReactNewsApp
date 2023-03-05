import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
            <LinkContainer to={'/'}>
                <Navbar.Brand>News app</Navbar.Brand>
            </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to={'/top-headlines'}>
                    <Nav.Link>Top Haeadlines</Nav.Link>
                </LinkContainer>
                <LinkContainer to={'/all-news'}>
                    <Nav.Link>All News</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}