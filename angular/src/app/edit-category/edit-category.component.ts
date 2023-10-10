import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
  categoryName : string =""
  categoryId : string =""
  data : any={}

  constructor(private httpClient : HttpClient,private ar: ActivatedRoute, private toastr : ToastrService,private router : Router){
  this.categoryId = this.ar.snapshot.params["categoryId"]
  this.httpClient.get("http://donation-api-5bc4.onrender.com/admin/category/"+this.categoryId).subscribe(resp=>{
    this.data = resp
    if(this.data.rcode == -9){
      this.toastr.error("","Please TAG!!!",{timeOut:3000})
      this.router.navigateByUrl("/users")

    }else{ 
    
        this.categoryName = this.data.data.categoryName
    }
  })
  }

}
