using Microsoft.EntityFrameworkCore.Migrations;

namespace CarWebApi.Migrations
{
    public partial class CarModeladdcartypeproperty : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "carType_Id1",
                table: "CarDB",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarDB_carType_Id1",
                table: "CarDB",
                column: "carType_Id1");

            migrationBuilder.AddForeignKey(
                name: "FK_CarDB_CarTypeDB_carType_Id1",
                table: "CarDB",
                column: "carType_Id1",
                principalTable: "CarTypeDB",
                principalColumn: "carType_Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarDB_CarTypeDB_carType_Id1",
                table: "CarDB");

            migrationBuilder.DropIndex(
                name: "IX_CarDB_carType_Id1",
                table: "CarDB");

            migrationBuilder.DropColumn(
                name: "carType_Id1",
                table: "CarDB");
        }
    }
}
