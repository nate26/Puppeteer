import { Component, computed } from '@angular/core';
import { MansionDataService } from './mansion-data.service';

@Component({
    selector: 'app-mansion',
    standalone: true,
    imports: [],
    templateUrl: './mansion.component.html',
    styleUrl: './mansion.component.css'
})
export class MansionComponent {

    readonly currentRoom = this.mansionDataService.currentRoom;

    readonly currentTiles = computed(() => this.mansionDataService.roomTiles());

    constructor(private mansionDataService: MansionDataService) { }
}
