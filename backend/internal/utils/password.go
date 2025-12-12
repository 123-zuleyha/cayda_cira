package utils

import "golang.org/x/crypto/bcrypt"

func HashPassword(pw string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(pw), 12)
	return string(bytes), err
}

func CheckPassword(hashed, pw string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashed), []byte(pw))
}
