import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1686615089824 implements MigrationInterface {
    name = 'CreateUsers1686615089824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_type_enum" AS ENUM('Vendedor', 'Cliente')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(13) NOT NULL, "birthDate" date NOT NULL, "description" text, "password" character varying(127) NOT NULL, "type" "public"."users_type_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_type_enum"`);
    }

}
