import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {
  product: any = {}

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      const id = res.id
      console.log(id);

      this.getProduct(id)
    })


  }
  getProduct(id: any) {

    this.api.getProductApi(id).subscribe({
      next: (res: any) => {
        this.product = res[0]
        console.log(this.product);
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }
}
