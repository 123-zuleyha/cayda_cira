package dto

type ProductListResponse struct {
	Products []ProductPublicDTO `json:"products"`
	Total    int64              `json:"total"`
	Page     int                `json:"page"`
	Limit    int                `json:"limit"`
}
