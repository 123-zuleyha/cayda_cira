package router

import (
	"organik_urun_sitesi/internal/handlers"
	"organik_urun_sitesi/internal/middleware"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")

	// Health check
	api.Get("/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{"status": "ok"})
	})

	// --------------------
	// Public routes
	// --------------------
	api.Get("/categories", handlers.GetCategories)
	api.Get("/products", handlers.GetProducts)
	api.Get("/products/:id", handlers.GetProductDetail)

	// --------------------
	// Admin routes (JWT protected)
	// --------------------
	admin := api.Group("/admin")
	admin.Use(middleware.AuthMiddleware())
	{
		// Category
		admin.Post("/categories", handlers.CreateCategory)

		// Product
		admin.Post("/products", handlers.CreateProduct)
		admin.Delete("/products/:id", handlers.DeleteProduct)
	}
}
