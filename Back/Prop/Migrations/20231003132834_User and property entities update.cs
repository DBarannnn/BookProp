using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Prop.Migrations
{
    /// <inheritdoc />
    public partial class Userandpropertyentitiesupdate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserOwnerId",
                table: "Properties",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Properties_UserOwnerId",
                table: "Properties",
                column: "UserOwnerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Properties_Users_UserOwnerId",
                table: "Properties",
                column: "UserOwnerId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Properties_Users_UserOwnerId",
                table: "Properties");

            migrationBuilder.DropIndex(
                name: "IX_Properties_UserOwnerId",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "UserOwnerId",
                table: "Properties");
        }
    }
}
