import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getDatabase, ref, push, get, child, update , remove } from "firebase/database";



@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  islogin: boolean = false
  
  private database: firebase.database.Database;
  constructor(private afs: AngularFireAuth) {
    this.database = firebase.database();
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

  Adduser(newuser: any) {
    const database = firebase.database();
    const collectionRef = database.ref('users');


    collectionRef.push(newuser)
      .then(() => {
        console.log('Data added to the collection successfully!');
      })
      .catch((error) => {
        console.error('Error adding data to the collection:', error);
      });
  }

  signup(user: { email: string, password: string }) {
    return this.afs.createUserWithEmailAndPassword(user.email, user.password)
  }

  login(user: { email: string, password: string }) {
    return this.afs.signInWithEmailAndPassword(user.email, user.password)
  }

  logout() {
    this.afs.signOut()

  }

  addtask(newtask: any) {
    const db = getDatabase();
    const tasksRef = ref(db, "tasks");


    push(tasksRef, newtask)
      .then((newTaskRef) => {
        console.log("Task added successfully");
        console.log("New task key:", newTaskRef.key);
        // Additional processing or actions after adding the task
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }

  async getalltasks(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const db = getDatabase();
      const tasksRef = ref(db, "tasks");
  
      get(child(tasksRef, "/"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const tasks = snapshot.val();
            resolve(tasks);
          } else {
            resolve([]); // Return an empty array if no data is available
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }


  updateRecord(recordId: string, newData: any): Promise<void> {
    
    const ref = this.database.ref('tasks' + recordId);
    return ref.update(newData);
  }
  uploadImage(file: File, userId: string) {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`profilePictures/${userId}`);

    // Upload file
    imageRef.put(file)
      .then((snapshot) => {
        console.log('Image uploaded successfully!');
        // You can access the download URL of the uploaded image from the snapshot
        const downloadUrl = snapshot.ref.getDownloadURL();
        // Save the download URL to associate it with the user or perform any other necessary action
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }

  updateTask(taskId: string, updatedTask: any) {
    const db = getDatabase();
    const taskRef = ref(db, `tasks/${taskId}`);
  
    update(taskRef, updatedTask)
      .then(() => {
        console.log("Task updated successfully");
        // Additional processing or actions after updating the task
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });
  }

  deletetask(recordId: any){
    const db = getDatabase();
    const recordRef = ref(db, `tasks/${recordId}` );
  
    remove(recordRef)
      .then(() => {
        console.log('Record deleted successfully');
        // Additional processing or actions after deleting the record
      })
      .catch((error) => {
        console.error('Error deleting record:', error);
      });
  }
}
