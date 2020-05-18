# 18 - Exceptions II

<Teacher name="Sunday"></Teacher>

## Goals
- Define custom exceptions
- Use custom exception to control program error flow


## Slides
<GoogleSlides src="https://docs.google.com/presentation/d/1AY9347IA0fLUhOMt3rC4idPK2CV2CVlnjE-Td4M7qWk/embed?start=false&loop=false&delayms=3000"></GoogleSlides>


## Hint: read input from user
```java
Scanner scanner = new Scanner(System.in);
String userInput = scanner.nextLine();
```
## Exercises

### Define 

### Exercise 1 -  **Checked** Exception

Define a method `checkPhoneNumber` which will be used to check a phone number and throw a custom 
**checked** exception if the phone number is not valid. A phone number is valid if:

- Length is exactly 14
- The first character is +
- All the other characters are numerical digits

In this 

In your `main` method, use a `Scanner` to get a phone number input, and use the method `checkPhoneNumber` to validate the
input.

### Exercise 2 -  **Unchecked** Exception
Define a class User with properties:

- first name as String
- last name as String
- date of birth as array of int of lenth 3 such that:
    - the first item is the day of the month
    - the second item is the month of the year
    - the first item is the year

Define a method `checkUser` which will be used to check if a user provided is valid and throw a custom 
**unchecked** exception if the user is not valid. A user is valid if:

- first name length is between 10 and 20 characters with no whitespace
- last name length is between 10 and 20 characters with no whitespace
- User must be born in an odd month i.e. Jan, March, May, etc..
- User must be born in an even day i.e. 2, 4, 6, etc..
- User must be born in the 14th century

In your `main` method, use a `Scanner` to get a user input, and use the method `checkUser` to validate the
input.

### Exercise 3 - Rock, Paper, Scissors 
 - Rock beats Scissor
 - Scissor beats Paper
 - Paper beats Rock

The user enters one of three options (R, P, or S) and the computer picks one of the three options at random and the
program should print who won and how many rounds each person has won so far e.g:

```
Round #10 - Computer wins!
You: 4
Computer: 6
```

If the user enters the wrong option throw a custom exception that forces the application to crash.

## Additional Resources

- [StackOverflow - Understanding checked vs unchecked exceptions](https://stackoverflow.com/questions/6115896/understanding-checked-vs-unchecked-exceptions-in-java)
- [StackOverflow - Differences between Exception and Error](https://stackoverflow.com/questions/912334/differences-between-exception-and-error)
- [Java Exceptions on Baeldung](https://www.baeldung.com/java-exceptions)
