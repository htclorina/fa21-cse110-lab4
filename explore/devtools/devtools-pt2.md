1. The integers were being recognized as strings, as such, the numbers were being concatenated.
2. I would update line 11 from "let result = num1 + num2" to "let result = parseInt(num1) + parseInt(num2)"
