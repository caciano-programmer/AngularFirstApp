import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  loadedFeature = "recipe";

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBLgVj9T3-5s90vaIIwUpdHECoU37Y0G4M",
      authDomain: "ng-recipebook-962f0.firebaseapp.com"
    });
  }
}
