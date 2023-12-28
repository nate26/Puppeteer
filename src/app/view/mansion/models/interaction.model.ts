import { IAbstractInteraction } from '../../../interfaces/iinteractions.interface';

export class WallInteraction implements IAbstractInteraction {
    obstruction = true;
    imageUrl = '../../../assets/img/wall.png';
}