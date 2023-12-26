import { Component } from '@angular/core';
import { MansionComponent } from './mansion/mansion.component';

@Component({
    selector: 'app-view',
    standalone: true,
    imports: [MansionComponent],
    templateUrl: './view.component.html',
    styleUrl: './view.component.css'
})
export class ViewComponent {

}
