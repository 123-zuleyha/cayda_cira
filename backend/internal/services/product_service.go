package services

import (
	"organik_urun_sitesi/config"
	"organik_urun_sitesi/internal/dto"
	"organik_urun_sitesi/internal/models"
)

// ------------------------------------
// Helpers
// ------------------------------------
func mapToPublicDTO(products []models.Product) []dto.ProductPublicDTO {
	result := make([]dto.ProductPublicDTO, 0)

	for _, p := range products {
		result = append(result, dto.ProductPublicDTO{
			ID:          p.ID.String(),
			Name:        p.Name,
			Description: p.Description,
			Images:      p.Images,
			Region:      p.Region,
			Category: dto.CategoryPublicDTO{
				ID:   p.Category.ID.String(),
				Name: p.Category.Name,
			},
		})
	}

	return result
}

// ------------------------------------
// PUBLIC PRODUCT LIST (pagination)
// ------------------------------------
func GetProducts(
	search string,
	categoryID string,
	page int,
	limit int,
) (*dto.ProductListResponse, error) {

	var products []models.Product
	var total int64

	if page < 1 {
		page = 1
	}
	if limit < 1 {
		limit = 12
	}

	offset := (page - 1) * limit

	db := config.DB.
		Model(&models.Product{}).
		Preload("Category")

	if search != "" {
		db = db.Where("name ILIKE ?", "%"+search+"%")
	}

	if categoryID != "" {
		db = db.Where("category_id = ?", categoryID)
	}

	if err := db.Count(&total).Error; err != nil {
		return nil, err
	}

	if err := db.
		Limit(limit).
		Offset(offset).
		Order("created_at DESC").
		Find(&products).Error; err != nil {
		return nil, err
	}

	return &dto.ProductListResponse{
		Products: mapToPublicDTO(products),
		Total:    total,
		Page:     page,
		Limit:    limit,
	}, nil
}

// ------------------------------------
// PRODUCT DETAIL
// ------------------------------------
func GetProductByID(id string) (*models.Product, error) {
	var product models.Product

	if err := config.DB.
		Preload("Category").
		First(&product, "id = ?", id).
		Error; err != nil {
		return nil, err
	}

	return &product, nil
}

// ------------------------------------
// ADMIN
// ------------------------------------
func CreateProduct(product *models.Product) error {
	return config.DB.Create(product).Error
}

func DeleteProduct(id string) error {
	return config.DB.Delete(&models.Product{}, "id = ?", id).Error
}

// ------------------------------------
// CATEGORY → PRODUCTS
// ------------------------------------
func GetProductsByCategory(
	categoryID string,
	page int,
	limit int,
) (*dto.ProductListResponse, error) {

	var products []models.Product
	var total int64

	if page < 1 {
		page = 1
	}
	if limit < 1 {
		limit = 12
	}

	offset := (page - 1) * limit

	db := config.DB.
		Model(&models.Product{}).
		Preload("Category").
		Where("category_id = ?", categoryID)

	if err := db.Count(&total).Error; err != nil {
		return nil, err
	}

	if err := db.
		Limit(limit).
		Offset(offset).
		Order("created_at DESC").
		Find(&products).Error; err != nil {
		return nil, err
	}

	return &dto.ProductListResponse{
		Products: mapToPublicDTO(products),
		Total:    total,
		Page:     page,
		Limit:    limit,
	}, nil
}
