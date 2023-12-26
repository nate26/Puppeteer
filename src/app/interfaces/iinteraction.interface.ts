import { Key } from '../enum/key.enum';

export interface IAbstractInteraction {
    imageUrl?: string;
    interactKey?: Key;
    obstruction?: boolean;
    action?: () => void;
}

export interface IInteraction extends IAbstractInteraction {
    imageUrl: string;
    xPos: number;
    yPos: number;
    interactKey: Key;
    obstruction?: boolean;
    action: () => void;
}