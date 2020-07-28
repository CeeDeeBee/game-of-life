package main

import (
	"fmt"
	"syscall/js"
)

func hello() {
	fmt.Println("Hello World!")
}

func helloWrapper() js.Func {
	jsonFunc := js.FuncOf(func(this js.Value, args []js.Value) interface{} {
		hello()
		return nil
	})

	return jsonFunc
}

func main() {
	fmt.Println("WASM loaded...")
	js.Global().Set("hello", helloWrapper())
	<-make(chan bool)
}
