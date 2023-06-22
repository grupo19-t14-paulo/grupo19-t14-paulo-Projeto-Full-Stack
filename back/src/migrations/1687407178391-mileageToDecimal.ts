import { MigrationInterface, QueryRunner } from "typeorm";

export class MileageToDecimal1687407178391 implements MigrationInterface {
    name = 'MileageToDecimal1687407178391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" numeric(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" character varying(10) NOT NULL`);
    }

}
