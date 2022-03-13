import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGenres1647194706471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "genres",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true   
                    },
                    {
                        name: "name",
                        type: "varchar",
                    }
                ],
            })
        )

        await queryRunner.createTable(new Table({
            name: "games_genres_genres",
            columns: [
                {
                    name: "gamesId",
                    type: "uuid"
                },
                {
                    name: "genresId",
                    type: "uuid"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("genres");
    }

}
