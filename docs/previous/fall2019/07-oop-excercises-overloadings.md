# 07 - OOP Exercises & Overloading

<Teacher name="Renato"></Teacher>

## Goals

- Questions? Let's address doubts on previous exercise(s)!
- More exercises and common issues
- Java conventions
- Introduction to Overloading
- More exercises
- Why we need Inheritance? 

## OOP Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vSrl2PmIryZtrDYlm02THVxkbSDo_8d8YCz2cvNS-uUUEtRcYcTVtKgswwmHF1i5Fw0IatI-kH79NSW/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Resources

- Java code conventions (Oracle) https://www.oracle.com/technetwork/java/codeconventions-150003.pdf
- Java naming conventions https://www.javatpoint.com/java-naming-conventions
- Java method overloading https://beginnersbook.com/2013/05/method-overloading/
- Java constructor overloading https://beginnersbook.com/2013/05/constructor-overloading/

## Review Exercises 
 
### Exercise 1
Create 2 robots named Rob and Bot. 
Rob is yellow and Bot is blue. Rob weights 10kg while Bot just 8kg. Rob has green eyes and Bot has black eyes. 
Each of the robots should print their attributes when asked to introduce themselves. 
Create a class that has all the attributes that Rob and Bot have and a method called introduce() that will let the robots tell us all their characteristics, then create Rob and Bot and ask them to introduce themselves. 
To be able to create Rob and Bot, add to the Robot class a constructor that has all the attributes the robots need.
Example: My name is Rob. I weight 10kg. I have green eyes

### Exercise 2
Add different types of constructors for the Robot class:
 - Default constructor
 - Constructor with 1 parameter - the name
 - Constructor with 2 parameters - the name and eye color. 
 Create different robots using all the constructors and let them introduce themselves. 
 Observe what will be the values of the attributes when using different constructors.

### Exercise 3
You work for DHL and you have to drive a truck full of packets. Design the Truck into a java class then create the truck. 
Add specific truck attributes to the Truck class.

## Homework

### Homework 1

You are looking for a new apartment in Berlin.
- Create a class Address that will have the street, number, zipCode and city as attributes
- Create a constructor that have as parameters all the attributes of the Address.
- Create a class Apartment that will contain the following attributes: numberOfRooms, numberOfBathrooms, hasTerace, hasKeller, surface, isAvailable, address.
- The attributes hasTerrace, hasKeller and isAvailable are boolean values
- Create a constructor that have as parameters all the attributes of the apartment.
- Create a method that prints all the attributes of the appartment, including the address.
- In the main method of a different class create 3 apartments and print in the console the characteristics of the apartment

### Homework 2

- Let's go back to our Robot exercise!

- There are three different types of robots: robots that can fly, robot that can run and robot that can swim. Each one of them can only do one activity: running, swimming or flying. Extend your Robot class to support them and make sure that they have a method to fly, run or swim a given distance. How can you approach the problem? Should all robots have a fly(int distance) method?


