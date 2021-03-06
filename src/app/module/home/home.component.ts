import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { Router } from '@angular/router';
import {  Product } from 'src/app/model/model';
import { MessageService } from 'src/app/service/message-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  productList: Product[];
  laptopList: Product[];
  spinner = false;

  constructor(
    public api: Service,
    private url: UrlConfig,
    private router: Router,
    private messageService: MessageService
    ) { }


  /* Navigate to group Page */
  public navigateGroupPage(arg: string, data: Product): void {
    this.router.navigate(['/list/' + arg + '/details/' + data.id]);
  }

  /* On init call logged user and list of the group  */
  ngOnInit() {
    const cartItems = JSON.parse(sessionStorage.getItem('cart'));
    if (cartItems) {
      this.messageService.sendMessage({cart: cartItems});
    }
  }

}
