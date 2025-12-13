package handlers

import (
	"github.com/gofiber/fiber/v2"

	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/services"
)

func GetProducts(c *fiber.Ctx) error {
	search := c.Query("search")
	category := c.Query("category")

	products, err := services.GetProducts(search, category)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(products)
}

func GetProductDetail(c *fiber.Ctx) error {
	id := c.Params("id")

	product, err := services.GetProductByID(id)
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Product not found",
		})
	}

	return c.JSON(product)
}

func CreateProduct(c *fiber.Ctx) error {
	var product models.Product

	if err := c.BodyParser(&product); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	if err := services.CreateProduct(&product); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(product)
}

func DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")

	if err := services.DeleteProduct(id); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.SendStatus(fiber.StatusNoContent)
}
