import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity('strongness')
class Strongness extends BaseEntity {
    @PrimaryColumn()
    type_id: string;

    @Column()
    name: string;
}

export default Strongness;
