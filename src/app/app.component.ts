import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  // private itemsCollection: AngularFirestoreCollection<any>;
  // items: Observable<any[]>;

  constructor() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAP9MqNxbOszb9T_1OxrqQPtKdzxyUpfKc",
      authDomain: "kanban-board-58bc9.firebaseapp.com",
      databaseURL: "https://kanban-board-58bc9-default-rtdb.firebaseio.com",
      projectId: "kanban-board-58bc9",
      storageBucket: "kanban-board-58bc9.appspot.com",
      messagingSenderId: "413734887556",
      appId: "1:413734887556:web:52cd71dc91c630349aa2d1",
      measurementId: "G-N461RKFW5S"
    };
    firebase.initializeApp(firebaseConfig);
  }
  title = 'kanban-board-app';

  // addData() {
  //   this.itemsCollection.add({ name: 'New Item' });
  //   console.log("data added")
  // }

  addCollection() {
    const database = firebase.database();
    const collectionRef = database.ref('tasks'); // Specify the path to the collection
  
    const newCollectionData = {
      // Data for the new collection
      name: 'task 1 ',
      description: 'This is a sample task',
      stage: "in progress"
    };
  
    collectionRef.push(newCollectionData)
      .then(() => {
        console.log('Collection added successfully!');
      })
      .catch((error) => {
        console.error('Error adding collection:', error);
      });
  }

  adduser() {
    const database = firebase.database();
    const collectionRef = database.ref('tasks');
  
    const newuser = {
      // Data to be added to the collection
      name: 'task 2',
      description:'lgn jngjn jgnug jnt',
      stage:'to do'
    };
  
    collectionRef.push(newuser)
      .then(() => {
        console.log('user added to the collection successfully!');
      })
      .catch((error) => {
        console.error('Error adding data to the collection:', error);
      });
  }

}
