package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
	"sync"
)

func input() []int {
	var s string

	fmt.Println("Please input a list of integers, split by space:")
	scanner := bufio.NewScanner(os.Stdin)

	scanner.Scan()
	s = scanner.Text()
	if err := scanner.Err(); err != nil {
		fmt.Println("Error: You must input a list of integers, split by space.")
		os.Exit(1)
	}

	ss := strings.Split(s, " ")
	n := len(ss)

	if n == 0 {
		fmt.Println("Error: You must input a list of integers, split by space.")
		os.Exit(1)
	}

	var nums = make([]int, 0, n)

	for i := 0; i < n; i++ {
		var num, err = strconv.Atoi(ss[i])
		if err != nil {
			fmt.Println("Error: You must input a list of integers, split by space.")
			os.Exit(1)
		}
		nums = append(nums, num)
	}

	return nums
}

func sortList(list []int) {
	fmt.Println("Sorting this list: ", list)
	sort.Ints(list)
	fmt.Println("Sorted: ", list)
}

func main() {

	SLICES := 4

	inputList := input()
	sliceLen := len(inputList) / SLICES

	var wg sync.WaitGroup
	wg.Add(SLICES)
	s1 := inputList[:sliceLen]
	sortList(s1)
	wg.Done()
	s2 := inputList[sliceLen : 2*sliceLen]
	sortList(s2)
	wg.Done()
	s3 := inputList[2*sliceLen : 3*sliceLen]
	sortList(s3)
	wg.Done()
	s4 := inputList[3*sliceLen:]
	sortList(s4)
	wg.Done()

	wg.Wait()

	s := append(append(append(s1, s2...), s3...), s4...)
	sortList(s)

}
