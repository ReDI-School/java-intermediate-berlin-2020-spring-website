# 20-21 - Unit Tests

<Teacher name="Anca"></Teacher>

## Goals
- Learn about different types of software testing
- Deep dive into unit tests - what is the purpose of unit tests
- Learn about libraries that helps you write unit tests

## Libraries
- [JUnit5](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api)
- [AssertJ](https://mvnrepository.com/artifact/org.assertj/assertj-core/3.12.2)

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTDaNHUgbipQAqTn6Jkb96NbQZEQ8PwcGYb1AryifB3mCQDOsQ0nip6XNm6TEDLStfRppEp1jXOYjUq/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1
Given the following operations, write unit tests to make sure they work as expected
Write test that test the behavior in the happy case and test that test exceptional behaviors (i.e. dividing by zero).

```@java
public class Operations {

    public int divide(int x, int y) {
        return x / y;
    }

    public int multiply(int x, int y) {
        return x * y;
    }

    public int sum(int x, int y) {
        return x + y;
    }

    public int difference(int x, int y) {
        return x - y;
    }
}

```


### Exercise 2
Given the following program with failing tests, implement the methods to make the tests pass. The tests should act like requirements for what your methods need to do. 
Clone the code from this repository 

[Gitthub repo](https://github.com/AncaTodirica/ReDi-unitTesting)

### Exercise 3
Given exercise 2 with passing tests, modify the tests to use [AssertJ](https://mvnrepository.com/artifact/org.assertj/assertj-core/3.12.2) library

### Homework
Given the previous exercises, add an expiration date to the products. Modify the inventory method to return only the products which are not expired. Add tests to make sure that you do not return expired products. Use AssertJ library in your test.  


## Additional Resources

 - [Junit Tutorial - tutorialpoint](https://www.tutorialspoint.com/junit/index.htm)
 - [Junit Tutorial - guru99](https://www.guru99.com/junit-tutorial.html)
 - [JUnit5 User Guide](https://junit.org/junit5/docs/current/user-guide/)
 - [Tests naming conventions](https://dzone.com/articles/7-popular-unit-test-naming)
 - [AssertJ](http://joel-costigliola.github.io/assertj/)
 

