# 01 - Introduction to Intermediate Java
<Teacher name="Michele"></Teacher>

## Goals

- Getting to know each other
- Get familiar with schedule, attendance, tools
- Course introduction
- Check required software
- Do some basic Java exercises 🤩


## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1bwG3EQqUcEVSo75xe1iHFrwBTNZOkn5ltp8LvunjEFA/embed?start=false&loop=false&delayms=3000&slide=id.gcb9a0b074_1_0"></GoogleSlides>

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

If you don't know where to start, try creating a new Java class called ExerciseIntro and copy-pasting the following into it!

```java
public class ExerciseIntro {
    public static void main(String[] args) {
        square(1, 3);
        square(5, 6);
    }

    public static void square(int x, int y) {
        // your code needs to go here!
    }
}
```

### Exercise 2

In german, nouns ending with e are almost always feminine. Write a method _isFeminineNoun_ that checks if the provided word ends with e or not.


```
isFeminineNoun("Katze")
> true

isFeminineNoun("Hund")
> false
```

Bonus: can you also make sure the method also catches words ending in _-ung_? Those are also feminine.

### Homework

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

## Additional Resources

- [The Java Tutorials (from Oracle)](https://docs.oracle.com/javase/tutorial/)
- [W3Schools Java Tutorial](https://www.w3schools.com/java/)
- [O'Reilly Programming Podcasts](https://www.oreilly.com/topics/oreilly-programming-podcast)
