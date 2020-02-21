# 08 - Essentials of OOP: Introduction

<Teacher name="Juan"></Teacher>

## Goals

- Learn about OOP concepts in General, what is it, why do we use it
- Overview of Classes, Objects, Interfaces, and their properties
- Overview of the Java language in regards to OOP syntax.
- Have a better appreciation for the Java Programming language, on what it attempts to accomplish.
- Use Google to your advantage


## Slides


<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vT_8aVeYyiETKm_fYJ2uAEp5plTgtt09Z8l9LyeFoDR8ztjCQFNJ75S0-f-CAEaJRb_S0DXN_NOQdWg/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Excercise 1
Try to explain in your own words the following: Types, Classes, Methods, JavaDoc, Fields, Properties, Objects, Interfaces, Abstract Classes, Modifiers, Literals.

### Excercise 2
Visit the java.lang package documentation and skim its classes and subpackages, do you familiarize yourself with the API? Play with your IDE to see if it has them all. 
Explore some of its classes and read the methods, see its return types.

Which method would you use if you wanted to find the cosine of a number?

### Excercise 3

Write the following classes from the following uml diagram
![uml diagram](https://www.ibm.com/developerworks/rational/library/content/RationalEdge/sep04/bell/bell_fig8.jpg)

[Image](https://www.ibm.com/developerworks/rational/library/content/RationalEdge/sep04/bell/index.html) taken from IBM

## Example 
Example of why to use OOP as an abstraction tool
### Problem: Write a program that finds out the nth prime number and print it on the console.
```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        int someNumber=Integer.parseInt(args[0]);
        int prime;
        String numbEnding=args[0]+"th";
        /* some code */
        System.out.printf("The %s number prime is %s",numbEnding,prime);
    }
}
```
We might start with something like this
Can you figure what it does?
```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        int someNumber=Integer.parseInt(args[0]);
        int prime;
        String numbEnding=args[0]+"th";
        while(someNumber-->0){
            prime=PrimeFinder.findPrimeAfter(prime);
        }
        System.out.printf("The %s number prime is %s",numbEnding,prime);
    }
}
```
Here we decide that instead of implementing the prime finder algorithm by ourselves we delegate the job to another class.
We also notice that our answers will look weird for when someNumber is 1 or 2, because `"first"` and `"second"` in English don't end with `"nd"` 

```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        int someNumber=Integer.parseInt(args[0]);
        int prime=1;
        String numbEnding=args[0];
        switch(someNumber%10){
           case 1:
                numbEnding+="st";
           break;
           case 2:
                numbEnding+="nd";
            break;
            default:
                numbEnding+="th";
        }
        while(someNumber-->0){
            prime=PrimeFinder.findPrimeAfter(prime);
        }
        System.out.printf("The %s number prime is %s",numbEnding,prime);
    }
}
```
In order to fix this issue of 1th and 2th appearing instead of 1st and 2nd we might have the idea to use a switch case statement.
This fixes the problem however the code doesn't look pretty.
```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        try{
            int someNumber=Integer.parseInt(args[0]);
            int prime=1;
            String numbEnding=args[0];
            switch(someNumber%10){
                case 1:
                    numbEnding+="st";
                break;
                case 2:
                    numbEnding+="nd";
                break;
                default:
                    numbEnding+="th";
            }
            while(someNumber-->0){
                prime=PrimeFinder.findPrimeAfter(prime);
            }
            System.out.printf("The %s number prime is %s",numbEnding,prime);
        }
            
        catch (NumberFormatException nfe) {
            System.out.println("You didn't provide a correct number format!");
        }
    }
}

```
Notice the signature of the [Integer.parseInt](https://docs.oracle.com/javase/7/docs/api/java/lang/Integer.html#parseInt(java.lang.String)
) method. You can see that it throws a `NumberFormatException` error when the number is not a well formatted number. For this reason we will use the try catch block

So now our application is complete and fully featured but we.re not happy with it
The reason for this is because there is a lot of logic code in the userbase application
What we want as software designers is to separate the logic code in different files so that the application is easily readable and understandable

```java
package somepackage;
public class Application {
    public static void main(String[] args) {
        try{
            int someNumber=Integer.parseInt(args[0]);
            String numbEnding=NumberLib.getOrdinalOf(args[0]);
            prime=PrimeFinder.findTheThPrime(someNumber);
            System.out.printf("The %s number prime is %s",numbEnding,prime);
        }          
        catch (NumberFormatException nfe) {
            System.out.println("You didn't provide a correct number format!");
        }
    }
}
```
Here we replaced the switch statment with the method NumberLib.getOrdinalOf this implementation doesn.t yet exist either but we know what it does, it converts integers to their ordinal representations
```
1->fist
2->second
```
Here we also replaced the while loop with a more sensible method for the problem this of course leaves even more work to be done to the nonexisting PrimeFinder and NumberLib classes, but that.s the price to pay to avoid technical debt.

Now we have a fully designed program that decides on the macro level how it interacts with the user, without actually solving the problem.  


## Additional Resources
- [Access Modifiers intro](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
- [Java Pocket chapter 8](https://www.oreilly.com/library/view/java-8-pocket/9781491901083/ch08.html)
- [Medium class vs abstract class](https://medium.com/heuristics/interface-vs-abstract-class-vs-concrete-class-196f20c3af9a)
- [Primitive Types](https://en.wikibooks.org/wiki/Java_Programming/Primitive_Types)
- [Java Interfaces](https://www.guru99.com/java-interface.html)
- [Software Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern)
