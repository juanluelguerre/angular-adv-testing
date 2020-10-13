import { EventEmitter } from '@angular/core';

export class Player2 {

    hp: number;
    hpChanged: EventEmitter<number>;

    constructor() {
        this.hp = 100;
        this.hpChanged = new EventEmitter<number>();
    }

    getHurt( hurt: number ) {
        if ( hurt >= this.hp ){
            this.hp = 0;
        }else {
            this.hp = this.hp - hurt;
        }

        this.hpChanged.emit( this.hp);
    }
}
