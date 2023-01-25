import { Component, OnInit } from '@angular/core';
import Place from 'src/app/interfaces/place.interface';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[];//array para alamcenar todo

  constructor(
    private placesService: PlacesService
  ) {
    this.places = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      latitude: 40,
      longitude: -3
     
    }];//creo uno vacio
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })//busco todos del servicio y los guardo
  }

  async onClickDelete(place: Place) {
    const response = await this.placesService.deletePlace(place);
    console.log(response);
  }//le digo al servicio que lo borre

}
