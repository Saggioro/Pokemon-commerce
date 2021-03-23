import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStrongness1616448965316
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'strongness',
                columns: [
                    {
                        name: 'id_type',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'StrongnessType',
                        referencedTableName: 'types',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_type'],
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('strongness');
    }
}
