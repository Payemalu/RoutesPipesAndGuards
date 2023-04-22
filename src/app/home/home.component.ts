import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(NgModel) filterInput!: NgModel;

  cities: City[] = [];
  name = 'Mex-code';
  name2!: string;
  // selection!: string; -> No longer of type string
  selection!: City; // -> It is now a City type
  criteria = '';

  constructor( private readonly dataSvc: DataService) {}

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    this.filterInput.valueChanges?.subscribe(res => {
      console.log('res', res);
      this.filter(res);
    });
  }

  ngOnInit(): void {
    this.dataSvc.getCities().subscribe(cities => {
      this.cities = [...cities];
    })
  }

  filter(query: string): void {
    console.log('query', query);
  }

  updateCity(city: City): void {
    this.dataSvc.updateCity(city).subscribe(res => {
      const tempArr = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArr, city];
      this.onClear();
    });
  }

  addNewCity(city: string): void {
    this.dataSvc.addNewCity(city).subscribe(res => {
      this.cities.push( res );
    });
  }

  onCityDelete(id: string): void {
    if(confirm('Are you sure?')) {
      this.dataSvc.deleteCity(id).subscribe(() => {
        const tempArr = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArr];
        this.onClear();
      });
    }
  }

  onCitySelected(city: City): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = {
      _id: '',
      name: '',
    };
  }

}
