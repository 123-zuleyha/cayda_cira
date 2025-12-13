package handlers

import (
	"github.com/gofiber/fiber/v2"

	"organik_urun_sitesi/internal/services"
	"organik_urun_sitesi/internal/utils"
)

type AdminLoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func AdminLogin(c *fiber.Ctx) error {
	var req AdminLoginRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Geçersiz istek",
		})
	}

	admin, err := services.AuthenticateAdmin(req.Email, req.Password)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// ⚠️ UUID → string
	token, err := utils.GenerateJWT(admin.ID.String(), admin.Email)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Token üretilemedi",
		})
	}

	return c.JSON(fiber.Map{
		"token": token,
	})
}
