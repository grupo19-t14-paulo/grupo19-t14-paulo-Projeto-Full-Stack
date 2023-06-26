import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity";
import Adverts from "./adverts.entity";
import moment from "moment-timezone";

@Entity("comments")
class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 2000 })
    comment: string;

    @CreateDateColumn()
    created_at: Date | string;

    @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
    user: User;

    @ManyToOne(() => Adverts, (advert) => advert.comments, {
        onDelete: "CASCADE",
    })
    advert: Adverts;

    @BeforeInsert()
    insertCreated() {
        this.created_at = new Date(
            moment().tz("America/Sao_Paulo").format("YYYY-MM-DD HH:mm:ss")
        );
    }
}

export { Comment };
