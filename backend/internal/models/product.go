package models

import (
	"time"

	"github.com/google/uuid"
)

type Product struct {
	ID uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"id"`

	Name        string    `gorm:"not null" json:"name"`
	Description string    `json:"description"`

	CategoryID uuid.UUID `gorm:"type:uuid;not null" json:"category_id"`
	Category   Category  `gorm:"foreignKey:CategoryID" json:"category"`

	Images []string `gorm:"type:text[]" json:"images"`
	Region string   `json:"region"`

	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
}
