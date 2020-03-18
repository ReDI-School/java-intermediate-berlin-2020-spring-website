# 06 - OOP (Class & Objects)
<Teacher name="Abdulla"></Teacher>

## Goals
- Know what Object-Oriented Programming is.
- Be able to translate a real-life object to a programming object.
- Be able to create a Java class.
- Be able to instantiate an object of a Java class.
- Understand the difference between a class and an object.
- Have an overview about class constructors.
- Have an overview about the main concepts (pillars) of OOP.

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vRZp6aKR95a6WuT-ZeY1-DzLCJLK7dH8DGSokKVl20fdJ_u57Z4G7Nd26-vA7BOxAZR42X6S8u3SbXW/embed"></GoogleSlides>

## Exercise

Write the following program in OOP.

Hint: You should create a class and use it to group the information about each student and use them to `introduce()` each student.

```java
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        String studentName1 = "Bob";
        String studentName2 = "Alice";
        String studentName3 = "John";
        String studentName4 = "Jane";

        int age1 = 36;
        int age2 = 25;
        int age3 = 19;
        int age4 = 46;

        boolean student1Single = false;
        boolean student2Single = true;
        boolean student3Single = true;
        boolean student4Single = false;

        String student1City = "Berlin";
        String student2City = "Moscow";
        String student3City = "San Fransisco";
        String student4City = "Rio";

        ArrayList<String> student1Friends = new ArrayList<>();
        ArrayList<String> student2Friends = new ArrayList<>();
        ArrayList<String> student3Friends = new ArrayList<>();
        ArrayList<String> student4Friends = new ArrayList<>();

        student1Friends.add("Alice");
        student1Friends.add("Jane");

        student2Friends.add("Bob");
        student2Friends.add("Jane");

        student3Friends.add("Jane");

        student4Friends.add("John");
        student4Friends.add("Alice");
        student4Friends.add("Bob");

        // introduce yourself (Student 1)
        System.out.println("My name is " + studentName1);
        System.out.println("I'm " + age1 + " years old");
        if (student1Single) {
            System.out.println("I'm single");
        } else {
            System.out.println("I'm in a relationship ^_^ ");
        }
        System.out.println("My friends are:");
        student1Friends.forEach(System.out::println);


        // introduce yourself (Student 2)
        System.out.println("My name is " + studentName2);
        System.out.println("I'm " + age2 + " years old");
        if (student2Single) {
            System.out.println("I'm single");
        } else {
            System.out.println("I'm in a relationship ^_^ ");
        }
        System.out.println("My friends are:");
        student2Friends.forEach(System.out::println);


        // introduce yourself (Student 3)
        System.out.println("My name is " + studentName3);
        System.out.println("I'm " + age3 + " years old");
        if (student3Single) {
            System.out.println("I'm single");
        } else {
            System.out.println("I'm in a relationship ^_^ ");
        }
        System.out.println("My friends are:");
        student3Friends.forEach(System.out::println);


        // introduce yourself (Student 4)
        System.out.println("My name is " + studentName4);
        System.out.println("I'm " + age4 + " years old");
        if (student4Single) {
            System.out.println("I'm single");
        } else {
            System.out.println("I'm in a relationship ^_^ ");
        }
        System.out.println("My friends are:");
        student4Friends.forEach(System.out::println);
    }
}
```

## Homework

You want to go to the bank and open an account. You want to be able to transfer money, deposit money, withdraw money. 
When you transfer/withdraw the sum you have in your account can never go under 0EUR. 
You want to keep track of your transactions as well, to see where your money is going. 
Whenever a new action is performed, print the current amount of money you have.

 - Create an `Account` class with specific account attributes and methods like `deposit()`, `withdraw()`, `transfer()`.
 - Create a `Customer` class that will have associated an `Account`.
 - Create 2 `Customer` objects, one for you, and one for one of your colleagues.
 - Deposit some money in the accounts.
 - Transfer some money from your account to your friends account.
 - Withdraw some money from your account.
 - After every operation, print how much money you still have in your account.

#### Notes 

* Try to create a new java project in your IDE (e.g. IntelliJ Idea) with a descriptive name, use UpperCase for class names and push your code to Github.

* If curious to learn how to make your java code pretty, please check out [Java Naming Conventions](https://howtodoinjava.com/java/basics/java-naming-conventions/).

* In case you have any question, please don't hesitate to reach out in Slack anytime.

#### Additional Resources

* [Official OOP Tutorial](https://docs.oracle.com/javase/tutorial/java/concepts/index.html)
