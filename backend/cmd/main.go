package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"

	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/handlers"
	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/services"
	"organik_urun_sitesi/internal/utils"
	"organik_urun_sitesi/router"
)

func main() {
	// Load environment variables
	config.LoadEnv()

	// Connect DB
	config.ConnectDB()

	// Admin table migrate
	config.DB.AutoMigrate(&models.Admin{})

	// Create default admin (ONLY FOR LOCAL DEV)
	passwordHash, _ := utils.HashPassword("admin123")

	admin := models.Admin{
		ID:           uuid.New(),
		Email:        "admin@site.com",
		PasswordHash: passwordHash,
	}

	// Eğer admin varsa tekrar oluşturmaz
	config.DB.FirstOrCreate(&admin, models.Admin{Email: "admin@site.com"})

	// Connect Cloudinary
	config.ConnectCloudinary()

	// Fiber instance
	app := fiber.New()

	// Auth Handler
	authHandler := handlers.AuthHandler{
		Service: &services.AdminService{DB: config.DB},
	}

	// Auth Routes
	auth := app.Group("/auth")
	auth.Post("/login", authHandler.Login)

	// Other routes
	router.SetupRoutes(app)

	log.Println("Backend running on :8080")
	log.Fatal(app.Listen(":8080"))
}
