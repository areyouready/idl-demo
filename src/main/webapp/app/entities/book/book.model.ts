import { BaseEntity } from './../../shared';

export class Book implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public releaseDate?: any,
        public author?: BaseEntity,
    ) {
    }
}
