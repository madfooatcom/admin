import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-paramter',
  templateUrl: './list-paramter.component.html',
  styleUrls: ['./list-paramter.component.scss']
})
export class ListParamterComponent implements OnInit {

  listForm: FormGroup;
  listItems=[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initListForm();
  }
  
  initListForm() {
    this.listForm = this.formBuilder.group({
      listItemKey: ['', Validators.required],
      listItemArValue: ['', Validators.required],
      listItemEnValue: ['', Validators.required],
    });
  }

  addListItem() {
    if(this.listForm.valid){
      this.listItems.push({
        key: this.listForm.controls['listItemKey'].value,
        enValue: this.listForm.controls['listItemEnValue'].value,
        arValue: this.listForm.controls['listItemArValue'].value,
      })
    }
    this.listForm.reset();
  }

  removeItemList(el){
    const index: number = this.listItems.indexOf(el);
    if (index !== -1) {
        this.listItems.splice(index, 1);
    }      
    console.log(this.listItems);
    
  }

}
