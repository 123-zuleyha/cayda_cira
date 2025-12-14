package handlers

import (
	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/services"

	"github.com/gofiber/fiber/v2"
)

func GetCategories(c *fiber.Ctx) error {
	categories, err := services.GetCategories()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).
			JSON(fiber.Map{"error": err.Error()})
	}

	return c.JSON(categories)
}

func CreateCategory(c *fiber.Ctx) error {
	var category models.Category

	if err := c.BodyParser(&category); err != nil {
		return c.Status(fiber.StatusBadRequest).
			JSON(fiber.Map{"error": err.Error()})
	}

	if err := services.CreateCategory(&category); err != nil {
		return c.Status(fiber.StatusInternalServerError).
			JSON(fiber.Map{"error": err.Error()})
	}

	return c.Status(fiber.StatusCreated).JSON(category)
}
func GetCategoryProducts(c *fiber.Ctx) error {
	categoryID := c.Params("id")

	page := c.QueryInt("page", 1)
	limit := c.QueryInt("limit", 12)

	result, err := services.GetProductsByCategory(categoryID, page, limit)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(result)
}
