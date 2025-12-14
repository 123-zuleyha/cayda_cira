package handlers

import (
	"organik_urun_sitesi/internal/dto"
	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/services"

	"github.com/gofiber/fiber/v2"
)

// GetProducts godoc
// @Summary      Product list
// @Description  Public product listing with pagination, search and category filter
// @Tags         Products
// @Accept       json
// @Produce      json
// @Param        search    query     string  false  "Search by name"
// @Param        category  query     string  false  "Category ID"
// @Param        page      query     int     false  "Page number"
// @Param        limit     query     int     false  "Items per page"
// @Success      200  {object}  dto.ProductListResponse
// @Failure      500  {object}  map[string]string
// @Router       /products [get]
func GetProducts(c *fiber.Ctx) error {
	search := c.Query("search")
	category := c.Query("category")

	page := c.QueryInt("page", 1)
	limit := c.QueryInt("limit", 12)

	result, err := services.GetProducts(search, category, page, limit)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(result)
}

// GetProductDetail godoc
// @Summary      Ürün detayı
// @Description  ID ile ürün detayını getirir
// @Tags         Products
// @Produce      json
// @Param        id   path   string  true  "Ürün ID"
// @Success      200  {object}  models.Product
// @Failure      404  {object}  map[string]string
// @Router       /products/{id} [get]
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

// CreateProduct godoc
// @Summary      Ürün oluştur (Admin)
// @Tags         Admin Products
// @Accept       json
// @Produce      json
// @Param        product  body      models.Product  true  "Ürün"
// @Success      201  {object}  models.Product
// @Failure      400  {object}  map[string]string
// @Security     BearerAuth
// @Router       /admin/products [post]
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

// DeleteProduct godoc
// @Summary      Ürün sil (Admin)
// @Tags         Admin Products
// @Param        id   path   string  true  "Ürün ID"
// @Success      204
// @Security     BearerAuth
// @Router       /admin/products/{id} [delete]
func DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")

	if err := services.DeleteProduct(id); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.SendStatus(fiber.StatusNoContent)
}

// swagger type reference (DO NOT REMOVE)
var _ dto.ProductListResponse
