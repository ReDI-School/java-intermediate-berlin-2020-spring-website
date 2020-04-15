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

### Exercise 2

Write a static method _randomSet_ that will return a HashSet containing a collection of n unique 
random numbers in range 0-100. 
In the _main_ method iterate over the returned Set and print each number multiplied by 2.
Where n is a number of random elements in set.

### Exercise 3

Change data type in previous exercise from _HashSet_ to _TreeSet_. What is the difference?

### Exercise 4

Write a static method _intersection_ that will return an intersection of two sets given by parameters. 
Note - sets given by parameters may not be modified.

### Exercise 5

Write a static method _union_ that will return an union of two sets given by parameters. 
Note - sets given by parameters may not be modified.

### Exercise 6

Write a static method _difference_ that will return a difference between two sets given by parameters. 
Note - sets given by parameters may not be modified.

### Exercise 7

Create a TreeSet containing integers that will maintain descending order of numbers. 
Hint: Look at alternative TreeSet constructors.

## Homework

### Exercise 1

Write a static method _symetricDifference_ that will return the symetric difference between t
wo sets given by parameters. 
Note - sets given by parameters may not be modified.
 
### Exercise 2 

Write a method that takes an array with integers and return an array of unique values of the array

### Exercise 3 

Write a method that takes a String and returns all unique characters of this String

### Exercise 4 (Optional)

Write a method that takes a String and returns all duplicate characters of this String
