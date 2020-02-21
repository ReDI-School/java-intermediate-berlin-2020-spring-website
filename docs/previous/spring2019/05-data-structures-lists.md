# 05 - Data Structures: Lists

<Teacher name="Anca"></Teacher>

## Goals
- Understand the concept of lists in programming
- Make exercises with Java implementation of lists

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vSr6F6309N3wBgzfe9wGyP-vbW7q794IycXIBDTG0yUwONrLYB3Z3S0EoDnv3-B4D0vOqb8pFLU6Zgp/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1
Build a train using `ArrayList` and `LinkedList`. Create an `ArrayList` that holds the waggons, then create a `LinkedList` that contains the waggons and has also a locomotive. Print the train in the console.

<Solution>
```java
public static void main(String[] args) {
        ArrayList<String> waggons = new ArrayList<String>(Arrays.asList("wagon1", "wagon2", "wagon3"));

        LinkedList<String> train = new LinkedList<String>(waggons);

        train.addFirst("locomotive");

        for (String node : train) {
            System.out.print(node + " ");
        }
}
```
</Solution>

### Exercise 2
Write a method that returns the Fibonacci sequence. The size of the sequence to be generated should be given as a parameter.

<Solution>
```java
public static ArrayList<Integer> getFibonacciSequence(int numberOfItems) {
    ArrayList<Integer> fibonacci = new ArrayList<>(Arrays.asList(1,1));

    for (int i = 2; i < numberOfItems; i++) {
        fibonacci.add(fibonacci.get(i - 1) + fibonacci.get(i - 2));
    }

    return fibonacci;
}
```
</Solution>

### Exercise 3
Create a method that checks if 2 lists have the same items.
If the 2 lists have the same items, print in the console `The lists are identical` otherwise print `The lists are different`.

<Solution>
```java
public static boolean areListsIdentical(ArrayList<String> list1, ArrayList<String> list2) {
    if (list1.size() != list2.size()) {
        return false;
    }
    
    if (!list1.containsAll(list2)) {
        return false;
    }

    return true;
}
```
</Solution>

### Exercise 4
Create a method that generates a matrix using Lists. The rows will have ascending sizes.
First row will have size 1, second size 2 and so one. Give the number of rows as a parameter to the method. 
i.e. for a matrix of size 3, the matrix should look like this:

```
0
0 0
0 0 0
```

<Solution>
```java
public static void main(String[] args) {
    ArrayList<ArrayList<Integer>> matrix = generateMatrix(5);

    //iterate trough the rows
    for (int i = 0; i < matrix.size(); i++) {
        //get row one by one at position i
        ArrayList<Integer> row = matrix.get(i);
        // iterate trough the items of the row (columns) and print
        for (int j = 0; j < row.size(); j++) {
            System.out.print(row.get(j) + " ");
        }
        System.out.println();
    }
}

public static ArrayList<ArrayList<Integer>> generateMatrix(int size) {
    ArrayList<ArrayList<Integer>> matrix = new ArrayList<>(size);
    //iterate trough the number of rows
    for (int i = 0; i < size; i++) {
        // create a new ArrayList for each row, with i number of items
        ArrayList<Integer> row = new ArrayList<>(i);
        for (int j = 0; j <= i; j++) {
            row.add(0);
        }
        matrix.add(row);
    }
    return matrix;
}
```
</Solution>

## Homework

1. Implement a Java program that interleaves 2 lists in a third list.
For example, given `listA = {1,2,3}` and `listB = {4,5,6}`, `listC` should be `listC = {1,4,2,5,3,6}`

2. Given a list, print in the console the sorted list. Then, reverse the list and print it to the console.

**Example**:  

Given the following list

`list = {5, 2, 10, 6, 8, 3}`

The sorted list will be:

`sotedList = {2, 3, 5, 6, 8, 10}`

The reversed list will be:

`reveresedList = {10, 8, 6, 5, 3, 2}`

**Advanced**

If you did OOP before, you can try to do some exercises with an actual implementation of the list. 
- [https://users.csc.calpoly.edu/~jdalbey/103/Demo/LinkedListExercises/](https://users.csc.calpoly.edu/~jdalbey/103/Demo/LinkedListExercises/)

## Additional Resources
- [📺 The Fibonacci Sequence: Nature's Code](https://www.youtube.com/watch?v=wTlw7fNcO-0)
- [📖 Linked List | Set 1 (Introduction)](https://www.geeksforgeeks.org/linked-list-set-1-introduction/)
- [📖 Doubly Linked List | Set 1 (Introduction and Insertion)](https://www.geeksforgeeks.org/doubly-linked-list/)
- [📖 Circular Linked List | Set 1 (Introduction and Applications)](https://www.geeksforgeeks.org/circular-linked-list/)
- [W3 Schools Exercises ArrayLists Exercises](https://www.w3resource.com/java-exercises/collection/index.php#arraylist)
- [W3 Schools Exercises LinkedList Exercises](https://www.w3resource.com/java-exercises/collection/index.php#linkedlist)


