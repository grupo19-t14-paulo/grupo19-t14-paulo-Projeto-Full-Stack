import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1686075874976 implements MigrationInterface {
    name = 'CreateTables1686075874976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."adverts_fuel_enum" AS ENUM('Gasolina / Etanol', 'Híbrido', 'Elétrico')`);
        await queryRunner.query(`CREATE TABLE "adverts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying(127) NOT NULL, "model" character varying(127) NOT NULL, "fuel" "public"."adverts_fuel_enum" NOT NULL DEFAULT 'Gasolina / Etanol', "mileage" character varying(10) NOT NULL, "color" character varying(50) NOT NULL, "value" numeric(10,2) NOT NULL, "price" numeric(10,2) NOT NULL, "description" text NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying(255) NOT NULL, "announcementId" uuid, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
        await queryRunner.query(`DROP TYPE "public"."adverts_fuel_enum"`);
    }

}
