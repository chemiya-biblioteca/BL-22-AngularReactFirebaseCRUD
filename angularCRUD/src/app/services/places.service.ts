import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Place from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }//creo de firebase

  addPlace(place: Place) {//creo un elemento y lo guardo
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place);
  }

  getPlaces(): Observable<Place[]> {//cojo todos los de la base
    const placeRef = collection(this.firestore, 'places');
    return collectionData(placeRef, { idField: 'id' }) as Observable<Place[]>;
  }

  deletePlace(place: Place) {//borro uno concreto pasando el id
    const placeDocRef = doc(this.firestore, `places/${place.id}`);
    return deleteDoc(placeDocRef);
  }

}
