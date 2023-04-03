package stringJoin

func Join(separator string, elements ...string) string {
	var result string

	for i, e := range elements {
		result += e

		if i != len(elements)-1 {
			result += separator
		}
	}

	return result
}
