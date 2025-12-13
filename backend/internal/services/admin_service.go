package services

import (
	"errors"

	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/models"

	"golang.org/x/crypto/bcrypt"
)

func AuthenticateAdmin(email, password string) (*models.Admin, error) {
	var admin models.Admin

	err := config.DB.Where("email = ?", email).First(&admin).Error
	if err != nil {
		return nil, errors.New("email veya şifre hatalı")
	}

	err = bcrypt.CompareHashAndPassword(
		[]byte(admin.PasswordHash),
		[]byte(password),
	)
	if err != nil {
		return nil, errors.New("email veya şifre hatalı")
	}

	return &admin, nil
}
