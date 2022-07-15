function calculator(a, b) {
  for (let i = 0; i < b; i++) {
    let str = "";
    for (let j = 0; j < a; j++) {
      str = str + "*"
    }
    console.log(str)
  }
}

calculator(5, 3)