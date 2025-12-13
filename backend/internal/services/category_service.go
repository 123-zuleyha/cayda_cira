package services

import (
	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/models"
)

func GetCategories() ([]models.Category, error) {
	var categories []models.Category

	if err := config.DB.Find(&categories).Error; err != nil {
		return nil, err
	}

	return categories, nil
}

func CreateCategory(category *models.Category) error {
	return config.DB.Create(category).Error
}
