import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddressToUser1686867175578 implements MigrationInterface {
    name = 'AddAddressToUser1686867175578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "street" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "complement" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "state" character varying(127) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cep" character varying(8) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "complement"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "street"`);
    }

}
