import { MigrationInterface, QueryRunner } from "typeorm";

export class AddYearTableAdverts1686163406600 implements MigrationInterface {
    name = 'AddYearTableAdverts1686163406600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" ADD "year" character varying(4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "year"`);
    }

}
