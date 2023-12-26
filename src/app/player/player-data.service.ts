import { Injectable, WritableSignal, signal } from '@angular/core';
import { IItem } from '../interfaces/iitem.interface';

@Injectable({
    providedIn: 'root'
})
export class PlayerDataService {

    readonly items: WritableSignal<IItem[]> = signal([
        { name: 'Hammer', imageUrl: '' },
        { name: 'Flashlight', imageUrl: '' },
        { name: 'Extendable Ladder', imageUrl: '' }
    ])

    constructor() { }
}
