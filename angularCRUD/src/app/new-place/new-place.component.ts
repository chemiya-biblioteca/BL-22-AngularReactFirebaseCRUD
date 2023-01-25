import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

  formulario: FormGroup;//creo formualrio

  constructor(
    private placesService: PlacesService
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),
      description: new FormControl(),
     
    })//creo campos del formulario
  }

  ngOnInit(): void {
  }

  async onSubmit() {//cuando se suba digo al servicio que lo guarde los valores del formualrio
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }

}
