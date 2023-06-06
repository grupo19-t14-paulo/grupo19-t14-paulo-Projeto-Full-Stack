import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Adverts from "./adverts.entity";

@Entity("images")
class Images {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 255 })
  image: string;

  @ManyToOne(() => Adverts, (announcement) => announcement.images, {
    onDelete: "CASCADE",
  })
  announcement: Adverts;
}

export default Images;
