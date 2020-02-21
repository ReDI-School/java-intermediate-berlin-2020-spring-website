# 01 - Introduction to Intermediate Java Course

<Teacher name="Michele"></Teacher>

## Goals

- Getting to know each other
- Get familiar with schedule, attendance, tools
- Course introduction
- Install required software
- Do some basic Java exercises (hopefully 🤩)


## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1pYFYnzWbZIh74X8k15qF4ij01lKnsZJfGyYI5V0ZpDs/embed?start=false&loop=false&delayms=3000&slide=id.gcb9a0b074_1_0"></GoogleSlides>

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
            System.out.println("Not cool");
        }
    }
}
```

## Exercises

Same exercises as on the slides, copied here for convenience.

### Exercise 1

Write the method _squares_ that for X and Y given by arguments prints the square of each number between X and Y.

```java
square(1,3)
> 1 - 1
> 2 - 4
> 3 - 9

square(5,6)
> 5 - 25
> 6 - 36
```

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

In german, nouns ending with e are almost always feminine. Write a method _isFeminineNoun_ that checks if the provided word ends with e or not.


```
isFeminineNoun("Katze")
> true

isFeminineNoun("Hund")
> false
```

Bonus: can you also make sure the method also catches words ending in _-ung_? Those are also feminine.

<Solution>
```java
private static void isFeminineNoun(String noun) {
    boolean isFeminine = noun.endsWith("e");
    System.out.println(isFeminine);
}

private static void isFeminineNounExpanded(String noun) {
    boolean isFeminine = noun.endsWith("e") || noun.endsWith("ung");
    System.out.println(isFeminine);
}
```
</Solution>

### Exercise 3

Let’s assume a freelancer has to pay insurance and income tax. Let’s assume insurance is fixed at 300€, while income tax is 9% for incomes of less than 1000€ (after insurance payment), and 21% otherwise.

```java
inPocket(5000)
> 3713

inPocket(1000)
> 637
```

<Solution>
```java
private static void inPocket(int wage) {
    int afterInsurance = wage - 300;
    double taxation;

    if (afterInsurance > 1000) {
        taxation = afterInsurance * 0.21;
    } else {
        taxation = afterInsurance * 0.09;
    }

    double afterTaxes = afterInsurance - taxation;
    System.out.println(afterTaxes);
}
```
</Solution>

## Homework

Write a program that for given value of variable ‘height’ will print out the right-half of a pine tree to the console.

- The tree starts with “I” on the top and ends with “M” on the bottom. 
- The tree is built from “X” and “Y” characters one after another

For example, for an `height` of 6 it will print:

```
I
XY
XYX
XYXY
XYXYX
M
```

<Solution>
```java
private static void tree (int height) {
    if (height < 3) {
        System.out.println("A tree must have a height of at least 3");
    }

    System.out.println("I");
    String treeLine = "X";
    int effectiveHeight = height - 2;
    for (int i=0; i< effectiveHeight; i++) {
        treeLine += (i%2 == 0) ? "Y" : "X";
        System.out.println(treeLine);
    }
    System.out.println("M");
}
```
</Solution>

## Additional Resources

- [The Java Tutorials (from Oracle)](https://docs.oracle.com/javase/tutorial/)
- [W3Schools Java Tutorial](https://www.w3schools.com/java/)
- [O'Reilly Programming Podcasts](https://www.oreilly.com/topics/oreilly-programming-podcast)
