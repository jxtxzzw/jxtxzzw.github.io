package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var n = 5
var eatTimes = 3
var hostAgrees = 2
var r = 5

var wg sync.WaitGroup
var host = make(chan bool, hostAgrees)

type CS struct {
	sync.Mutex
}

type DP struct {
	id    int
	left  *CS
	right *CS
}

func (dp DP) eat() {
	for i := 0; i < eatTimes; i++ {
		time.Sleep(time.Second * time.Duration(rand.Intn(r)))

		<-host
		dp.left.Lock()
		dp.right.Lock()
		fmt.Println("starting to eat ", dp.id)
		time.Sleep(time.Second * time.Duration(rand.Intn(r)))

		dp.left.Unlock()
		dp.right.Unlock()
		host <- true
		fmt.Println("finishing to eat ", dp.id)
		time.Sleep(time.Second * time.Duration(rand.Intn(r)))
	}
	wg.Done()
}

func main() {
	CSs := make([]*CS, n)
	for i := 0; i < n; i++ {
		CSs[i] = new(CS)
	}
	for i := 0; i < hostAgrees; i++ {
		host <- true
	}

	DPs := make([]*DP, n)
	for i := 0; i < n; i++ {
		DPs[i] = &DP{i + 1, CSs[i], CSs[(i+1)%5]}
		wg.Add(1)
		go DPs[i].eat()
	}

	wg.Wait()
}
