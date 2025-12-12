package handlers

import (
	"organik_urun_sitesi/internal/services"

	"github.com/gofiber/fiber/v2"
)

type AuthHandler struct {
	Service *services.AdminService
}

type LoginRequest struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func (h *AuthHandler) Login(c *fiber.Ctx) error {
	var req LoginRequest

	// JSON parse
	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Geçersiz istek",
		})
	}

	// Admin login
	token, err := h.Service.Login(req.Email, req.Password)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	// Token döndür
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"token": token,
	})
}
