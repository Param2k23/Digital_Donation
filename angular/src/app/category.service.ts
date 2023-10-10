import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  addCategory()
  {
    
  }

  deleteCategory(categoryId:string)
  {
    return this.httpClient.delete("https://donation-api-5bc4.onrender.com/admin/category/"+categoryId)
  }

  getAllCategory()
  {
    return this.httpClient.get("https://donation-api-5bc4.onrender.com/admin/listcategory")
  }
}
