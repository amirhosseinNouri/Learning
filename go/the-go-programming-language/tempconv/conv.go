// Package tempconv performs Celsius and Fahrenheit conversions
package tempconv

func CtoF(c Celsius) Fahrenheit {
	return Fahrenheit(c*9/5 + 32)
}

func FtoC(f Fahrenheit) Celsius {
	return Celsius((f - 32) * 5 / 9)
}

func KtoC(k Kelvin) Celsius {
	return Celsius(k) - AbsoluteZeroC
}

func CtoK(c Celsius) Kelvin {
	return Kelvin(AbsoluteZeroC + c)
}
