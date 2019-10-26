# Assignment in Python

```py
a = 0
b = a

# compare references
print(id(a) == id(b)) # True
```

# Assignment in Go (Values)

```go
package main

import "fmt"

func main() {
	var a = 3
    var b = a
    // compare references (pointers)
	fmt.Println(&a == &b) // false
}
```

# Assignment in Go (References)

```go
package main

import "fmt"

func main() {
	var a = 3
    var b = &a
    var c = &a
    // compare references (pointers)
    fmt.Println(b == c) // true
    fmt.Println(&b == &c) // false
}
```
