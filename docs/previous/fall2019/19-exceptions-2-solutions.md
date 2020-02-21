# 18 - Exception II (Solutions)

<Teacher name="Ahmed"></Teacher>


## Exercises solutions

### Exercise 1 - Define  simple Exception to check phone number provided by the user . if the length is less than 14 digits and doesnt start with plus.
then trow InvalidPhoneNumberException
- In your `main` method, use a `Scanner` to get a user input, and check the above conditions

<Solution>
```java
package main;

import java.util.Scanner;

public class Main {

    public static void main(String [] args) throws InvalidNumberException{

        Scanner in = new Scanner(System.in);

        String phoneNumber = in.nextLine();

        checkNumber(phoneNumber);

        System.out.println("number is correct");
    }

    public static void checkNumber(String phoneNumber) throws InvalidNumberException{
        boolean isInvalidNumber = false;
        // check number length
        if(phoneNumber.length() != 14){
            throw new InvalidNumberException("phone number is invalid");
        } else if(phoneNumber.charAt(0) != '+') {
            throw new InvalidNumberException("phone number is invalid");
        }


    }
}

package main;

public class InvalidNumberException extends Exception {

    public InvalidNumberException(String message) {
        super(message);
    }
}
```
</Solution>

### Exercise 2 - read Student properties (first name, last name, age , course) from user conole input as above throw customized exceptions in the below cases
<Solution>
```java
package main;

import java.util.Scanner;

public class Main {

    public static void main(String [] args) throws Exception{
        Scanner in = new Scanner(System.in);

        System.out.println("enter first name");
        String firstName = in.nextLine();
        checkFirstName(firstName);
        System.out.println("enter last name");
        String lastName = in.nextLine();
        checkLastName(lastName);
        System.out.println("enter course name");
        String courseName = in.nextLine();
        System.out.println("enter student age");
        int age = in.nextInt();
        checkAge(age);




        // if code program reach here. then there is no exception
      Student student =  new Student(firstName, lastName, courseName, age);
      System.out.println(student);




    }
    private static void checkFirstName(String firstName) throws InvalidNameException {
        if(firstName.length() < 3) {
            throw new InvalidNameException("first name is not valid");
        }
    }

    private static void checkLastName(String lastName) throws InvalidNameException {
        if(lastName.length() < 3) {
            throw new InvalidNameException("lastName name is not valid");
        }
    }

    private static void checkAge(int age) throws InvalidAgeException{
        if(age < 0)
            throw new InvalidAgeException("Age is invalid. should be more than 0");
    }
}




public class InvalidNameException extends Exception {

    public InvalidNameException(String errorMessage) {
        super(errorMessage);
    }
}

package main;

public class InvalidAgeException extends Exception{


    public InvalidAgeException(String message) {
        super(message);
    }
}


```
</Solution>

### Excercise 3 - lets create a simple (Rock, Paper, Scissor) .if you dont know the game here are the rule 
 - Rock beats Scissor
 - Scissor beats Paper
 - Paper beats Rock
so the game asks the user to choose from inputs( R, P, S) and then the computer play a random choice from the three options. and the program should calculate the final result as per above ruls
your program should utilize the use exceptions that we learned so far

<Solution>
```java
package main;

import java.util.Random;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner in = new Scanner(System.in);

        System.out.println("Welcome to Rock Paper Scissor game");
        System.out.println("To play. please choose R, P ,S");
        String userInput = in.nextLine();
        Action userAction = getUserAction(userInput);
        System.out.println("you played: " + userAction);
        System.out.println("Computer choose "+ getComputerAction());

        printResult(userAction, getComputerAction());


    }

    private static Action getUserAction(String userInput) throws InvalidActionException {
        if (!userInput.equals("R") && !userInput.equals("P") && !userInput.equals("S")) {
            throw new InvalidActionException("Invalid action. you should choose from (R,P,S) you choose " + userInput);
        }
        return Action.valueOf(userInput);
    }

    private static void printResult(Action userAction, Action computerAction) {
        if (userAction == computerAction) {
            System.out.println("DRAW");
        } else if (Action.beats(userAction) == computerAction) {
            System.out.println("You win");
        } else {
            System.out.println("Computer wins");
        }
    }

    private static  Action getComputerAction() {
        Random random = new Random();

        switch (random.nextInt(3)) {
            case 0:
                return Action.R;

            case 1:
                return Action.P;

            case 2:
                return Action.S;
            default:
                return Action.S;

        }
    }
}



public class InvalidActionException extends Exception{

    public InvalidActionException(String message) {
        super(message);
    }

}

public enum Action {

    R("ROCK"),
    P("Paper"),
    S("Scissor");

    Action(String description) {
        this.description = description;
    }

    private String description;

    public static Action beats(Action input) {
        if (input == R) {
            return Action.S;
        } else if (input == S) {
            return Action.P;
        } else {
            return Action.R;
        }
    }
}

```
</Solution>
