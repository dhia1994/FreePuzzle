import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import { ProductModelServer, serverResponse } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  products: any[] = [];
  show: boolean = false;

  dhia: string = "dhia";
  constructor(private productService: ProductService,            
              private router:Router) {
  }

  totalLength: any
  page: number = 1;

 ngOnInit() {
    this.productService.getAllProducts(50).subscribe((prods: serverResponse ) => {
      this.products = prods.products;
      this.totalLength = prods.products.length

      console.log(this.products);
    });
  }
  AddProduct(id: Number) {
    
  }


  selectProduct(id: Number) {
    this.show = true;
    setTimeout(() => {
      this.router.navigate(['/product', id]).then();
    }
      , 1500); 
        }
 
}
