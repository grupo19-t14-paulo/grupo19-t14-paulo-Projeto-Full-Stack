import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateLengthImage1687477909726 implements MigrationInterface {
    name = 'UpdateLengthImage1687477909726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "image" character varying(1500) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" numeric(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying(500) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "images" ADD "image" character varying(255) NOT NULL`);
    }

}
