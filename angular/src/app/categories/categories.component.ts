import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  apiResponse:any = {}
  categories:Array<any>=[]
  categoryName = ""
  data:any = {}
  cId = ""
  visible:boolean=false 
  constructor(private categoryService:CategoryService,private toastr:ToastrService,private router:Router){
    this.getAllCategories()
  }

  getAllCategories()
  {
    this.categoryService.getAllCategory().subscribe(resp=>{
      this.apiResponse = resp
      this.categories = this.apiResponse.data

    },err=>{
      console.log(err)
    })
  }

  deleteCategory(categoryId : string)
  {
    this.categoryService.deleteCategory(categoryId).subscribe(resp=>{
      this.getAllCategories()
      this.toastr.success("","Category Removed",{timeOut:3000})
    })
  }

  editCategory(categoryId : string)
  {
    this.router.navigateByUrl("/editCategory/"+categoryId)
  }
}
