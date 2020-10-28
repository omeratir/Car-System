using Microsoft.EntityFrameworkCore.Migrations;

namespace CarWebApi.Migrations
{
    public partial class newpropery : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "remarks",
                table: "CarDB",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "remarks",
                table: "CarDB");
        }
    }
}
