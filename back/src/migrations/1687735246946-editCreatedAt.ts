import { MigrationInterface, QueryRunner } from "typeorm";

export class EditCreatedAt1687735246946 implements MigrationInterface {
    name = 'EditCreatedAt1687735246946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

}
