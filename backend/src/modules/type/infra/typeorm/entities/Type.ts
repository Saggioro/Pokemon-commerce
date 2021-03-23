import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    JoinColumn,
    OneToMany,
} from 'typeorm';
import Strongness from './Strongness';
import Weakness from './Weakness';

@Entity('types')
class Type extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Strongness, strongness => strongness.name, { eager: true })
    @JoinColumn({ name: 'strongness' })
    strongness: Strongness[];

    @OneToMany(() => Weakness, weakness => weakness.name, { eager: true })
    @JoinColumn({ name: 'weakness' })
    weakness: Weakness[];
}

export default Type;
