import { Component, computed } from '@angular/core';
import { MansionDataService } from './mansion-data.service';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from '../../player/player.component';

@Component({
    selector: 'app-mansion',
    standalone: true,
    imports: [CommonModule, PlayerComponent],
    templateUrl: './mansion.component.html',
    styleUrl: './mansion.component.css'
})
export class MansionComponent {

    readonly currentRoom = this.mansionDataService.currentRoom;

    readonly currentTiles = computed(() => this.mansionDataService.roomTiles());

    readonly tileDimensions = this.mansionDataService.tileDimensions;

    constructor(private mansionDataService: MansionDataService) { }
}
