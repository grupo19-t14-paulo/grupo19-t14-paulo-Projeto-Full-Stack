import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1687010718003 implements MigrationInterface {
    name = 'InitialMigration1687010718003'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying(255) NOT NULL, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(13) NOT NULL, "birthDate" date NOT NULL, "description" text, "password" character varying(127) NOT NULL, "street" character varying(127) NOT NULL, "number" character varying(20) NOT NULL, "complement" character varying(50), "city" character varying(127) NOT NULL, "state" character varying(127) NOT NULL, "cep" character varying(8) NOT NULL, "type" "public"."users_type_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(127) NOT NULL, "model" character varying(127) NOT NULL, "year" character varying(4) NOT NULL, "fuel" "public"."adverts_fuel_enum" NOT NULL DEFAULT 'Gasolina / Etanol', "mileage" character varying(10) NOT NULL, "color" character varying(50) NOT NULL, "value" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "description" text NOT NULL, "active" boolean NOT NULL DEFAULT true, "userId" uuid, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
