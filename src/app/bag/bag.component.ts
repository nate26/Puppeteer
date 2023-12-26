import { Component, computed } from '@angular/core';
import { PlayerDataService } from '../player/player-data.service';

@Component({
    selector: 'app-bag',
    standalone: true,
    imports: [],
    templateUrl: './bag.component.html',
    styleUrl: './bag.component.css'
})
export class BagComponent {

    items = computed(() => this.playerDataService.items().concat(new Array(6).fill(null)).splice(0, 6));

    constructor(private playerDataService: PlayerDataService) { }
}
