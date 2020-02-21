# 11 - OOP - Encapsulation

<Teacher name="Maciej"></Teacher>

## Goals
- Understand what is encapsulation and why do we need it
- Understand visibility modifiers: public, private, protected, default
- Learn how to design classes so that they hide their internals

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vRknDL6o4dPTqqiAmWu-OKEXmdBBwxDmDkICxjHuJdiQhPX4mRPH5-BOSkrVgPKvqBXx8aPqnKhS-S3/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1 - Plane

There is a plane. Plane can onboard passengers. Whenever plane takes off the date of taking off has to be updated. Same with landing.

Below is an implementation where everything is public, there are no methods and every operation requires changing the fields directly.

Make following code OOP friendly 😀

```java
class Plane {
    public List<String> passengers;
    public int maxPassengers;
    public Date lastTimeTookOf;
    public Date lastTimeLanded;
}
```

```java
public class MyApp {

    public static void main(String[] args) throws InterruptedException {
        // there is a plance with max 10 passengers
        Plane plane = new Plane();
        plane.maxPassengers = 10;
        // add passengers on the list
        plane.passengers = new ArrayList<>();
        plane.passengers.add("John");
        plane.passengers.add("Steve");
        plane.passengers.add("Anna");
        // plane takes off
        plane.lastTimeTookOf = new Date();
        // flying.....
        Thread.sleep(5000l);
        // plane has landed
        plane.passengers.clear();
        plane.lastTimeLanded = new Date();
    }
}
```

<Solution>
```java
package com.redi;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Plane {
    private List<String> passengers;
    private int maxPassengers;
    private Date lastTimeTookOf;
    private Date lastTimeLanded;

    public Plane(int maxPassengers) {
        this.maxPassengers = maxPassengers;
        this.passengers = new ArrayList<>();
    }

    public void onboard(String passenger) {
        this.passengers.add(passenger);
    }

    public void takeOff() {
        this.lastTimeTookOf = new Date();
    }

    public void land() {
        this.lastTimeLanded = new Date();
        this.passengers.clear();
    }

    public Date getLastTimeLanded() {
        return lastTimeLanded;
    }

    public List<String> getPassengers() {
        return passengers;
    }
}
```

```java
package com.redi;

public class Main {

    public static void main(String[] args) throws InterruptedException {
        // there is a plane with max 10 passengers
        Plane plane = new Plane(10);
        // add passengers on the list
        plane.onboard("John");
        plane.onboard("Steve");
        plane.onboard("Anna");
        // plane takes off
        plane.takeOff();
        // flying.....
        Thread.sleep(5000l);
        // plane has landed
        plane.land();

        System.out.println(plane.getLastTimeLanded());
    }
}
```
</Solution>

### Exercise 2 - Kindergarten

Design classes used for Kindergarten application:

- Kindergarten has a name, address, and maximum number of children they can accept
- Name address can be changed, maximum number of children cannot
- Name and address are required when creating a Kindergarten
- It has to be possible to register in kindergarten by providing child name and age
- Kindergarten should have a method returning all registered children names
- Kindergarten should have a method telling if there are available places.

### Exercise 3 - TODO application

We are working on todo list application. Application has single todo list containg todo items.

- each todoitem contains a text, time it was created and time it was last time updated
- todo item can be either uncompleted or completed
- uncompleted todo item can be "completed" by checking a checkbox (if we would have UI)
- todo list can contain maximum 10 todo items.

Design above solution using OOP concepts you are familiar with: classes, objects, encapsulation, composition/aggregation.

In the `Main` class create a new todo list, add todo items until you reach the maximum. Complete & uncomplete few of todo items.

### Exercise 4 - Animals

Design classes representing animals: Cat, Dog, Squirell. Both should have a method `String describe()` that returns a string like "I am a Cat, I was created at ..."

- can we use inheritance?
- where to store the time object was cretated?
- what access modifiers and where should you use?


## Additional Resources

- [Encapsulation on Wikipedia](https://en.wikipedia.org/wiki/Encapsulation)
- most of tutorials you will find are going be only about getters & setters. That's not what encapsulation is about.
