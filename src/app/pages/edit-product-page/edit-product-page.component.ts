import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteService } from 'src/app/services/remote/remote.service';
import { Product } from 'src/app/classes/product';

declare var $: any;

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.css']
})
export class EditProductPageComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router, private remote : RemoteService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.remote.findProduct(Number(id))
    .then(res => {
      this.product = res;
    })
    .catch(err => {
      $(".alert").show();
    });    
  }

  submitAction(){
    this.remote.updateProduct(this.product)
    .then(res => {
      alert("Atualizado com sucesso");
    })
    .catch(err => {
      $(".alert").show();
    });  
  }

  getFiles(files) {
    return Promise.all(files.map(file => this.getFile(file)));
  }

  onChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        //console.log( reader.result.split(',')[1]);
      };
    }
  }

  getFile(file){
    
  }

}
