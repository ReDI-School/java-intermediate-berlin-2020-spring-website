# 08 - OOP Recap
<Teacher name="Flo"></Teacher>

## Goals
- Know most parts of a method declaration
- Understand method construction
- Knowing what **overloading** is!

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vQknvfUWxCQYPD1uRjxbaaDfG5XJBuTt2GEG0q_DYBTNb3Po26Lv7tl7RE5iMudkHB0HbPtpAJ-eOTU/embed"></GoogleSlides>

## Recap

Remember - one file per class, one class per file, and always with the same name (file  and class)!
Class names are upper case, method name are lower case. Both use camelCase afterwards.

#### Main.java
```java
public class Main {
  public static void main(String[] args) {
    Student bob = new Student("Bob", 36, false, "Berlin");
    Student alice = new Student("Alice", 36, true, "Berlin");
    Student john = new Student("John", 36, true, "Berlin");
    Student jane = new Student("Jane", 36, false, "Berlin");

    bob.friends.add(alice);
    bob.friends.add(jane);

    alice.friends.add(bob);
    alice.friends.add(jane);

    john.friends.add(jane);

    jane.friends.add(john);
    jane.friends.add(alice);
    jane.friends.add(bob);

    bob.introduce();
    alice.introduce();
    john.introduce();
    jane.introduce();
  }
}
```

#### Student.java

```java
import java.util.ArrayList;

public class Student {
  public String name;
  public int age;
  public boolean single;
  public String city;
  public ArrayList<Student> friends;

  public Student(String name, int age, boolean single, String city) {
    this.name = name;
    this.age = age;
    this.single = single;
    this.city = city;
    this.friends = new ArrayList<>();
  }

  public void introduce() {
    System.out.println("---");
    System.out.println("My name is " + this.name);
    System.out.println("I'm " + this.age + " years old");
    if (this.single) {
      System.out.println("I'm single");
    } else {
      System.out.println("I'm in a relationship ^_^ ");
    }
    System.out.println("My friends are:");
    for (Student s : friends) {
      System.out.println(s.name);
    }
  }
}

```

## Exercise
#### 1 - Adding a constructor
Add a constructor that takes an already-made list of friends in as the last argument.

#### 2 - controlling the insertion of the friends
We assume all students have different names for now.

The coders working in the administration department are using our `Student` class, but are a bit messy, and regularly end up inserting wrong stuff in the friends list. For example, they insert the same friend twice, or the student itself as their own friend!

```java
jane.friends.add(bob);
jane.friends.add(bob);
jane.friends.add(jane);
```

All of these calls are valid, but we don't want to duplicates in the list, and we definitely don't want students to be friends with themselves.

Discuss how the `Student` class can be improved to fix this behavior, and check in the box below to figure out how to go forward.

<Solution>

Add an `addFriend` method to the `Student` class. The method should take a Student as input and only add it to the list if the name doesn't match the one of the student themselves or is not in the list already.

</Solution>


#### 3 - overloading our first method!
We want to add best friends into our model! Each student can only have one best friend. Overload the method you added in step 2, adding a boolean defining whether the inserted friend is the best friend.

- What should happen if a best friend is already defined? Don't search for fancy solutions around, use what you know. And talk with your group!
- Remember to change the `introduce` method to display the best friend!

#### 4 - Complex - not a must have!
If you want a challenge, implement a method that given a list of students and two names returns
the Integer over how many corners they know each other.

- Bob knows Alice, Alice knows Jane => method(students, Bob, Jane) => 2
- Bob knows Alice => method(students, Bob, Alice) => 1
- Bob knows Alice, Alice knows Jane, Jane knows Peter => method(students, Bob, Peter) => 3

Bonus: Where does this method fit best? Should this be part of the Main, the Student class or a new one?

#### 5 Math!
Let's calulate the area of basic shapes. Write the following classes:

- Circle, Rectangle, Triangle
- All should receive the needed data, e.g. the radius of the circle, via a constructor
- All should have a method `getArea` which calulates the area of the shape

#### 6 - Let's get into Music!
Write a program that let's you store your music!
The basic entity (class) should be a track.
- A track has a name,  numberOfSeconds (length), an Artist and a publishing year.
- An Artist has a name and a label name where he has a contract.
- A track can appear on one or more Albums. An Album has a list of tracks, a Name and an Artist.
- If you don't know how to continue/have unclear relationships -> discuss!

#### 7 - Music -> but a bit more complex!
Write a class MusicStore that has a list of Albums. It also has the following methods:
- getAlbumsOfArtist: Given an Artist it returns all Albums that are available in the store
- getAlbumsOfTrack: Given a Track it returns all Albums where this track appears on
- getLabelOfArtist: Given an Artist it returns the label of the artist
