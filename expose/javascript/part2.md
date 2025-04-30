# Part 2
1. Line 12 will print 3. This is because `i` is declared as a **var** and thus has the scope of the entire function. This means after it is initialized in the for loop, it will eventually increment and stop at `prices.length`, which is 3.

2. Line 13 will print 150. This is because `discountedPrice` is initialized as a **var** for each of the iterations in the for loop. This means its last value will be `prices[2] * (1 - 0.5) = 300 * 0.5 = 150`.

3. Line 14 will print 150. This is because `finalPrice` multiplies and divides `discountedPrice = 150` and rounds that value.

4. This function returns an array: `[50, 100, 150]`. This is because the for loop goes through each of the prices (in order) and applies a 50% discount to it, rounds the value, and pushes (`push()`) it into the `discounted` array.

5. ERROR, since `i` is declared using **let**, it is not defined outside the scope of the for-loop, and thus `console.log(i)` will fail!

6. ERROR, since `discountedPrices` is declared inside the for-loop using **let**, the `console.log()` call is outside of its scope and thus will also fail. 

7. 150, since `finalPrice` is declared in the same scope as the `console.log()` call, it will print the last `finalPrice` calculation in the for loop which is 150.

8. This function returns an array: `[50, 100, 150]`. This is because the for loop goes through each of the prices (in order) and applies a 50% discount to it, rounds the value, and pushes (`push()`) it into the `discounted` array which is declared by **let** and `return` is in same scope as `discounted`.

9. ERROR, this is the exact same reason as question 5. `i` is declared in the scope of the for-loop, but is called for by `console.log()` outside its scope.

10. 3, this is because `length` is declared as a **const** and never actually changes while `console.log()` calls for it in the same scope!

11. `[50, 100, 150]`, this is because although `discounted` is declared as a `const`, what stays "constant" is the reference to an array that `discounted` holds. Thus the array is still mutable, but it would be illegal to make `discounted` point to another array!

12. A. student.name    
    B. student['Grad Year']  
    C. student.greeting()  
    D. student['Favorite Teacher'].name   
    E. student.courseLoad[0]  

13. A. '32', this is because the `+` operation acts as concatenation and thus causes a string conversion, thus `2` become `'2'`, which `'3' + '2' = '32'`.   
    B. 1, this is because the `-` operation causes a numeric conversion, thus `'3'` becomes `3`, which `3 - 2 = 1`.  
    C. 3, this is because `+` causes a numeric conversion, thus `null` becomes `0`.  
    D. '3null', this is because `+` acts as concatenation and thus a string conversion, thus `null` becomes `'null'`.  
    E. 4, this is because `+` causes as a numeric conversion, thus `true` becomes `1`.  
    F. 0, this is because `+` causes as a numeric conversion, thus `false` and `null` become `0`.  
    G. '3undefined', this is because `+` acts as concatenation and thus a string conversion, thus `undefined` becomes `'undefined'`.  
    H. NaN, this is because the `-` operation causes a numeric conversion, thus `'3'` becomes `3` and `undefined` becomes `NaN`, which `3 - NaN = NaN`.  

14. A. true, this is because when comparing a string to a number (`>`), a numeric conversion is caused, thus `'2'` becomes `2` in which `2 > 1 -> true`.  
    B. false, this is because when comparing two strings (`<`), the comparison is done through lexigraphical ordering: `'2' is NOT < '1'`.  
    C. true, this is because when comparing a string to a number (`==`), a numeric conversion is caused, thus `'2'` becomes `2` in which `2 == 2 -> true`.  
    D. false, this is because `===` checks equality **WITHOUT** type conversion. Thus testing equality of a number and a string would be _false_!  
    E. false, this is because when comparing a boolean to a number (`==`), a numeric conversion is caused, thus `true` becomes `1`, which `1 == 2 -> false`.  
    F. true, this is because `Boolean(2)` _casts_ `2` into a boolean value, thus `2` becomes `true`. In which, they are of the same type and of the same value: `true === true -> true`.  

15. `==` checks equality ***with*** type conversions (_not-strict_) while `===` checks equality ***without*** type conversions (_strict_). As seen with the examples, when using `==`, `'2'` was able to convert to `2` if a numeric conversion was needed to test equality, whereas that was not allowed in the case of `===`.

16. Question 16 is in [part2-question16.js](./part2-question16.js).

17. The result would be `newArr` would be returned with the value `[2, 4 , 6]`. When calling `modifyArray`, we are putting in an array `[1, 2, 3]` and a function `doSomething(num)` which just returns `num * 2`. In the for-loop, the _ith_ element of newArr comes from `callback(array[i])`, in which this is just calling the function `doSomething(array[i])`. This means that `newArr[i] = array[i] * 2` (based on what `doSomething` computes). Thus `[1, 2, 3]` becomes `[2, 4, 6]`.

18. Question 18 is in [part2-question18.js](./part2-question18.js).

19. Output: 
    1
    4
    3
    2
    _Comment_: I would have thought the 3 prints before 4 because it would have 0 delay. After doing more research, using setTimeout, you make that callback **asynch.** in which all **synch.** calls will occur before (thus 4 prints before 3).