import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-paramter',
  templateUrl: './list-paramter.component.html',
  styleUrls: ['./list-paramter.component.scss']
})
export class ListParamterComponent implements OnInit {

  @Output() onAddListItem = new EventEmitter<any>();
  listForm: FormGroup;
  submitted =false;
  listItems=[];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initListForm();
  }
  
  initListForm() {
    this.listForm = this.formBuilder.group({
      listItemKey: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      listItemArValue: ['', [Validators.required, Validators.pattern(/[\u0621-\u064A]+/)]],
      listItemEnValue: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    });
  }

  get f() { return this.listForm.controls; }

  addListItem() {
    this.submitted = true;
    if(this.listForm.valid){
      this.listItems.push({
        key: this.listForm.controls['listItemKey'].value,
        enValue: this.listForm.controls['listItemEnValue'].value,
        arValue: this.listForm.controls['listItemArValue'].value,
      })
    }else return
    this.listForm.reset();
    this.onAddListItem.emit(this.listItems);
  }

  removeItemList(el){
    const index: number = this.listItems.indexOf(el);
    if (index !== -1) {
        this.listItems.splice(index, 1);
    }      
    console.log(this.listItems);
    this.onAddListItem.emit(this.listItems);
  }

}
