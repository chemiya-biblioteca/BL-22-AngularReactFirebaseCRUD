import { db } from "../firebase-config";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";//cargamos de firebase

const bookCollectionRef = collection(db, "books");//buscamos la coleccion de firebsase
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);//añadimos a la coleccion
  };

  updateBook = (id, updatedBook) => {
    const bookDoc = doc(db, "books", id);//creamos nuevo y actualizmos
    return updateDoc(bookDoc, updatedBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);//cargamos con el id y borramos
    return deleteDoc(bookDoc);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);//obtenemos todos
  };

  getBook = (id) => {
    const bookDoc = doc(db, "books", id);//cargamos uno y lo buscamos
    return getDoc(bookDoc);
  };
}

export default new BookDataService();