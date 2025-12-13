package services

import (
	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/models"
)

func GetProducts(search string, categoryID string) ([]models.Product, error) {
	var products []models.Product

	db := config.DB.Model(&models.Product{})

	if search != "" {
		db = db.Where("name ILIKE ?", "%"+search+"%")
	}

	if categoryID != "" {
		db = db.Where("category_id = ?", categoryID)
	}

	if err := db.Find(&products).Error; err != nil {
		return nil, err
	}

	return products, nil
}

func GetProductByID(id string) (*models.Product, error) {
	var product models.Product

	if err := config.DB.
		First(&product, "id = ?", id).
		Error; err != nil {
		return nil, err
	}

	return &product, nil
}

func CreateProduct(product *models.Product) error {
	return config.DB.Create(product).Error
}

func DeleteProduct(id string) error {
	return config.DB.Delete(&models.Product{}, "id = ?", id).Error
}
