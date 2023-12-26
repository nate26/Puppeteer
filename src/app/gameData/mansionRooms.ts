import { inject } from '@angular/core';
import { IMansionRoom } from '../interfaces/imansion-room.interface';
import { MansionDataService } from '../view/mansion/mansion-data.service';
import { Key } from '../enum/key.enum';

export const mansionRooms: IMansionRoom[] = [
    {
        id: 0,
        name: 'Foyer',
        width: 20,
        height: 12,
        imageUrl: '',
        roomsUp: [],
        roomsDown: [],
        roomsLeft: [],
        roomsRight: [1],
        interactions: [
            {
                imageUrl: '../../assets/img/door_right.png',
                xPos: 18,
                yPos: 1,
                interactKey: Key.RIGHT,
                action: () => inject(MansionDataService).currentRoomId.set(1)
            }
        ]
    },
    {
        id: 1,
        name: 'Hallway',
        width: 40,
        height: 12,
        imageUrl: '',
        roomsUp: [],
        roomsDown: [],
        roomsLeft: [0],
        roomsRight: [2],
        interactions: [
            {
                imageUrl: '../../assets/img/door_left.png',
                xPos: 1,
                yPos: 1,
                interactKey: Key.LEFT,
                action: () => inject(MansionDataService).currentRoomId.set(0)
            },
            {
                imageUrl: '../../assets/img/door_right.png',
                xPos: 38,
                yPos: 1,
                interactKey: Key.RIGHT,
                action: () => inject(MansionDataService).currentRoomId.set(2)
            }
        ]
    },
    {
        id: 2,
        name: 'Dining Room',
        width: 20,
        height: 12,
        imageUrl: '',
        roomsUp: [3],
        roomsDown: [4],
        roomsLeft: [1],
        roomsRight: [],
        interactions: [
            {
                imageUrl: '../../assets/img/door_left.png',
                xPos: 1,
                yPos: 1,
                interactKey: Key.LEFT,
                action: () => inject(MansionDataService).currentRoomId.set(1)
            },
            {
                imageUrl: '../../assets/img/door_up.png',
                xPos: 8,
                yPos: 1,
                interactKey: Key.UP,
                action: () => inject(MansionDataService).currentRoomId.set(3)
            },
            {
                imageUrl: '../../assets/img/door_down.png',
                xPos: 16,
                yPos: 1,
                interactKey: Key.DOWN,
                action: () => inject(MansionDataService).currentRoomId.set(4)
            }
        ]
    },
    {
        id: 3,
        name: 'Bedroom',
        width: 16,
        height: 12,
        imageUrl: '',
        roomsUp: [],
        roomsDown: [2],
        roomsLeft: [],
        roomsRight: [],
        interactions: [
            {
                imageUrl: '../../assets/img/door_down.png',
                xPos: 8,
                yPos: 1,
                interactKey: Key.DOWN,
                action: () => inject(MansionDataService).currentRoomId.set(2)
            }
        ]
    },
    {
        id: 4,
        name: 'Kitchen',
        width: 20,
        height: 12,
        imageUrl: '',
        roomsUp: [2],
        roomsDown: [],
        roomsLeft: [],
        roomsRight: [],
        interactions: [
            {
                imageUrl: '../../assets/img/door_up.png',
                xPos: 4,
                yPos: 1,
                interactKey: Key.UP,
                action: () => inject(MansionDataService).currentRoomId.set(2)
            }
        ]
    }
]