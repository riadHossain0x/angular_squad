import { Component } from '@angular/core';
import { UserAgeComponent } from '../userage/userage.component';

@Component({
  selector: 'app-usercard',
  standalone: true,
  imports: [UserAgeComponent],
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css'
})
export class UsercardComponent {

}
