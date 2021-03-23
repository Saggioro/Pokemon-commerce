import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateWeakness1616448906562 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'weakness',
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
                        name: 'WeaknessType',
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
        await queryRunner.dropTable('weakness');
    }
}
