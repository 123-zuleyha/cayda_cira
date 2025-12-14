package router

import (
	"os"

	"github.com/gofiber/fiber/v2"
	fiberSwagger "github.com/swaggo/fiber-swagger"

	_ "organik_urun_sitesi/docs"
	"organik_urun_sitesi/internal/handlers"
	"organik_urun_sitesi/internal/middleware"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	// --------------------
	// Health check
	// --------------------
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok"})
	})

	// --------------------
	// Public routes
	// --------------------
	api.Get("/categories", handlers.GetCategories)
	api.Get("/categories/:id/products", handlers.GetCategoryProducts)
	api.Get("/products", handlers.GetProducts)
	api.Get("/products/:id", handlers.GetProductDetail)

	api.Post("/admin/login", handlers.AdminLogin)

	// --------------------
	// Admin routes (JWT protected)
	// --------------------
	admin := api.Group("/admin")
	admin.Use(middleware.AuthMiddleware())
	{
		admin.Post("/categories", handlers.CreateCategory)
		admin.Post("/products", handlers.CreateProduct)
		admin.Delete("/products/:id", handlers.DeleteProduct)
	}

	// --------------------
	// Swagger (DEV only)
	// --------------------
	if os.Getenv("APP_ENV") != "production" {
		app.Get("/swagger/*", fiberSwagger.WrapHandler)
	}
}
