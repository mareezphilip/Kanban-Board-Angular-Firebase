import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent {


  dummy = 0
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
droppedItems: string[] = ['item5'];

  drop(event: CdkDragDrop<string[]>) {
    console.log("items" , this.droppedItems)
    if (event.previousContainer === event.container) {
      moveItemInArray(this.droppedItems, event.previousIndex, event.currentIndex);
      console.log("items" , this.droppedItems)
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.dummy++
    }
  }
}
