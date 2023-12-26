import { IAbstractInteraction } from '../../../interfaces/iinteraction.interface';

export class WallInteraction implements IAbstractInteraction {
    obstruction = true;
    imageUrl = '../../../assets/img/wall.png';
}