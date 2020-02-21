# 18 - Exceptions II

<Teacher name="Ahmed"></Teacher>

## Goals
- define custom exceptions
- use custome exception to control program error flow


## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/1mwZrQB23vDYbxyCAYoI9ohjCvNuAnnDyMzc0hf7KLGo/embed?start=false&loop=false&delayms=3000"></GoogleSlides>


## Hint: read input from user
```java
Scanner scanner = new Scanner(System.in);
String userInput = scanner.nextLine();
```
## Exercises

### Exercise 1 - Define  simple Exception to check phone number provided by the user . if the length is less than 14 digits and doesnt start with plus.
then trow InvalidPhoneNumberException
- In your `main` method, use a `Scanner` to get a user input, and check the above conditions

### Exercise 2 - read Student properties (first name, last name, age , course) from user conole input as above throw customized exceptions in the below cases
 - first name lenght is below 3 characters
 - last name length is below 3 characters
 - age is less than zero

### Excercise 3 - lets create a simple (Rock, Paper, Scissor) .if you dont know the game here are the rule 
 - Rock beats Scissor
 - Scissor beats Paper
 - Paper beats Rock
so the game asks the user to choose from inputs( R, P, S) and then the computer play a random choice from the three options. and the program should calculate the final result as per above ruls
your program should utilize the use exceptions that we learned so far

## Additional Resources

- [StackOverflow - Understanding checked vs unchecked exceptions](https://stackoverflow.com/questions/6115896/understanding-checked-vs-unchecked-exceptions-in-java)
- [StackOverflow - Differences between Exception and Error](https://stackoverflow.com/questions/912334/differences-between-exception-and-error)
- [Java Exceptions on Baeldung](https://www.baeldung.com/java-exceptions)
