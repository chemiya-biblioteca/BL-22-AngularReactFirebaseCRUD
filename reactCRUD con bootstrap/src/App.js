import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import "./App.css";

function App() {
  const [bookId, setBookId] = useState("");//para almacenar el lubro

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);//asignamos el libro
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />{/**componente par aañadir con el id */}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />{/**para la lista con los ids */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
