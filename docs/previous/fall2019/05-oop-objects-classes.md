# 05 - OOP Classes & Objects

<Teacher name="Alina"></Teacher>

## Goals

- Understand what Class & Object in Java are
- Understand the difference between Class & Object
- Be able to create a simple Class with 
- Be able to initiate an Object of a particular class
- Be able to create different constructors of the Class
- Be able to change objects state via methods

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1ClJEzVwfHXrr4q1P2wR-kzC2Om9bnB1Ah2ajOpGGb8c/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

### Let's create REDI school

- Create classes: Teacher, Student, Lesson, Homework
- Create several teachers 
- Create several students
- Create few lesson
- Students should be able to do homework and help each other
- Teachers can check the homework

### Start with the main Application class

```java
package com.redi.j2;

public class Main {

    public static void main(String[] args) {
        
    }
}
```

### Let's create Teacher class

```java
class Teacher {

    String name;
    int age;
    boolean gender;
    String course;

    void introduce() {
        System.out.println("Hello my name is " + name + ". I am teaching: " + course);
    }
}
```

### Let's create Student class

```java
class Student {

    String name;
    int averageScore;
    boolean alwaysAttendsClasses;

    Student(String name) {
        this.name = name;
    }

    void introduce() {
        System.out.println("Hey! My name is: " + this.name);
    }

    void helpAnotherStudent(Student student) {
        System.out.println(this.name + " helps " + student.name);
    }
}
```

### Let's create few students

```java
package com.redi.j2;

public class Main {

    public static void main(String[] args) {
        Student studentHarry = new Student("Harry Potter");
        Student badStudent = new Student("Voland");
        
        studentHarry.introduce();
        badStudent.introduce();
        
        studentHarry.helpAnotherStudent(badStudent);
    }
}
```
### The rest can be found here
<https://github.com/alinadenisenko/REDI/blob/master/src/lesson5/Main.java>

## Real Homework

### Exercise 0
 - Implement method that Teacher can check student's homework
 - Implement Attendance logic (mark what lesson students attended, when they did homework, what was their score)
 - Use your imagination :)
 
### Exercise 1
Create 2 robots named Rob and Bot. Rob is yellow and Bot is blue. Rob weights 10kg while Bot just 8kg. Rob has green eyes and Bot has black eyes. Each of the robots should print their attributes when asked to introduce themselves. Create a class that has all the attributes that Rob and Bot have and a method called introduce() that will let the robots tell us all their characteristics, then create Rob and Bot and ask them to introduce themselves. To be able to create Rob and Bot, add to the Robot class a constructor that has all the attributes the robots need.
Example: My name is Rob. I weight 10kg. I have green eyes

### Exercise 2
Add different types of constructors for the Robot class:
 - Default constructor
 - Constructor with 1 parameter - the name
 - Constructor with 2 parameters - the name and eye color. 
 Create different robots using all the constructors and let them introduce themselves. 
 Observe what will be the values of the attributes when using different constructors.

### Exercise 3
You work for DHL and you have to drive a truck full of packets. Design the Truck into a java class then create the truck. Add specific truck attributes to the Truck class.

### Exercise 4
You need to load your truck with packets. Design the Packet class. The packet should know the details of the sender and be able to print them. Add 3 packets to your truck and print where you need to deliver them.

### Exercise 5
You want to go to the bank and open an account. You want to be able to transfer money, deposit money, withdraw money. When you transfer/withdraw the sum you have in your account can never go under 0EUR. You want to keep track of your transactions as well, to see where your money is going. Whenever a new action is performed, print the current amount of money you have
 - create an Account class with specific account attributes and methods like deposit, withdraw, transfer.
 - crete a Customer class that will have associated an Account.
 - Create 2 Customer objects, one for you, and one for one of your colleagues.
 - deposit some money in the accounts
 - transfer some money from your account to your friends account
 - withdraw some money from your account.
 - after every operation, print how much money you still have in your account.
