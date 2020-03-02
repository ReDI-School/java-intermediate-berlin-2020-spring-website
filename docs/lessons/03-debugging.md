# 02 - Debugging a Java program with IntelliJ
<Teacher name="Thomas"></Teacher>

## Agenda

- Home work
- Questions
- Debuggig with IntelliJ
- Coding!

## Goals

- Understand when to use a debugger
- Being able to use the IntelliJ debugger to understand your code and find errors

## Live coding

Let's debug this piece of code:

```
public class FizzBuzz {

    public static void main(String[] args) {
        int start = Integer.parseInt(args[0]);
        int end = Integer.parseInt(args[1]);
        int fizzBuzzSum = 0;
        for(int index=start; index<end; index++) {
            if(isFizzBuzz(index)) {
                fizzBuzzSum = fizzBuzzSum + index;
            }
        }
        System.out.println(fizzBuzzSum);
    }

    private static boolean isFizzBuzz(int index) {
        if(index % 3 == 0) {
            return true;
        } else if(index % 5 == 0) {
            return true;
        } else {
            return false;
        }
    }

}
```

## Exercises

Create a new Java file for each exercise, named Exercise1 to Exercise3.

### Exercise 1 - easy

In fibonacci series, a number is the sum of previous two numbers of the sequence. For example 0, 1, 1, 2, 3, 5, 8, 13, 
... etc. The first two numbers of fibonacci series are 0 and 1. 

Write a Java program to display the first 20 elements of the fibonacci series. If you don't know where to start, try 
creating a new Java class called Exercise1 and copy-pasting the following into it!

```java
public class Exercise1 {

    public static void main(String[] args) {
        
    }

}
```
### Exercise 2 - medium

The Caesar cipher is a basic encryption technique used by Julius Caesar to securely communicate with his generals. Each 
letter is replaced by another letter some positions down the english alphabet. 

Write a Java program to encrypt strings using the Caesar cipher. Use this mapping: 

```
Input:    a b c d e f g h i j k l m n o p q r s t u v w x y z
Output:   B C D E F G H I J K L M N O P Q R S T U V W X Y Z A
```

The input `hello` would become `IFMMP`.

**Optional**: Use the parameter that gets passed to the main method.

**Optional**: Implement decryption as well.

### Exercise 3 - hard

Sudoku is a logic-based, combinatorial number-placement puzzle. The objective is to fill a 9×9 grid with digits so that
each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called "boxes", "blocks", or 
"regions") contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a 
well-posed puzzle has a single solution.

In completed games the same single integer may not appear twice in the same row, column, or any of the nine 3×3 
subregions of the 9×9 playing board.

Write a java program that validates these two 9x9 sudoku grids.

```java
    private static int[][] grid1 = {
            { 1, 2, 3, 4, 5, 6, 7, 8, 9 }, 
            { 9, 1, 2, 3, 4, 5, 6, 7, 8 }, 
            { 8, 9, 1, 2, 3, 4, 5, 6, 7 }, 
            { 7, 8, 9, 1, 2, 3, 4, 5, 6 },
            { 6, 7, 8, 9, 1, 2, 3, 4, 5 }, 
            { 5, 6, 7, 8, 9, 1, 2, 3, 4 }, 
            { 4, 5, 6, 7, 8, 9, 1, 2, 3 }, 
            { 3, 4, 5, 6, 7, 8, 9, 1, 2 },
            { 2, 3, 4, 5, 6, 7, 8, 9, 1 }
    };
    private static int[][] grid2 = {
            { 1, 2, 3, 4, 5, 6, 7, 8, 9 }, 
            { 9, 1, 2, 3, 4, 5, 6, 7, 8 }, 
            { 8, 9, 1, 2, 3, 4, 5, 6, 7 }, 
            { 7, 8, 9, 1, 2, 3, 4, 5, 6 },
            { 6, 7, 8, 9, 1, 2, 3, 4, 5 }, 
            { 5, 1, 7, 8, 9, 6, 2, 3, 4 }, 
            { 4, 5, 6, 7, 8, 9, 1, 2, 3 }, 
            { 3, 4, 5, 6, 7, 8, 9, 1, 2 },
            { 2, 3, 4, 5, 6, 7, 8, 9, 1 }
    };
``` 

## Home work

Finish the exercises that you didn't finish today.