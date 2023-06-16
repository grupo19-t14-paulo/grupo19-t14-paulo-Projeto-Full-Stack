import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    OneToMany,
    BeforeInsert,
    BeforeUpdate,
} from "typeorm";
import Adverts from "./adverts.entity";
import { getRounds, hashSync } from "bcryptjs";

export enum UserType {
    SELLER = "Vendedor",
    CLIENT = "Cliente",
}

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 127 })
    name: string;

    @Column({ length: 127, unique: true })
    email: string;

    @Column({ length: 11 })
    cpf: string;

    @Column({ length: 13 })
    phone: string;

    @Column({ type: "date" })
    birthDate: Date | string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ length: 127 })
    password: string;

    @Column({ length: 127 })
    street: string;

    @Column({ length: 20 })
    number: string;

    @Column({ length: 50, nullable: true })
    complement: string;

    @Column({ length: 127 })
    city: string;

    @Column({ length: 127 })
    state: string;

    @Column({ length: 8 })
    cep: string;

    @Column({
        type: "enum",
        enum: UserType,
    })
    type: UserType;

    @OneToMany(() => Adverts, (advert) => advert.user)
    adverts: Adverts[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);
        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}

export { User };
