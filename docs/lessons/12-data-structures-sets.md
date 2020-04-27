# 12 - Data Structures: Sets

<Teacher name="Michele"></Teacher>
<Teacher name="Alina"></Teacher>

## Goals

- Learn what sets are 
- Learn when to use sets
- Compare Sets vs Lists
- Java Set Implementations(HashSet & TreeSet)
- Common used sets methods (Set theory)

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1i5Kn4MFewriPDgy7kZV2rRZo9JWUf5cFVHd23-_D420/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Useful links
Sets
 - <https://docs.oracle.com/javase/9/docs/api/java/util/Set.html> 
 - <http://tutorials.jenkov.com/java-collections/set.html>
 - <https://www.geeksforgeeks.org/set-in-java/>

### Exercise 1

In _main_ method

- Create a new HashSet of strings, add _banana_, _apple_, _orange_.
- Print content of sets using for loop
- Clear the set.
- Add one more element _grapes_.
- Check if set is empty, and if it’s not empty print “I am not empty!”. What is the order of elements after adding 
them to HashSet?

<Solution>
```java
import java.util.*;

public class Main {
  public static void main(String[] args) {

    // Create a new HashSet of strings, add banana, apple, orange.
    Set<String> fruits = new HashSet<>();
    fruits.add("banana");
    fruits.add("apple");
    fruits.add("orange");

    // Print content of sets using for loop
    for (String fruit : fruits) {
      System.out.println(fruit);
    }

    // Clear the set.
    fruits.clear();

    // Add one more element grapes.
    fruits.add("grapes");

    // Check if set is empty, and if it’s not empty print “I am not empty!”.
    // What is the order of elements after adding them to HashSet?
    if (!fruits.isEmpty()) {
      System.out.println("I am not empty!");
      System.out.println(fruits);
    }
  }
}
```
</Solution>

### Exercise 2

Write a static method _randomSet_ that will return a HashSet containing a collection of n unique 
random numbers in range 0-100. 
In the _main_ method iterate over the returned Set and print each number multiplied by 2.
Where n is a number of random elements in set.


<Solution>
```java
  // Write a static method randomSet that will return a HashSet
  // containing a collection of n unique random numbers in range 0-100.
  public static HashSet<Integer> randomSet(Integer n) {
    HashSet<Integer> randomSet = new HashSet<>(); // or TreeSet
    Random randomGenerator = new Random();
    while (randomSet.size() <= n) {
      randomSet.add(randomGenerator.nextInt(100));
    }

    return randomSet;
  }

  // In the main method iterate over the returned Set and print
  // each number multiplied by 2.
  public static void someotherMain(String[] args) {
    Random randomGenerator = new Random();
    Set<Integer> randomSet = randomSet(randomGenerator.nextInt());
    for (Integer randomNum : randomSet) {
      System.out.println(randomNum * 2);
    }
  }
```
</Solution>

### Exercise 3

Change data type in previous exercise from _HashSet_ to _TreeSet_. What is the difference?

### Exercise 4

Write a static method _intersection_ that will return an intersection of two sets given by parameters. 
Note - sets given by parameters may not be modified.

<Solution>
```java
  // Write a static method intersection that will return an intersection
  // of two sets given by parameters. Note - sets given by parameters may not be modified.
  public static <A> Set<A> intersection(Set<A> set1, Set<A> set2) {
    // create a copy of the first set
    Set<A> intersection = new HashSet<>(set1);

    // only keep elements that are also in the second set
    intersection.retainAll(set2);

    return intersection;
  }

  // algorithmic solution that doesn't use the retainAll method from Java,
  // you likely don't want to do this, java's implementation is likely efficient
  public static <A> Set<A> intersection2(Set<A> set1, Set<A> set2) {
    Set<A> intersection = new HashSet<>();

    for (A item : set1) {
      if (set2.contains(item)) {
        intersection.add(item);
      }
    }

    return intersection;
  }
```
</Solution>

### Exercise 5

Write a static method _union_ that will return an union of two sets given by parameters. 
Note - sets given by parameters may not be modified.

<Solution>
```java
  // Write a static method union that will return an union of two sets given
  // by parameters. Note - sets given by parameters may not be modified.
  public static <A> Set<A> union(Set<A> set1, Set<A> set2) {
    Set<A> union = new HashSet<>(set1);
    union.addAll(set2);

    return union;
  }
```
</Solution>

### Exercise 6

Write a static method _difference_ that will return a difference between two sets given by parameters. 
Note - sets given by parameters may not be modified.

<Solution>
```java
  // Write a static method difference that will return a difference between
  // two sets given by parameters. Note - sets given by parameters may not be modified.
  public static <A> Set<A> difference(Set<A> set1, Set<A> set2) {
    Set<A> difference = new HashSet<>(set1);
    difference.removeAll(set2);

    return difference;
  }
```
</Solution>

### Exercise 7

Create a TreeSet containing integers that will maintain descending order of numbers. 
Hint: Look at alternative TreeSet constructors.

<Solution>
```java
  public static void main(String[] args) {
    // this can be done in many ways!
    // 1. using an handy help from java - but what does this really mean?
    TreeSet<Integer> inversedOrderSet = new TreeSet<>(Comparator.reverseOrder());

    // 2. using a funny notation that maybe makes it more clear
    // for each pair of numbers in the set, (a, b) use the result of the compareTo function to sort them
    // what does the compareTo function do? how is it defined?
    // you can learn more at the following link or wait for a few classes
    // https://docs.oracle.com/javase/tutorial/collections/interfaces/order.html
    TreeSet<Integer> inversedOrderSet2 = new TreeSet<>((a, b) -> b.compareTo(a));

    // 3. the previous is only a shorthand for a longer implementation
    Comparator<Integer> comparator = new Comparator<Integer>() {
      @Override
      public int compare(Integer a, Integer b) {
        return b.compareTo(a);
      }
    };
    TreeSet<Integer> inversedOrderSet3 = new TreeSet<>(comparator);
  }
```
</Solution>

## Homework

### Exercise 1

Write a static method _symetricDifference_ that will return the symetric difference between t
wo sets given by parameters. 
Note - sets given by parameters may not be modified.

<Solution>
```java
  // Write a static method symetricDifference that will return the symetric difference 
  // between two sets given by parameters. Note - sets given by parameters may not be modified.
  public static <A> Set<A> symmetricDifference(Set<A> set1, Set<A> set2) {
    // the symmetric difference is the difference between the union
    // of the two sets and their intersection
    return difference(union(set1, set2), intersection(set1, set2));
  }
```
</Solution>
 
### Exercise 2 

Write a method that takes an array with integers and return an array of unique values of the array

<Solution>
```java
  // Write a method that takes an array with integers and return
  // an array of unique values of the array
  public Integer[] unique(Integer[] input) {
    // we put all values from the input array into a set
    Set<Integer> uniqueValues = new HashSet<>(Arrays.asList(input));

    // and we convert the set back into an array!
    Integer[] uniqueValuesOutput = new Integer[uniqueValues.size()];
    uniqueValues.toArray(uniqueValuesOutput);
    return uniqueValuesOutput;
  }
```
</Solution>

### Exercise 3 

Write a method that takes a String and returns all unique characters of this String

<Solution>
```java
  // Write a method that takes a String and returns all unique
  // characters of this String
  public Character[] unique(String input) {
    // we put all values from the input array into a set
    Set<Character> uniqueValues = new HashSet<>();
    for (char c : input.toCharArray()) {
      uniqueValues.add(c);
    }

    // and we convert the set back into an array!
    Character[] uniqueValuesOutput = new Character[uniqueValues.size()];
    uniqueValues.toArray(uniqueValuesOutput);
    return uniqueValuesOutput;
  }
```
</Solution>

### Exercise 4 (Optional)

Write a method that takes a String and returns all duplicate characters of this String

<Solution>
```java
  // Write a method that takes a String and returns all
  // duplicate characters of this String
  public Character[] duplicates(String input) {
    // this will store all characters
    Set<Character> allChars = new HashSet<>();
    // this will store anything that is duplicated
    Set<Character> duplicates = new HashSet<>();
    
    for (char c : input.toCharArray()) {
      // if we've seen the character already, it's a duplicate!
      if (allChars.contains(c)) duplicates.add(c);
      // otherwise, it's a new character
      else allChars.add(c);
    }

    Character[] duplicateOutput = new Character[duplicates.size()];
    duplicates.toArray(duplicateOutput);
    return duplicateOutput;
  }
```
</Solution>