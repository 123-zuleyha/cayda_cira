package dto

type CategoryPublicDTO struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type ProductPublicDTO struct {
	ID          string             `json:"id"`
	Name        string             `json:"name"`
	Description string             `json:"description"`
	Images      []string           `json:"images"`
	Region      string             `json:"region"`
	Category    CategoryPublicDTO  `json:"category"`
}
