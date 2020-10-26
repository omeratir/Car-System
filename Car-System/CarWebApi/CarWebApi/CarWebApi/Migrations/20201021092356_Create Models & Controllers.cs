using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CarWebApi.Migrations
{
    public partial class CreateModelsControllers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CarDB",
                columns: table => new
                {
                    car_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    car_Number = table.Column<string>(nullable: false),
                    carType_Id = table.Column<int>(nullable: false),
                    car_4X4 = table.Column<bool>(nullable: false),
                    car_EngineCapacity = table.Column<int>(nullable: false),
                    car_YearProduction = table.Column<int>(nullable: false),
                    car_Remarks = table.Column<string>(nullable: true),
                    employee_Id = table.Column<int>(nullable: false),
                    car_CareDate = table.Column<DateTime>(nullable: false),
                    car_UpdateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarDB", x => x.car_Id);
                });

            migrationBuilder.CreateTable(
                name: "CarTypeDB",
                columns: table => new
                {
                    carType_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    carType_Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarTypeDB", x => x.carType_Id);
                });

            migrationBuilder.CreateTable(
                name: "EmployeeDB",
                columns: table => new
                {
                    employee_Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    employee_FirstName = table.Column<string>(nullable: false),
                    employee_LastName = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeDB", x => x.employee_Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarDB");

            migrationBuilder.DropTable(
                name: "CarTypeDB");

            migrationBuilder.DropTable(
                name: "EmployeeDB");
        }
    }
}
