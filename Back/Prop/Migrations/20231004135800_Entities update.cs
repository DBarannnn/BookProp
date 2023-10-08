using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Prop.Migrations
{
    /// <inheritdoc />
    public partial class Entitiesupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PlacedFor",
                table: "Properties",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlacedFor",
                table: "Properties");
        }
    }
}
