import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
} from "typeorm";
import Images from "./images.entity";
import { User } from "./users.entity";

export enum FuelCar {
    ONE = "Gasolina / Etanol",
    TWO = "Híbrido",
    Three = "Elétrico",
}

@Entity("adverts")
class Adverts {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 127 })
    brand: string;

    @Column({ length: 127 })
    model: string;

    @Column({ length: 4 })
    year: string;

    @Column({
        type: "enum",
        enum: FuelCar,
        default: FuelCar.ONE,
    })
    fuel: FuelCar;

    @Column({ length: 10 })
    mileage: string;

    @Column({ length: 50 })
    color: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    value: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    price: number;

    @Column({ type: "text" })
    description: string;

    @Column({ default: true })
    active: boolean;

    @ManyToOne(() => User, (user) => user.adverts, { onDelete: "CASCADE" })
    user: User;

    @OneToMany(() => Images, (images) => images.announcement, {
        nullable: true,
        cascade: true,
    })
    images: Images[];
}

export default Adverts;
