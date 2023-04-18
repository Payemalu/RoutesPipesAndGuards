import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cities = ['Campeche', 'Chihuahua', 'Durango', 'Hidalgo', 'Yucatan']
  name = 'Mex-code';
  name2!: string;
  selection!: string;
  criteria = '';
  
  title = 'Reto 01, Día 14';
  url = 'https://img.freepik.com/fotos-premium/fantastica-vista-cascada-kirkjufellsfoss-cerca-montana-kirkjufell-al-atardecer_761071-868.jpg';

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

}
