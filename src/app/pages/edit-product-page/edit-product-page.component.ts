import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoteService } from 'src/app/services/remote/remote.service';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.component.html',
  styleUrls: ['./edit-product-page.component.css']
})
export class EditProductPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private remote : RemoteService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
  }

}
