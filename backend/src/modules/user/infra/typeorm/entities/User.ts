import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
} from 'typeorm';
import { ID, Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('users')
class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    lastName: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column()
    password: string;

    @Field(() => Date)
    @Column()
    birth: Date;

    @Field(() => Date)
    @CreateDateColumn()
    created_at: Date;

    @Field(() => Date)
    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
