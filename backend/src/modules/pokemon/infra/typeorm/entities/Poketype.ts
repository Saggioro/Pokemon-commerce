import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity('poketype')
class Poketype extends BaseEntity {
    @PrimaryColumn()
    pokemon_id: string;

    @Column()
    type_id: string;
}

export default Poketype;
