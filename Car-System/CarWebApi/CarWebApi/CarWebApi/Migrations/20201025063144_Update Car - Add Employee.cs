using Microsoft.EntityFrameworkCore.Migrations;

namespace CarWebApi.Migrations
{
    public partial class UpdateCarAddEmployee : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "employee_Id1",
                table: "CarDB",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CarDB_employee_Id1",
                table: "CarDB",
                column: "employee_Id1");

            migrationBuilder.AddForeignKey(
                name: "FK_CarDB_EmployeeDB_employee_Id1",
                table: "CarDB",
                column: "employee_Id1",
                principalTable: "EmployeeDB",
                principalColumn: "employee_Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CarDB_EmployeeDB_employee_Id1",
                table: "CarDB");

            migrationBuilder.DropIndex(
                name: "IX_CarDB_employee_Id1",
                table: "CarDB");

            migrationBuilder.DropColumn(
                name: "employee_Id1",
                table: "CarDB");
        }
    }
}
