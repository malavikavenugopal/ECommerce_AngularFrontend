import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor (private api:ApiService) {}
  allProducts:any =[]

  ngOnInit(): void {
    
this.api.getAllProductsApi().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.allProducts = res
    console.log(this.allProducts);
  },
  error:(err:any)=>{
    console.log(err);
  }
})
  }

  addtoWishlist(product:any){

    if(localStorage.getItem("token")){
      alert("Proceed")
    }
    else{
      alert("Please Login to Continue")
    }
  }
  addtoCart(product:any){
    if(localStorage.getItem("token")){
      alert("Proceed")
    }
    else{
      alert("Please Login to Continue")
    }
  }
}
