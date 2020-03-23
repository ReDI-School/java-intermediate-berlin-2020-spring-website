# 07 - OOP and Overloading
<Teacher name="Michele"></Teacher>

## Goals
- Know most parts of a method declaration
- Understand method construction
- Knowing what **overloading** is!

## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/1aWKES_gmxhT5ltSrmzAIFcvXKxmrBBCOTuil5pm8uMA/embed"></GoogleSlides>

## Recap

Remember - one file per class, one class per file, and always with the same name!

```java
Main.java
==========
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

Student.java
=============
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
