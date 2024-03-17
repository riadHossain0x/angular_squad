import { Component } from "@angular/core";
import { UsercardComponent } from "../usercard/usercard.component";
import { UserAgeComponent } from "../userage/userage.component";

@Component({
    selector: 'app-userprofile',
    standalone: true,
    imports: [UsercardComponent, UserAgeComponent],
    templateUrl: './userprofile.component.html',
    styles: []
})
export class UserProfile{

}