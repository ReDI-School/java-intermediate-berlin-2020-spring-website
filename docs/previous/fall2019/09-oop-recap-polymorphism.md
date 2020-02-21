# 09 - OOP Recap, Abstract classes, interfaces & polymorphism

<Teacher name="Alina"></Teacher>

## Goals

- Discuss Preject questions
- OOP Recap. Remember what we already learnt
- Understand what is Abstract class in java and why do we need it
- Implement an Abstract Class
- Understand what is Interface in java and why do we need it
- Implement an Interface
- Understand what is Polymorphism, try to use it 

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1q-xZwQrayGCOdrGqNo4AiwCY6ZVdwP7j5MSgsFoNOtE/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Abstract class

Abstract Classes are classes in Java, that declare one or more abstract methods.

Consider the following class hierarchy consisting of a Shape class which is inherited by three classes Rectangle, Circle, and Triangle. The Shape class is created to save on common attributes and methods shared by the three classes Rectangle, Circle, and Triangle. calculateArea() is one such method shared by all three child classes and present in Shape class.

### Useful links
Abstract Classes & methods 
 - <https://www.guru99.com/java-abstract-class-method.html> 
 - <https://www.journaldev.com/1582/abstract-class-in-java>
 - <https://www.tutorialspoint.com/java/java_interfaces.htm>
 - <https://www.journaldev.com/1607/difference-between-abstract-class-and-interface-in-java>

### Create a new abstract class Shape

```java
public abstract class Shape {

    public abstract double calculateArea();
}
```

### Let's create Rectangular class

<Solution>

```java
public class Rectangular extends Shape {

    int width;
    int length;
    
    Rectangular(int width, int length) {
        this.width = width;
        this.length = length;
    }
}
```
</Solution>

As you can see we need to implement method calculateArea() for the Rectangular class

<Solution>

```java
public class Rectangular extends Shape {

    double width;
    double length;
    
    Rectangular(double width, double length) {
        this.width = width;
        this.length = length;
    }
    
    public double calculateArea() {
        return width * length;
    }
} 
```
</Solution>

### Let's create Circle class

<Solution>

```java
public class Circle extends Shape {

    double radius;

    Circle(double radius) {
        this.radius = radius;
    }
    
    public double calculateArea() {
        return radius * radius * Math.PI;
    }
} 
```
</Solution>

## Interface
An interface is a reference type in Java. It is similar to class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.

### Useful links
 - <https://www.guru99.com/java-interface.html>
 - Abstract classes vs interfaces <https://www.guru99.com/interface-vs-abstract-class-java.html>

### Let's create two interfaces Cleaner & Funny

```java
public interface Cleaner {
    void clean();
}

```

```java
public interface Funny {
    void makeJoke();
}

```

### Let's make YellowRobot Funny
From the previous lesson:
<https://github.com/marcelioleal/javailesson8/tree/master/src>

<Solution>

```java
public class YellowRobot extends Robot implements Funny {
    
    // ...
    
    public void makeJoke() {
        System.out.println("Some joke");
    }
}

```
</Solution>

<Solution>

```java
public class PurpleRobot extends BlueRobot implements Cleaner {
    
    // ...
    
    public void clean() {
        System.out.println("Cleaning....");
    }
}

```
</Solution>

## Polymorphism

It is a OOPs concept where one name can have many forms.
For example, you have a smartphone for communication. 
The communication mode you choose could be anything. It can be a call, a text message, a picture message, mail, etc. So, the goal is common that is communication, but their approach is different. This is called Polymorphism.

### Useful links
 - <https://www.w3schools.com/java/java_polymorphism.asp>
 - <https://www.guru99.com/java-inheritance-polymorphism.html>
 
### Let's create an array of different Robots and let them introduce themselves

```java
public class Main {

    public static vois main() {
        // create many different Robots
        // ...
        
        Robot[] robots = new Robot[]{blueRobot, yellowRobot, purpleRobot, justRobot};
        for (Robot robot: robots) {
            robot.introduce();
        }
        
        Funny[] funnyRobots = new Funny[]{yelloRobot, purpleRobot};
        for (Funny funny: funnyRobots) {
            funny.makeJoke();
        }
    }
}
```
 
## Homework

### Exercise 1
 - Create a subclass of the class Shape Triangle 
 - Implement calculateArea() 
 
### Exercise 2
 - Create an interface Movable with a method moveTo(int x, int y)
 - Make BlueRobot movable 
 - Move your blue (& purple) robots to different directions
 
### Exercise 3 (Optional)
 - Create a class Human that implements interface Movable
 - Create an object of the class Human
 - Add this object to you Movable array
 
### Exercise 4 (Optional)
 - Create a class Square that extends Rectangular 
 - (Hint) a Square is a Rectangular with the same width and length
 - Create a Constructor with one parameter: side
 
### Exercise 5 (Optional)
 - Create many different shapes (Circle, Rectangular, Square, Triangle)
 - add all of them to the array of Shapes
 - for every shape in the array calculate Area

### Exercise 6 (Optional)
 - Make abstract class Shape Movable
 - Implement method move() in the Shape class (abstract class can have methods with behaviour)
 - Now you can move shapes and robots together
 
### Preject !!!
