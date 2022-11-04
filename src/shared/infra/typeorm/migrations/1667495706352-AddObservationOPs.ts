import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddObservationOPs1667495706352
implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'ops',
      new TableColumn({
        name:'observation',
        type: 'varchar',
        isNullable: true,
      })
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('ops', 'observation')
    }

}
