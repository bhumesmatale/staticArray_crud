import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addform = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })

  listarra: any = [];
  arralist: any = [];
  alert: boolean = false;
  f: any;
  value: any;
  isShow: boolean = false;
  get firstName() { return this.addform.get('firstName') }
  get lastName() { return this.addform.get('lastName') }
  get phone() { return this.addform.get('phone') }
  constructor(private contactservice: ContactService) { }

  ngOnInit(): void {
  }
  list() {
    this.arralist = this.contactservice.phonefun();
    console.log(this.arralist);
  }
  closeAlert() {
    this.alert = false
  }
  add() {
    this.contactservice.addphone(this.addform.value);//insert data
    this.addform.reset({})
  }
  deletecontact(i) {
    console.log(i)
    this.arralist.splice(0, 1);
  }

  RowSelected(data) {
    this.addform.controls['id'].setValue(data.id);
    this.addform.controls['firstName'].setValue(data.firstName);
    this.addform.controls['lastName'].setValue(data.lastName);
    this.addform.controls['phone'].setValue(data.phone);
  }

  toggleShow() {
    this.isShow = !this.isShow;
  }
  update() {
    debugger
    const obj = this.addform.value;
    console.log(obj.id);
    var newobj = 0;
    for (var i = 0; i < this.arralist.length; i++) {
      newobj = obj.id;
      if (this.arralist[i].id == newobj) {
        this.arralist[i].id = obj.id,
          this.arralist[i].firstName = obj.firstName,
          this.arralist[i].lastName = obj.lastName,
          this.arralist[i].phone = obj.phone
        this.arralist.pop();
      }
    }
  }
}