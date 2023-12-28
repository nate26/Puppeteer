import { Component, HostListener, Signal, computed } from '@angular/core';
import { Key } from '../enum/key.enum';
import { PlayerDataService } from './player-data.service';
import { CommonModule } from '@angular/common';
import { MansionDataService } from '../view/mansion/mansion-data.service';

@Component({
    selector: 'app-player',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './player.component.html',
    styleUrl: './player.component.css'
})
export class PlayerComponent {

    playerImage: Signal<string> = computed(() => {
        const dir = this.playerDataService.move();
        if (dir < 0) return '../../assets/img/player_left.png';
        else if (dir > 0) return '../../assets/img/player_right.png';
        else return '../../assets/img/player_right.png';
    });

    playerLocation = computed(() => ({
        left: this.playerDataService.xPosRel(),
        top: this.playerDataService.yPosRel(),
        width: this.mansionDataService.tileDimensions()
    }));

    constructor(private playerDataService: PlayerDataService, private mansionDataService: MansionDataService) { }

    @HostListener('document:keydown', ['$event'])
    keyDown(event: KeyboardEvent) {
        switch (event.key) {
            case Key.LEFT:
                this.playerDataService.move.set(-.1);
                break;
            case Key.RIGHT:
                this.playerDataService.move.set(.1);
                break;
        }
    }

    @HostListener('document:keyup', ['$event'])
    keyUp(event: KeyboardEvent) {
        switch (event.key) {
            case Key.LEFT:
            case Key.RIGHT:
                this.playerDataService.move.set(0);
                break;
        }
    }

}
