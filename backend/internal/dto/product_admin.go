package dto

import "time"

type ProductAdminDTO struct {
	ID          string    `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Images      []string  `json:"images"`
	Region      string    `json:"region"`
	CategoryID  string    `json:"category_id"`
	CreatedAt   time.Time `json:"created_at"`
}
