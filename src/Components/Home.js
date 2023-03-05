import { Alert, Container } from "react-bootstrap";

export function Home(){
    return(
        <Container className="mt-5 text-center">
            <Alert variant="primary">
                Welcome to News Application
            </Alert>
        </Container>
    );
}