import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { IItem } from '../interfaces/iitem.interface';
import { MansionDataService } from '../view/mansion/mansion-data.service';
import { debounce, debounceTime, filter, interval, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    // min = 0
    // max = 69vw

    private readonly PLAYER_HEIGHT_PADDING = '29.49px';

    readonly xPos = signal(4);
    readonly xPosRel = computed(() => 'calc(' + this.mansionDataService.tileDimensionsCalc() + ' * ' + this.xPos() + ')');
    readonly yPos = signal(10);
    readonly yPosRel = computed(() => 'calc((' + this.mansionDataService.tileDimensionsCalc() + ' * ' + this.yPos() + ' - '
        + this.PLAYER_HEIGHT_PADDING + ')');

    // -1 left, 0 still, 1 right
    readonly move = signal(0);
    readonly movingX = toSignal(interval(30).pipe(
        map(() => this.move()),
        filter(move => move !== 0),
        tap(move => this.xPos.set(this.xPos() + move))
    ));

    readonly items: WritableSignal<IItem[]> = signal([
        { name: 'Hammer', imageUrl: '' },
        { name: 'Flashlight', imageUrl: '' },
        { name: 'Extendable Ladder', imageUrl: '' }
    ]);

    constructor(private mansionDataService: MansionDataService) { }
}
