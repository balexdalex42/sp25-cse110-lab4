# Part 1
1. values added: 20

2.  final result: 20
   
3. We shouldn't use var because it is function scoped and could be very confusing when coding. It might have consequences that we wouldn't want because typically in this day and age, we would want variables to only have the scope that they are declared in, not necessarily outside!

4. values added: 20

5. ERROR, this is because let has a block scope, in which its block is the if statement, this `console.log()` calls result from **OUTSIDE** its scope, thus the variable doesn't exist, thus an error is thrown.

6. ERROR, this is because the variable is a constant, thus it cannot be changed after it is initialized to 0.

7. ERROR, this throws an error for the same reason above. Even if we didn't try to change result, it would still throw an error because const variables also have block scope and this `console.log()` is outside the scope that the `result` is defined in.