import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDataService from "../services/book.services";

const BooksList = ({ getBookId }) => {
  const [books, setBooks] = useState([]);//lista de libros
  useEffect(() => {
    getBooks();
  }, []);//al cargar los buscamos

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();//llamamos al servicio que los traiga
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));//los cargamos en el array
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);//llamamos al servicio para borrar
    getBooks();//volvemos a traer
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getBooks}>{/**para volver a buscar los libros */}
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{/**por cada libro del array mostramos sus atributos */}
          {books.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => getBookId(doc.id)}
                  >{/**cogemos su id para modificarlo pasando el id */}
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>{/**lo eliminamos pasando el id */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default BooksList;