import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  email : string = ""
  password : string = ""
  data : any ={}
  
  constructor(private toastr : ToastrService, private httpClient : HttpClient, private router : Router,private userService: UserService)
  {
  }

  login()
  {
    
    let data = {
      "email":this.email,
      "password":this.password
    }

    this.httpClient.post("https://donation-api-5bc4.onrender.com/public/login",data).subscribe(resp=>{
     this.data = resp  
    if(this.data.rcode== -9){
      this.toastr.error(this.data.msg,"",{timeOut:3000})
    }else if(this.data.rcode == 200){
      this.toastr.success("Login done","",{timeOut:3000})
      console.log("Data->",this.data)
      if (this.data.data.role == 'admin') {
        console.log("admin")
        this.router.navigateByUrl("/home_admin")
      }
      else if (this.data.data.role == 'user')
      {
        console.log("user")
      }
      else
      {
        console.log("other")
      }
    }
    },err=>{

    })
  }

}
