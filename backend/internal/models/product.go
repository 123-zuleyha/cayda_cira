package models

import "time"

type Product struct {
	ID          string    `json:"id" db:"id"`
	Name        string    `json:"name" db:"name"`
	Description string    `json:"description" db:"description"`
	CategoryID  string    `json:"category_id" db:"category_id"`
	Images      []string  `json:"images" db:"images"`
	Region      string    `json:"region" db:"region"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
}
