import { MigrationInterface, QueryRunner } from "typeorm";

export class UserReseToken1687269427912 implements MigrationInterface {
    name = 'UserReseToken1687269427912'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`);
    }

}
