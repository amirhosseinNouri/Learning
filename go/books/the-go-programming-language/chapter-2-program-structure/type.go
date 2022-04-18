package main

type Celsius float64
type Fahrenheit float64

const (
	AbsoluteZero = -273
	FreezingC    = 0
	BoilingC     = 100
)

func main() {

}

func CtoF(c Celsius) Fahrenheit {
	return Fahrenheit(c*9/5 + 32)
}

func FtoC(fFactor float64) Celsius {
	return Celsius((f - 32) * 5 / 9)
}
