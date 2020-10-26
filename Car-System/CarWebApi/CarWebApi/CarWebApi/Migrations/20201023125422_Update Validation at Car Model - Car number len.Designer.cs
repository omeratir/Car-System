﻿// <auto-generated />
using System;
using CarWebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CarWebApi.Migrations
{
    [DbContext(typeof(CarSystemDBContext))]
    [Migration("20201023125422_Update Validation at Car Model - Car number len")]
    partial class UpdateValidationatCarModelCarnumberlen
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CarWebApi.Models.Car", b =>
                {
                    b.Property<int>("car_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("carType_Id")
                        .HasColumnType("int");

                    b.Property<int?>("carType_Id1")
                        .HasColumnType("int");

                    b.Property<bool>("car_4X4")
                        .HasColumnType("bit");

                    b.Property<DateTime>("car_CareDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("car_EngineCapacity")
                        .HasColumnType("int");

                    b.Property<string>("car_Number")
                        .IsRequired()
                        .HasColumnType("nvarchar(8)")
                        .HasMaxLength(8);

                    b.Property<string>("car_Remarks")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("car_UpdateDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("car_YearProduction")
                        .HasColumnType("int");

                    b.Property<int>("employee_Id")
                        .HasColumnType("int");

                    b.HasKey("car_Id");

                    b.HasIndex("carType_Id1");

                    b.ToTable("CarDB");
                });

            modelBuilder.Entity("CarWebApi.Models.CarType", b =>
                {
                    b.Property<int>("carType_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("carType_Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("carType_Id");

                    b.ToTable("CarTypeDB");
                });

            modelBuilder.Entity("CarWebApi.Models.Employee", b =>
                {
                    b.Property<int>("employee_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("employee_FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("employee_LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("employee_Id");

                    b.ToTable("EmployeeDB");
                });

            modelBuilder.Entity("CarWebApi.Models.Car", b =>
                {
                    b.HasOne("CarWebApi.Models.CarType", "carType")
                        .WithMany()
                        .HasForeignKey("carType_Id1");
                });
#pragma warning restore 612, 618
        }
    }
}
