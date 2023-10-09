import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
categoryName:string = " "
data:any ={}

constructor(private httpClient:HttpClient,private toastr:ToastrService)
{

}

addCategory()
{
  let data={
    "categoryName" : this.categoryName
  }

  this.httpClient.post("https://donation-api-5bc4.onrender.com/admin/addcategory",data).subscribe(resp=>{
    this.data = resp
    if(this.data.rcode== -9){
      this.toastr.error(this.data.msg,"",{timeOut:3000})
    }else if(this.data.rcode == 200){
      this.toastr.success("Category Added","",{timeOut:3000})
      console.log("Data->",this.data)
  }
},err=>{
  console.log(err)
})
}
}

