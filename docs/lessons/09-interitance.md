# 09 - Inheritance & overriding
<Teacher name="Alina"></Teacher>

## Goals
- Understand what is Inheritance and why do we need it 
- Understand what is Overriding
- Understand what is the difference between Overriding and Overloading
- Create Classes with hierarchy
- Create overridden methods and constructors

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/13uaQDLuHeg8DmFKRZfFNGOjz3W4rMXszzcP0250WXP8/embed"></GoogleSlides>

## Inheritance
In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object or class, retaining similar implementation. Also defined as deriving new classes from existing ones such as super class or base class and then forming them into a hierarchy of classes. 

### Definitions
A class that is derived from another class is called a subclass (also a derived class, extended class, or child class). 

The class from which the subclass is derived is called a superclass (also a base class or a parent class).

Excepting Object, which has no superclass, every class has one and only one direct superclass (single inheritance). In the absence of any other explicit superclass, every class is implicitly a subclass of Object.

### Example

```java
import java.util.ArrayList;

public class Person {

  public String name;
  public int age;
  public String city;
  public ArrayList<Person> friends;

  public Person(String name, int age, String city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.friends = new ArrayList<>();
  }

  public void introduce() {
    System.out.println("My name is " + this.name);
    System.out.println("I'm " + this.age + " years old");
    System.out.println("My friends are:");
    for (Person s : friends) {
      System.out.println(s.name);
    }
  }
}

```

1. Let's implement together classes `Student` & `Teacher`, that are subclasses of the class `Person`
1.1. `Student` has a list of subjects that they study
1.2. `Teacher` has a subject that they teach, how many years of experience they have
1.3. Add a method `study(String subject)` to the `Student` class, that prints
1.4. Add a method `teach()` to the `Teacher` class
2. Let's add constructors to the `Person`, `Student` & `Teacher` classes
3. Let's override `introduce()` method of the `Student` and `Teacher` classes

### What you can do in a Subclass

A subclass inherits all of the public and protected members of its parent, no matter what package the subclass is in. If the subclass is in the same package as its parent, it also inherits the package-private members of the parent. You can use the inherited members as is, replace them, hide them, or supplement them with new members:

- The inherited fields can be used directly, just like any other fields.
- You can declare a field in the subclass with the same name as the one in the superclass, thus hiding it (not recommended).
- You can declare new fields in the subclass that are not in the superclass.
- The inherited methods can be used directly as they are.
- You can write a new instance method in the subclass that has the same signature as the one in the superclass, thus overriding it.
- You can write a new static method in the subclass that has the same signature as the one in the superclass, thus hiding it.
- You can declare new methods in the subclass that are not in the superclass.
- You can write a subclass constructor that invokes the constructor of the superclass, either implicitly or by using the keyword super.

### Tasks
Let's do some Netflix 🎥 🍿 

See an example of Plans in `Netfix` in the presentation and let's implement it as Inheritance (there are several ways, we try Inheritance today)
- Create a class `Device` and its subclasses Laptop, TV, Phone, Tablet with some characteristics
- Create a class `BasicUser` with fields `email`, `price`, `numberOfParalellScreens` 
- Add a method `watch(Device device, String movie)` that prints `user {email} watches {film}`
- Create a class `StandardUser` that is a subclass of `BasicUser` and has a method `watchHd(Device device, String movie)` 
that prints `user {email} watches {film} in HD` 
- Create a class `PremiumUser` that is a subclass of `StandardUser` and has a method `watchUltraHd(Device device, String movie)` 
that prints `user {email} watches {film} in UltraHD`
- Make sure that your methods `watch`, `watchHd`, `watchUltraHd` take into consideration `numberOfParallScreens` available for the user
- (Complex) Add a method to `stopWatch()`, that will make one screen available, if it was used 
- (Complex) Promote more expensive plans! if a user doesn't have enough available screens when they try to watch something show them a message that they can upgrade to the next plan:
 BasicUser -> StandardUser, StandardUser -> PremiumUser. PremiumUser -> Register another account. Remember this promotion should happen for all methods: `watch`, `watchHd`, `watchUltraHd`

### Homework
- Add a class `Doctor` that extends class `Person`. What fields and methods can doctor have? Where doctor works? (checkUp(), prescribe()) What speciality the doctor has? 
Implement speciality of the doctor in two ways: 
    - as Inheritance, for example Dentist `is a` Doctor
    - as Composition, for example Doctor `has a` speciality
- Add a class `Developer` that extends class `Person`, add what languages the developer knows, in what company they work, 
override method introduce so it prints "Hello World!" and then all information that Person class has
- 

## Links
- [OOP exercises](http://www.ntu.edu.sg/home/ehchua/programming/java/J3f_OOPExercises.html#zz-1.1)
- [Oracle Subclasses](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)
- [Practice](https://javaconceptoftheday.com/java-inheritance-practice-coding-questions/)
- [Coronavirus Example](https://medium.com/@movsisyan5989/coronavirus-disease-and-oop-paradigm-in-java-affae9bde0b4)
- [Java Override](https://www.programiz.com/java-programming/method-overriding)
- [Quiz](https://javaconceptoftheday.com/java-inheritance-practice-coding-questions/1)