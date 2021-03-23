import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity('image')
class Image extends BaseEntity {
    @PrimaryColumn()
    pokemon_id: string;

    @Column()
    official: string;

    @Column()
    front: string;

    @Column()
    back: string;
}

export default Image;
