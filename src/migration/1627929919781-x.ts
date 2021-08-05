import {MigrationInterface, QueryRunner} from "typeorm";

export class x1627929919781 implements MigrationInterface {
    name = 'x1627929919781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "firstName" nvarchar(255) NOT NULL, "lastName" nvarchar(255) NOT NULL, "age" int NOT NULL, "x" int NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
