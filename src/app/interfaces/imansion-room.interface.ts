import { IInteraction } from './iinteractions.interface';

export interface IMansionRoom {
    id: number;
    name: string;
    width: number;
    height: number;
    imageUrl: string;
    roomsUp: number[];
    roomsDown: number[];
    roomsLeft: number[];
    roomsRight: number[];
    interactions: IInteraction[];
}