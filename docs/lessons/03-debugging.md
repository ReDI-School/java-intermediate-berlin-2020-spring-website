# 03 - Debugging a Java program with IntelliJ
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

```java
public class FizzBuzz {

    public static void main(String[] args) {
        int start = Integer.parseInt(args[0]);
        int end = Integer.parseInt(args[1]);
        System.out.println("Printing FizzBuzz starting at " + start + " ending at " + end);
        for(int index=start; index<=end; index++) {
            if(!isFizzOrBuzz(index)) {
                System.out.println(index);
            }
        }
    }

    private static boolean isFizzOrBuzz(int index) {
        boolean result = false;
        if(index % 3 == 0) {
            System.out.print("Fizz");
            result = true;
        }
        if(index % 5 == 0) {
            System.out.print("Buzz");
            result = true;
        }
        if(result)
            System.out.println("");
        return result;
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

**Optional**: Use the `args` parameter to receive external input.

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
            {8, 3, 5, 4, 1, 6, 9, 2, 7},
            {2, 9, 6, 8, 5, 7, 4, 3, 1},
            {4, 1, 7, 2, 9, 3, 6, 5, 8},
            {5, 6, 9, 1, 3, 4, 7, 8, 2},
            {1, 2, 3, 6, 7, 8, 5, 4, 9},
            {7, 4, 8, 5, 2, 9, 1, 6, 3},
            {6, 5, 2, 7, 8, 1, 3, 9, 4},
            {9, 8, 1, 3, 4, 5, 2, 7, 6},
            {3, 7, 4, 9, 6, 2, 8, 1, 5}
    };
    private static int[][] grid2 = {
            {1, 2, 3, 4, 5, 6, 7, 8, 9},
            {9, 1, 2, 3, 4, 5, 6, 7, 8},
            {8, 9, 1, 2, 3, 4, 5, 6, 7},
            {7, 8, 9, 1, 2, 3, 4, 5, 6},
            {6, 7, 8, 9, 1, 2, 3, 4, 5},
            {5, 1, 7, 8, 9, 6, 2, 3, 4},
            {4, 5, 6, 7, 8, 9, 1, 2, 3},
            {3, 4, 5, 6, 7, 8, 9, 1, 2},
            {2, 3, 4, 5, 6, 7, 8, 9, 1}
    };
``` 

## Home work

Finish the exercises that you didn't finish today.