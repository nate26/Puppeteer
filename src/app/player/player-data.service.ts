import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IItem } from '../interfaces/iitem.interface';
import { MansionDataService } from '../view/mansion/mansion-data.service';
import { filter, interval, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    private readonly PLAYER_HEIGHT_PADDING = '29.49px';

    readonly xPos = signal(4);
    readonly xPosRel = computed(() => 'calc(' + this.mansionDataService.tileDimensionsCalc() + ' * ' + this.xPos() + ')');
    readonly yPos = signal(10);
    readonly yPosRel = computed(() => 'calc((' + this.mansionDataService.tileDimensionsCalc() + ' * ' + this.yPos() + ' - '
        + this.PLAYER_HEIGHT_PADDING + ')');

    // -1 left, 0 still, 1 right
    readonly move = signal(0);
    readonly movingTicker = toSignal(interval(30).pipe(
        map(() => ({
            step: this.move(),
            final: this.move() < 0 ? -1 : this.move() > 0 ? 1 : 0
        })),
        filter(move => move.step !== 0),
        // collision check
        filter(move => !this.mansionDataService.roomTiles()[this.location() + move.final]?.obstruction),
        // trigger x change
        tap(move => {
            this.xPos.set(this.xPos() + move.step);
        })
    ));

    readonly location = computed(() => this.xPos() + this.yPos() * this.mansionDataService.currentRoom().width);

    readonly items: WritableSignal<IItem[]> = signal([
        { name: 'Hammer', imageUrl: '' },
        { name: 'Flashlight', imageUrl: '' },
        { name: 'Extendable Ladder', imageUrl: '' }
    ]);

    constructor(private mansionDataService: MansionDataService) { }
}
