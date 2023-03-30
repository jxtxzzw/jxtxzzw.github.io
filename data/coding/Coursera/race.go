package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg sync.WaitGroup

	var x int

	N := 10000

	wg.Add(2)

	go func() {
		defer wg.Done()
		for i := 0; i < N; i++ {
			x++
		}
	}()

	go func() {
		defer wg.Done()
		for i := 0; i < N; i++ {
			x--
		}
	}()

	wg.Wait()
	fmt.Println(x)
}

/*
The race condition occurs when both goroutines try to access and modify the variable x concurrently.
Since there is no synchronization mechanism between the two goroutines, they can execute simultaneously.
So it is possible that the x++ statement in the first goroutine may not complete before the x-- statement.
This leads to an intermediate or incorrect value of x.
So the final result could be any value (not necessarily 0). It can vary every time we run it,
*/
