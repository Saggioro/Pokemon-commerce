import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('pokemons')
class Pokemon extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    strongness: Array<string>;

    @Column()
    weakness: string;
}

export default Pokemon;
