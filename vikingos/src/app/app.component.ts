import { Component } from '@angular/core';
import { StockComponent } from './stock/stock.component';
import { StockService } from './stock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StockService]
})
export class AppComponent {
  title = 'app works!';
}
