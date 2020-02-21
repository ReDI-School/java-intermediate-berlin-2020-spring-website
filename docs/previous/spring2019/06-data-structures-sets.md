# 06 - Data Structures: Sets

<Teacher name="Anca"></Teacher>

## Goals

- learn what are sets and math theory behind it
- learn when sets can be used
- how sets are different from the lists
- get familiar with two implementations coming in JDK: `HashSet`, `TreeSet`
- get familiar with the most commonly used methods on sets

## Tips

### How to generate a random number?

To return a random number from range between `0` and `50` (exclusive):

```java

Random r = new Random();
int randomNumber = r.nextInt(50);
```


## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vQ6Ln4aVAC3SEQDE6ZzwnCqSI7pRsVoXKzFsFg8Z920jCjHvSRxxYfWcyzEvjwAaERJ6yhF0HbArHdX/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Exercises

### Exercise 1

In `main` method
1. Create a new HashSet of strings, add `banana`, `apple`, `orange`. 
2. Print content of sets using for loop
3. Clear the set.
4. Add one more element `grapes`.
5. Check if set is empty, and if it’s not empty print “I am not empty!”.
What is the order of elements after adding them to HashSet?

<Solution>
```java
   public static void main(String[] args) {
        HashSet<String> fruits = new HashSet<>();
        fruits.add("banana");
        fruits.add("apple");
        fruits.add("oranges");

        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        fruits.clear();
        System.out.println("Printing cleared set: ");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        fruits.add("grapes");

        System.out.println("Printing after adding grapes:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }

        if (!fruits.isEmpty()) {
            System.out.println("I am not empty!");
        }
    }
```

</Solution>


### Exercise 2
Write a static method `randomSet` that will return a `HashSet` containing a collection of `n` unique random numbers in range 0-100.
In the main method iterate over the returned Set and print each number multiplied by 2.

<Solution>
```java
   public static HashSet<Integer> randomSet(int nr) {
        HashSet<Integer> randomSet = new HashSet<>();

        Random r = new Random();

        while (randomSet.size() < nr) {
            randomSet.add(r.nextInt(100));
        }

        return randomSet;
    }
```
</Solution>

Where `n` is a number of random elements in set.

### Exercise 3

Change data type in previous exercise from HashSet to TreeSet. 
What is the difference?

<Solution>
```java
    public static TreeSet<Integer> randomSet(int nr) {
        TreeSet<Integer> randomSet = new TreeSet<>();

        Random r = new Random();

        while (randomSet.size() < nr) {
            randomSet.add(r.nextInt(100));
        }

        return randomSet;
    }
```
</Solution>

### Exercise 4

Write a static method `intersection` that will return an intersection of two sets given by parameters. **Note** - sets given by parameters may not be modified.

<Solution>
```java
    public static Set<Integer> intersection(Set<Integer> set1, Set<Integer> set2) {
        Set<Integer> intersection = new HashSet<>(set1);

        intersection.retainAll(set2);

        return intersection;
    }
```
</Solution>

### Exercise 5

Write a static method `union` that will return an union of two sets given by parameters. **Note** - sets given by parameters may not be modified.

<Solution>
```java
    public static Set<Integer> union(Set<Integer> set1, Set<Integer> set2) {
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);

        return union;
    }
```
</Solution>

### Exercise 6

Write a static method `difference` that will return a difference between two sets given by parameters. 
**Note** - sets given by parameters may not be modified.

<Solution>
```java
    public static Set<Integer> difference(Set<Integer> set1, Set<Integer> set2) {
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);

        return difference;
    }
```
</Solution>

### Exercise 7

Write a static method `symetricDifference` that will return the symetric difference between two sets given by parameters. 
**Note** - sets given by parameters may not be modified.

<Solution>
```java
    public static Set<Integer> symetricDifference(Set<Integer> set1, Set<Integer> set2) {
        Set<Integer> union = new HashSet<>(set1);
        union.retainAll(set2);

        Set<Integer> symetricDifference = new HashSet<>(set1);
        symetricDifference.addAll(set2);
        symetricDifference.removeAll(union);

        return symetricDifference;
    }
```
</Solution>

### Exercise 8

Create a TreeSet containing integers that will maintain descending order of numbers.
Hint: Look at alternative TreeSet constructors.

<Solution>
```java
    public static void main(String[] args) {
        //Creates a tree set by using a comparator. The comparator is used to sort the elements,
        Comparator<Integer> comp = (Integer o1, Integer o2) -> (o2.compareTo(o1));
        Set<Integer> ts = new TreeSet<>(comp);
        ts.addAll(Arrays.asList(1, 4, 7, 8, 5));
        System.out.println(ts);

        //Another method is to use the methode "descendingSet()".
        //This methods will return the items from the set in a descending order.
        TreeSet<Integer> testSet = new TreeSet<>(Arrays.asList(1, 4, 7, 8, 5));
        TreeSet<Integer> descendingOrderTreeSet = new TreeSet<>(testSet.descendingSet());

        System.out.println(descendingOrderTreeSet);
    }
```
</Solution>



## Additional Resources

 - [BaseCS: Set Theory: the Method To Database Madness](https://medium.com/basecs/set-theory-the-method-to-database-madness-5ec4b4f05d79)
 - [BaseCS Podcast: S4:E5 - "Sets, sets, everywhere"](https://dev.to/basecspodcast/s4e5--sets-sets-everywhere)
 - [W3 Schools Exercises Set Exercises](https://www.w3resource.com/java-exercises/collection/index.php#hashset)