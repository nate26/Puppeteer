import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { BagComponent } from './bag/bag.component';
import { MansionDataService } from './view/mansion/mansion-data.service';
import { PlayerDataService } from './player/player-data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ViewComponent, BagComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'PuppetMaster';
    current = inject(MansionDataService).currentRoomId;
}
