package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"

	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/utils"
	"organik_urun_sitesi/router"
)

func main() {
	// Load env
	config.LoadEnv()

	// DB connect
	config.ConnectDB()

	// 🔧 MIGRATIONS (ÇOK ÖNEMLİ)
	config.DB.AutoMigrate(
		&models.Admin{},
		&models.Category{},
		&models.Product{},
	)

	// 👤 Create default admin (LOCAL DEV)
	passwordHash, _ := utils.HashPassword("admin123")

	admin := models.Admin{
		ID:           uuid.New(),
		Email:        "admin@site.com",
		PasswordHash: passwordHash,
	}

	config.DB.FirstOrCreate(&admin, models.Admin{Email: "admin@site.com"})

	// ☁️ Cloudinary
	config.ConnectCloudinary()

	// 🚀 Fiber app
	app := fiber.New()

	// 📌 Routes
	router.SetupRoutes(app)

	log.Println("Backend running on :8080")
	log.Fatal(app.Listen(":8080"))
}
