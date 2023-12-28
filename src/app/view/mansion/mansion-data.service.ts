import { Injectable, Signal, computed, signal } from '@angular/core';
import { mansionRooms } from '../../gameData/mansionRooms';
import { WallInteraction } from './models/interaction.model';
import { IAbstractInteraction, IInteraction } from '../../interfaces/iinteractions.interface';

@Injectable({
    providedIn: 'root'
})
export class MansionDataService {

    readonly mansionRooms = mansionRooms;
    readonly currentRoomId = signal(0);
    readonly currentRoom = computed(() => this.mansionRooms[this.currentRoomId()]);
    readonly roomTiles: Signal<(IAbstractInteraction | undefined)[]> = computed(() => {
        const width = this.currentRoom().width;
        const height = this.currentRoom().height;
        const interactions = this.currentRoom().interactions;
        return new Array(width * height)
            .fill(undefined)
            .map((_val, idx) =>
                idx / width < 1 || // top row wall
                    idx % width === 0 || // left column wall
                    (idx + 1) % width === 0 || // right column wall
                    ((width * (height - 1) - 1) / idx) < 1 ?
                    new WallInteraction() :
                    interactions.find(inter => (inter.yPos * width + inter.xPos) === idx));
    });

    readonly tileDimensions = computed(() => 'calc(' + this.tileDimensionsCalc() + ')');
    readonly tileDimensionsCalc = computed(() => '(69vw - 15px) / ' + this.currentRoom().width);

    constructor() { }
}
