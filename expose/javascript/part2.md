1. Line 12 keeps track of the number of items in the prices array. As such, it returns the number 3.
2. Line 13 returns the discounted price of the last element in the array. As such we get 50% of 300 which is 150.
3. Line 14 returns the final price of the last element in the array, and updates the finalPrice from 0 to the new price, which in this case is 150.
4. The function returns "discounted" to the function caller, essentially storing the array of discounted prices.
5. We get an error, because i does not exist within the bounds of the function console.log.
6. We get an error, because discountedPrice does not exist within the bounds of the function console.log.
7. We get 150, because finalPrice exists in the same bounds of the function call.
8. The function returns "discounted" to the function caller, essentially storing the array of discounted prices.
9. Line 11 returns an error because i does not exist within the bounds of the function console.log.
10. Line 12 returns the length of the length of the array since the value does not change. It is constant and doesn't result in an error.
11. The function returns "discounted" to the function caller, essentially storing the array of discounted prices.
12a. student.name
12b. student["Grad Year"]
12c. student.greeting()
12d. student["Favorite Teacher"].name
12e. student.courseLoad[0]
13a. '3'+2 concatenates the numbers and prints 32.
13b. '3'-2 recognizes 3 as an integer and performs regular subtraction, printing 1.
13c. 3+null prints 3 because null is converted to 0.
13d. '3'+null concatenates the number 3 and the word null to print 3null.
13e. true+3 prints 4, because true is converted to 1 and addition is performed.
13f. false+null prints 0 because both false and null are treated as 0, and addition is performed.
13g. '3'+undefined concatenates the number 3 and the word undefined, resulting in 3undefined.
13h. 3-undefined prints NaN, this is because mathematical subtraction is performed on undefined, which is recognized as NaN, and any mathematical operation performed on undefined results in NaN.
14a. '2'>1 prints true, '2' is recognized as the number 2, which is > 1.
14b. '2'<'12' prints false because '2' and '12' are recognized as strings, with 1 having a lower ascii value than 2.
14c. 2=='2' prints true, this is because '2' is treated as an integer and == compares if the two values are equal.
14d. 2==='2' prints false, this is because the 2 on the left is an integer, while the 2 on the right is a string. === requires a strict equality to be true, meaning they must share the same data type.
14e. true==2 prints false, as true is equivalent to 1, which does not equal 2.
14f. true===Boolean(2) prints true, this is because both true and Boolean, are the same type, and Boolean(2) is the same as 2.
15. The difference between == and === is that === is a stricter comparison. As we saw with '2' == 2, the string '2' is converted to 2 and is equal to the integer 2. However, under ===, because '2' is a string, it is a different type than the integer 2 despite having the same value, as such, === returns false.
17. Running modifyArray with the parameters [1,2,3], doSomething, in which doomething multiplies the number by 2, will create a new array where the elements of the original array are doubled, ie. [2,4,6]. The function modifyArrayt creates an empty array, and inserts elements taken from the original array, updated by some callback function. Because callback uses doSomething which multiplies the element in the array by 2, we get a new array [2,4,6].
19. The code prints out "1 4 3 2" on seperate lines.