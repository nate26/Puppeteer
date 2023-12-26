import { Injectable, Signal, computed, signal } from '@angular/core';
import { mansionRooms } from '../../gameData/mansionRooms';
import { WallInteraction } from './models/interaction.model';
import { IAbstractInteraction, IInteraction } from '../../interfaces/iinteraction.interface';

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
                idx / width < 1 ?
                    new WallInteraction() :
                    interactions.find(inter => (inter.yPos * width + inter.xPos) === idx));
    })

    constructor() { }
}
