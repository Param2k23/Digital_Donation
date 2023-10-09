import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http'

const time = new Date();

@Component({
  selector: 'app-signup', 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myForm :FormGroup 

  constructor(private httpClient:HttpClient, private toastr : ToastrService, private router : Router){
    this.myForm  = new FormGroup({
      firstName: new FormControl("",Validators.required),
      lastName: new FormControl("",Validators.required),
      email:new FormControl("",[Validators.required,this.emailValid]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      contactNo: new FormControl("",Validators.required),
      address: new FormControl("",Validators.required),
      pinCode: new FormControl("",Validators.required),
      state: new FormControl("",Validators.required),
      city: new FormControl("",Validators.required),
      profileUrl : new FormControl("",Validators.required),
      role : new FormControl("",Validators.required)
    })
  }
  
  saveUser(){
    let data = {
      "firstName" : this.myForm.value.firstName,
      "lastName" : this.myForm.value.lastName,
      "email" : this.myForm.value.email,
      "password" : this.myForm.value.password,
      "contactNo" : this.myForm.value.contactNo,
      "address" : this.myForm.value.address,
      "pinCode" : this.myForm.value.pincode,
      "state" : this.myForm.value.state,
      "city" : this.myForm.value.city,
      "activeInd" : true,
      "createdAt" : time,
      "profileUrl" : this.myForm.value.profileUrl,
      "role" : this.myForm.value.role
    };
    this.httpClient.post("https://donation-api-5bc4.onrender.com/public/signup",data).subscribe(resp=>{
      console.log(resp);
      
    },error=>{
      console.log(error);
      
    })
    this.toastr.success("Signup Done","",{timeOut:3000})
    this.router.navigateByUrl("/login")
  }
 
  emailValid(control:AbstractControl){ 
    console.log("->"+control.hasError("required"));
    if(control.hasError('required')){ 
      console.log("ignore");
      
      return {
        emailInvalid:false 
      }
    }else{
      if(control.value.endsWith("@gmail.com") && control.value.length > 11) {
        console.log("hit");
        
        return {
          emailInvalid:false
        }
      }else{
        console.log("success");
        
        return {
          emailInvalid:true
        }
      }
    } 
  }
}
