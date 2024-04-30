import { Component, Input } from '@angular/core';
import { GlobalserviceService } from 'src/app/services/globalservice.service';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { retry } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
@Input() public task :any
@Input() public stagename :any

tasks: any;
taskarr:any[] =[]
filterdtasks  :any =[]
droppedItems: string[] = [];
constructor(private service:GlobalserviceService , private router:Router , private location: Location , private snackBar: MatSnackBar ){}


  dummy =0
  newData = {}
  currenttask :any
  async ngOnInit(){
  
    this.taskarr=[]
    
    try {
      this.tasks = await this.service.getalltasks();
      for(let task in this.tasks){
         this.taskarr.push({taskid:task, data:this.tasks[task]})
      }
      this.service.subscribeToDataChanges().subscribe(data => {
        // Handle the real-time changes here
        console.log('Data changed:', data);
        console.log("data changed")
        
        this.snackBar.open('Data changed!', 'Dismiss', { duration: 5000 });
      });
    }
    catch(e){
      console.log(e)
    }
    //   console.log("ana fe onchange " , this.stagename)
    //   console.log(this.taskarr)

    //   this.taskarr.forEach(element => {
    //     console.log(element.data.stage)
    //   });
    //   this.filterdtasks = this.taskarr.filter((e=>e.data.stage == this.stagename))
    //   console.log("filterd" , this.filterdtasks)
    // } catch (error) {
    //   console.error("Error retrieving tasks:", error);
    // }
//  this.filterdtasks = this.taskarr.filter((t=> t.data.stage== this.stagename))
//  console.log("ana fel task changes " , this.filterdtasks)
 }


 filtertasks(stage:string){
  
  return this.filterdtasks = this.taskarr.filter((e=>e.data.stage == stage))
 
 }



ondrop(event:any , stage:any){
console.log("on drop")
event.preventDefault()
console.log(this.taskarr)
const record = this.taskarr.find(t=>t.taskid == this.currenttask.taskid)
if(record != undefined){
  const recordId = this.currenttask.taskid
  const newData={...this.currenttask.data , stage}
  const user = localStorage.getItem('user')
  if(user){
    for(var i = 0 ; i< this.taskarr.length ; i++){
      if(this.taskarr[i].taskid == recordId){
        this.taskarr[i].data.stage = stage
      }
    }

    this.service.updateTask(recordId,newData)
  
    // this.router.navigateByUrl('home');
    // this.location.go('/home'); // Manually update the browser URL
    
    // location.reload(); // Reload the page
    
    console.log("stage name " , stage)
  }
  else{
    alert("please login to edit data")
  }
  }
 



}
ondragover(event:any){
  console.log("ondragover")
  event.preventDefault()
}

ondragstart(task:any){
this.currenttask =task
console.log("ondragstart")
}

update(){

  
  const recordId = '-NwKV_wRSXB6iLHd0u-N'; // Replace with the ID of the record you want to update

    const newData = {
      title:"task4",
      stage:"Done",
      description:"Hard",
      duedate:"15/5/2024"
    };

   this.service.updateTask(recordId,newData)
  }


}

