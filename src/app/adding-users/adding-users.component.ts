import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user.model';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adding-users',
  templateUrl: './adding-users.component.html',
  styleUrls: ['./adding-users.component.scss']
})
export class AddingUsersComponent implements OnInit {
  // user
 userLogin:string ;
 userPassword:string ;
 userEmail:string ;
 users : Array<IUser> = []
 hide:boolean;
 show: boolean =  false;
 
  // user
  constructor() { }

  ngOnInit(): void {
  }
 
  addUser() {
    const newUser : IUser =  new User( this.userLogin , this.userPassword ,this.userEmail)
    // this.users.push(newUser)
    //  this.render(newUser)
    // this.users.push(newUser)
    this.userLogin = '' ;
    this.userPassword = '' ;
    this.userEmail = '' ;
    // return `users:${this.users}`
    // this.render(users)
    this.render(newUser)
  }
  render(newUser: IUser ) {
         this.users.push(newUser)
  }
  deleteUser(i:number){
  this.users.splice(i, 1)
  }
  editUser(i:number) {
   console.log(i)
    this.userLogin = this.users[i].Login ;
    this.userPassword =  this.users[i].Password ;
    this.userEmail =  this.users[i].Email ;
 this.hide = true ;
 
    // return `users:${this.users}`
   
  }
 
  saveEditUser(){
    // this.users = newUser
   
  }
  


  
 

// click event function toggle
 
}
