import { Component } from '@angular/core';
import { faCoffee ,faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { ImageConstants } from 'src/app/constants/image-constants';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  faSearch = faSearch;
  faCartShopping = faCartShopping;
  protected readonly ImageConstants  = ImageConstants ;
}
