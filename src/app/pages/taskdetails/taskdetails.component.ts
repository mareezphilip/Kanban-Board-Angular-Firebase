import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalserviceService } from 'src/app/services/globalservice.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent {

  taskid:any
  tasks:any
  taskarr:any[] =[]
  selectedtask :any
  isCheckboxDisabled = false;
  checked =false
constructor(private activate:ActivatedRoute , private service:GlobalserviceService , private snackBar: MatSnackBar){

}

 ngOnInit(){
 
     this.activate.paramMap.subscribe(param=>{
    this.taskid=param.get('taskid')
    console.log(this.taskid)
   
    this.gettask()

    
    
    
  })
  }
 
 

  async gettask(){
    try {
      this.tasks = await this.service.getalltasks();
      for(let task in this.tasks){
         this.taskarr.push({taskid:task, data:this.tasks[task]})
      }

      this.selectedtask = this.taskarr.find((t :any)=>t.taskid == this.taskid) ;
      console.log(this.selectedtask)
      if(this.selectedtask.data.stage == "Done"){
        this.checked = true
    }

    console.log("checked" , this.checked)
      
    }
    catch(e){
      console.log(e)
    }
  }

  handleCheckboxChange(event: any){
    if (event.target.checked) {
      const recordId = this.taskid
      const newData={...this.selectedtask.data , stage:"Done"}
      const user = localStorage.getItem("user")
      if(user){
      this.service.updateTask(recordId,newData)

      this.isCheckboxDisabled = true;
      this.service.subscribeToDataChanges().subscribe(data => {
        // Handle the real-time changes here
        console.log('Data changed:', data);
        console.log("data changed")
        
        this.snackBar.open('Data changed!', 'Dismiss', { duration: 5000 });
      });
    
      }else{
        alert("please login to edit data")
      }
    }
  }
  delete(taskid:any){
     this.service.deletetask(taskid)
  }
}


