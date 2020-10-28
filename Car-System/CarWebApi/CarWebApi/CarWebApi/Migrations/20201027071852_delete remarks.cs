using Microsoft.EntityFrameworkCore.Migrations;

namespace CarWebApi.Migrations
{
    public partial class deleteremarks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "remarks",
                table: "CarDB");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "remarks",
                table: "CarDB",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
