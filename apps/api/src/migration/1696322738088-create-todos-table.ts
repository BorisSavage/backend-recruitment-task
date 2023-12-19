import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTodosTable1696322738088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS todos (
          id BIGSERIAL PRIMARY KEY NOT NULL,
          name TEXT,
          completed BOOLEAN NOT NULL DEFAULT FALSE
        );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      DROP TABLE IF EXISTS todos;
      `);
  }
}
