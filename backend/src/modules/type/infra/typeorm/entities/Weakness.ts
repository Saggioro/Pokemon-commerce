import { Entity, PrimaryColumn, Column, BaseEntity } from 'typeorm';

@Entity('weakness')
class Weakness extends BaseEntity {
    @PrimaryColumn()
    type_id: string;

    @Column()
    name: string;
}

export default Weakness;
