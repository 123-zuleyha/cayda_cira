package services

import (
	"errors"
	"organik_urun_sitesi/internal/models"
	"organik_urun_sitesi/internal/utils"

	"gorm.io/gorm"
)

type AdminService struct {
	DB *gorm.DB
}

func (s *AdminService) Login(email, password string) (string, error) {
	var admin models.Admin

	if err := s.DB.Where("email = ?", email).First(&admin).Error; err != nil {
		return "", errors.New("admin bulunamadı")
	}

	if err := utils.CheckPassword(admin.PasswordHash, password); err != nil {
		return "", errors.New("şifre hatalı")
	}

	token, err := utils.GenerateJWT(admin.ID.String())
	if err != nil {
		return "", err
	}

	return token, nil
}
