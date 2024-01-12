import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  voitures = [
    { id: 0, marque: 'Toyota', modele: 'Corolla' },
    { id: 1, marque: 'Honda', modele: 'Civic' },
    { id: 2, marque: 'Ford', modele: 'Mustang' }
  ];

  voitureSelectionnee: any;

  afficherDetails(voiture: any) {
    this.voitureSelectionnee = voiture;
  }
}