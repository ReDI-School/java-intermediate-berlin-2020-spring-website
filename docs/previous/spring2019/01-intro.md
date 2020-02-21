# 01 - Introduction to Intermediate Java Course

<Teacher name="Maciej"></Teacher>

## Goals

- Get familiar with schedule, attendance, teachers, tools
- Get to know each other
- Course introduction
- Install required software
- Learn how to create a new project with IntelliJ
- Do some basic Java exercises!

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTDkYSGHxcI4nhyfOVz_pYvrJesky7D28KSul5NqcKpqERPR14867LO0C580-b9nu6BNP--oieJW3q3/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Java Basics Recap

```java
package com.redi.j2;

public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");

        String name = "Memet";
        String profession = "skydiver";
        int age = 40;
        boolean smoking = false;

        someMethod(profession);

        for (int i = 0; i < 10; i++) {
            System.out.println("hey " + i);
        }
    }

    private static void someMethod(String profession) {
        if (profession.equals("skydiver")) {
            System.out.println("Cool");
        } else {
            System.out.println("not cool");
        }
    }
}
```

## Exercises

Same exercises as on slides, copied here for convenience.

### Exercise 1

Write a method that for X and Y given by arguments prints square of each number between X and Y.

```1 - 1
2 - 4
3 - 9
… 
```

Solution:

<YouTube src="https://www.youtube.com/embed/uif6eBb-cIA"></YouTube>

<Solution>
```java
private static void squares(int x, int y) {
    for (int i = x; i < y; i++) {
        System.out.println(i + " - " + (i * i));
    }
}
```
</Solution>

### Exercise 2

In Polish language there is a rule that if name ends with “a” it’s a female name, if not it’s a male name.

Write a method that checks if Polish name given by variable is a male or female


For example:
```Krystyna - female
Krysian - male
```

Solution:

<YouTube src="https://www.youtube.com/embed/6eePtMUYTSo"></YouTube>

<Solution>
```java
private static void polishNames(String name) {
    if (name.endsWith("a")) {
        System.out.println(name + " is a girl");
    } else {
        System.out.println(name + " is a boy");
    }
}
```
</Solution>

### Exercise 3

Write a method that for X and Y, for each number between X and Y writes a number and if its odd or even.

Solution:

<YouTube src="https://www.youtube.com/embed/o1dw0_8PnzM"></YouTube>

<Solution>
```java
private static void evenOrOdd(int x, int y) {
    for (int i = x; i < y; i++) {
        String isEvenOrOdd = i % 2 == 0 ? "even" : "odd";
        System.out.println(i + " is " + isEvenOrOdd);
    }
}
```
</Solution>

### Exercise 4

Write a method that for age given by parameter prints if is underage (and then how many years left until becomes an adult), or adult, if can buy a beer.

In Germany you become an adult at 18 but you can buy a beer already when you’re 16.

Solution:

<YouTube src="https://www.youtube.com/embed/3poW4H_4I4w"></YouTube>

<Solution>
```java
private static void beer(int age) {
    int yearsUntilAdult = 18 - age;
    if (age > 18) {
        System.out.println("An adult, can buy a beer");
    } else if (age > 16) {
        System.out.println("Not an adult, but can buy a beer.");
    } else {
        System.out.println("Underage, cannot buy a beer");
    }
    if (yearsUntilAdult > 0) {
        System.out.println("He will be an adult in  " + yearsUntilAdult + " years.");
    }
}
```
</Solution>

### Exercise 5

Write a method that calculates how much money stays in the pocket of a freelancer in Poland. 
Each freelancer has to pay 300 EUR insurance and income tax is flat 19%. 

For example, if freelancer made 5000 EUR, in his pocket stays 4700 * 81% = 3807 EUR. 

Solution:

<YouTube src="https://www.youtube.com/embed/xbwQbiZES44"></YouTube>

<Solution>
```java
private static void inPocket(int income) {
    int profit = income - 300;
    System.out.println("In pocket stays " + (int) (profit * 0.81));
}
```
</Solution>

## Homework

Write a program that for given value of variable “height” will print out right-half of the christmas tree to the console. 

- Tree starts with “I” on the top and ends with “M” on the bottom. 
- Tree is built from “X” and “Y” characters one after another

For example for `height` equals 6 it will print:

```
I
XY
XYX
XYXY
XYXYX
M
```


```java
package com.example.demo;

public class TreeExercise {

    public static void main(String[] args) {
        int height = 8;

        // put your code here
    }
}
```

<Solution>
```java
private static void tree(int height) {
    System.out.println("I");
    for (int i = 2; i < height; i++) {
        for (int j = 0; j < i; j++) {
            System.out.print(j % 2 == 0 ? "X" : "Y");
        }
        System.out.println();
    }
    System.out.println("M");
}
```
</Solution>

Thx to **Elena** - even better - way way more optimised solution:

<Solution>
```java
public static void tree(int a) {
    System.out.println("I");
    String step = "X";

    for (int i = 2; i < a; i++) {
        step = i%2 == 0 ? step + "Y" : step + "X";
        System.out.println(step);
    }
    System.out.println("M");
}
```
</Solution>


## Additional Resources

- [Is the use of Java's default package a bad practice?](https://stackoverflow.com/questions/7849421/is-the-use-of-javas-default-package-a-bad-practice)
- [Base CS - Exploring the basics of computer science, every Monday, for a year.](https://medium.com/basecs)
- [Base CS Podcast](https://www.codenewbie.org/basecs)
- [Object Oriented Programming with Java Part 1 - Free Online Course](http://moocfi.github.io/courses/2013/programming-part-1/)
- [W3Schools Java Tutorial](https://www.w3schools.com/java/)