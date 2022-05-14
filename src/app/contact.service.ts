import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  static firstName: any;
  splice: any;
  getUpdate: any;
  filter(arg0: (t: any) => boolean): ContactService {
    throw new Error('Method not implemented.');
  }
  phone:any=[
    
    {
      "firstName": "Amit",
      "lastName": "Roy",
      "phone": "9876543210",
      "id": 1
    },
    {
      "firstName": "Aakash",
      "lastName": "Choudhury",
      "phone": "9876584431",
      "id": 2
    },
    {
      "firstName": "Arun",
      "lastName": "Dey",
      "phone": "5748493812",
      "id": 3
    },
    {
      "firstName": "Vikash",
      "lastName": "Trivedi",
      "phone": "9873625261",
      "id": 4
    },
    {
      "firstName": "Gaurav",
      "lastName": "Gupta",
      "phone": "8975454586",
      "id": 15
    },
    {
      "firstName": "jivan",
      "lastName": "prajapati",
      "phone": "4563214588",
      "id": 40
    },
    {
      "firstName": "sapana",
      "lastName": "kulkarni",
      "phone": "9765468874",
      "id": 42
    },
    {
      "firstName": "kajal ",
      "lastName": "modak",
      "phone": "9689395698",
      "id": 43
    },
    {
      "firstName": "mahi",
      "lastName": "khotele",
      "phone": "7896541235",
      "id": 45
    },
    {
      "firstName": "nishu",
      "lastName": "matale",
      "phone": "9325874566",
      "id": 47
    }
  ]
  static id: any;
  phonefun(){
    return this.phone
  }
addphone(list:any={}){
  this.phone.push(list);
  console.log(this.phone);
}

  constructor() { }
}
