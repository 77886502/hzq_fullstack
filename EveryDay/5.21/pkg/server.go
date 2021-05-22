package pkg
import "fmt"
func Println(name string,age int) string {
	var grade []string
	switch age{
	case 18:
		grade = append(grade,"小学")
	}
	fmt.Println("public")
}