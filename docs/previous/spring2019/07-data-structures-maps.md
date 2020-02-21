# 07 - Data Structures: Maps

<Teacher name="Maciej"></Teacher>

## Goals

- learn the purpose of Maps and two most commonly used implementations: `HashMap` and `TreeMap`
- learn how `HashMap` is implemented internally
- **Practice!**

## Tips

### Class Properties

Class can have properties:

```java
class Main {
    private static String name = "Rachel";
}
```

Properties can be accessed from each method of the class:

```java
class Main {
    private static String name = "Rachel";

    static void foo() {
        System.out.println(name);
    }

    static void bar() {
        name = "Monica";
    }
}
```

### How to measure code execution time?

```java
long now = System.currentTimeMillis();
// some code
long end = System.currentTimeMillis();
System.out.println("Adding took: " + (end - now));
```

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTxfdDCDYSAlLe6MvV2W5pSMXCIQkWYT-TjatrThxFTwoOR_cvndYZdohOYDG5IiGlDoaLCqhqvjv44/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Recap Exercise

Measure if `LinkedList` or `ArrayList` is faster for:

- adding 1000000 numbers to a List
- getting an item from the middle of this list

## Common Map Operations

```java
// creating new map
Map<String, String> map = new HashMap<>();

// adding new element to the map
map.put("key1", "value1");
map.put("key2", "value2");

// getting element from map
String key = map.get("key2");

// getting all the keys
Set<String> keys = map.keySet();

// getting all the values
Collection<String> values = map.values();

// map size
map.size();

// removing element from map
map.remove("key2");

// iterating over map
for (Map.Entry<String, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ":" + entry.getValue());
}
```

## Exercises

### Exercise 1

Make a Map that associates the following employee IDs with names. Keys and values of Maps can be any Object type, so in real life you would probably have the key be a String and the associated value be a Person or Employee object. To make things simpler on this exercise, you can use String for both the ID and the name, rather than bothering to create a Person or Employee class. The point here is to associate keys with values, then retrieve values later based on keys.

| Id | Name |
|----|------|
| a1234 | Steve Jobs |
| a1235 | Bill Gates |
| a1236 | Jeff Bezos |
| a1237 | Larry Page |
| a1238 | Sergey Brin |

<Solution>
```java
public class MapsExercise1 {

    public static void main(String[] args) {
        Map<String, String> employees = new HashMap<>();
        employees.put("a1234", "Steve Jobs");
        employees.put("a1235", "Bill Gates");
        employees.put("a1236", "Jeff Bezos");

        // lets get Steve
        String name = employees.get("a1234");
        System.out.println(name);

        // iterate over all keys and values
        for (Map.Entry<String, String> entry : employees.entrySet()) {
            System.out.println(entry.getValue() + " has an id = " + entry.getKey());
        }
    }
}
```
</Solution>

### Exercise 2

Go back to the previous problem and make your lookup method work with keys in any case. For example, both “a1234” and “A1234” should match Steve Jobs. Hint: very easy, so if your solution is complex, you are overlooking the obvious.

<Solution>
```java
public class MapsExercise2 {
    static Map<String, String> employees = new HashMap<>();

    public static void main(String[] args) {
        addEmployee("a1234", "Steve Jobs");
        addEmployee("a1235", "Bill Gates");
        addEmployee("a1236", "Jeff Bezos");

        String employee = findEmployee("A1234");
        System.out.println(employee);
    }

    private static void addEmployee(String id, String name) {
        employees.put(id.toLowerCase(), name);
    }

    private static String findEmployee(String id) {
        return employees.get(id.toLowerCase());
    }
}
```
</Solution>

### Exercise 3

<ResponsiveImage src="/people-map.jpg"></ResponsiveImage>

Write a program that creates a map of students and the country they are from. Add 10 students from our class to this map.

- use `HashMap`
- what are the data types for key and value?

1. Print to the console where is `Elena` from (using apropriate `Map` method)
2. Print each entry in a format `name: country`
3. Print all unique country names.

<Solution>
```java
public class MapsExercise3 {

    public static void main(String[] args) {
        Map<String, String> students = new HashMap<>();
        students.put("Josh", "USA");
        students.put("Oliver", "Germany");
        students.put("Elena", "Russia");
        students.put("Stephan", "France");
        students.put("Sergei", "Russia");

        System.out.println(students.get("Elena"));

        for (Map.Entry<String, String> entry : students.entrySet()) {
            System.out.println(entry.getKey() + ":" + entry.getValue());
        }

        Set<String> uniqueCountries = new HashSet<>(students.values());
        System.out.println(uniqueCountries);
    }
}
```
</Solution>

### Exercise 4

Write a method that acts as a english-german dictionary. It takes one parameter - english word - and returns german translation. If word is not found it returns "Sorry, I don't know such word".

<Solution>
```java
public class MapsExercise4 {

    public static void main(String[] args) {
        System.out.println(translate("flower"));
        System.out.println(translate("street"));
    }

    private static String translate(String word) {
        Map<String, String> dictionary = new HashMap<>();
        dictionary.put("table", "der tisch");
        dictionary.put("flower", "die blume");
        dictionary.put("lamp", "die lampe");

        if (dictionary.containsKey(word)) {
            return dictionary.get(word);
        } else {
            return "Sorry, I don't know such word";
        }
    }
}
```
</Solution>

### Exercise 5

Write a method program that contains a pizza menu - we are interested only in pizza name and it's price. For simplification we can assume that all pizzas are sold in the same size and price is an `Integer`. Write a method that takes how much money there is in your wallet and it returns `Map` of pizzas and their prices, that you can afford.

<Solution>
```java
public class MapsExercise5 {

    public static void main(String[] args) {
        System.out.println(pizzas(13));
    }

    private static Map<String, Integer> pizzas(Integer money) {
        Map<String, Integer> pizzas = new HashMap<>();
        pizzas.put("margherita", 10);
        pizzas.put("funghi", 12);
        pizzas.put("capriciosa", 14);
        pizzas.put("tonno", 12);

        Map<String, Integer> result = new HashMap<>();

        for (Map.Entry<String, Integer> pizza : pizzas.entrySet()) {
            if (pizza.getValue() <= money) {
                result.put(pizza.getKey(), pizza.getValue());
            }
        }

        return result;
    }
}
```
</Solution>

### Exercise 6

Write a program that calculates average price of a second hand car based on the list of prices found on EBay. Example list:

- Toyota: 10000, 15000, 18000
- BMW: 20000, 23000, 50000
- Audi: 35000, 43000, 18000, 50000

The method should return a map where key is a car name and value is a average price.

<Solution>
```java
public class MapsExercise6 {

    public static void main(String[] args) {
        Map<String, List<Integer>> prices = new HashMap<>();
        prices.put("Toyota", Arrays.asList(10000, 15000, 18000));
        prices.put("BMW", Arrays.asList(20000, 23000, 50000));
        prices.put("Audi", Arrays.asList(35000, 43000, 18000, 50000));
        System.out.println(averagePrices(prices));
    }

    private static Map<String, Integer> averagePrices(Map<String, List<Integer>> carPrices) {
        Map<String, Integer> result = new HashMap<>();

        for (Map.Entry<String, List<Integer>> car : carPrices.entrySet()) {
            result.put(car.getKey(), average(car.getValue()));
        }

        return result;
    }

    private static int average(List<Integer> list) {
        int result = 0;
        for (Integer i : list) {
            result += i;
        }
        return result / list.size();
    }
}
```
</Solution>

### Exercise 7

<ResponsiveImage src="/peppa1.jpg"></ResponsiveImage>

Peppa Pig has following friends: Suzy Sheep, Emily Elephant, Rebecca Rabbit, Danny Dog, Pedro Pony. 
Zoe Zebra has following friends: Freddy Fox, Rebecca Rabbit, Gabriella Goat, Kylie Kangaroo, Danny Dog

Write a method that prints their common friends.

::: tip

Write it in a flexible way, so that we can easily add new character with their friends without changing too much code.

:::

<Solution>
```java
public class MapsExercise7 {
    private static Map<String, Set<String>> friends = new HashMap<>();

    public static void main(String[] args) {
        friends.put("Peppa Pig", new HashSet<>(Arrays.asList("Suzy Sheep", "Emily Elephant", "Rebecca Rabbit", "Danny Dog", "Pedro Pony")));
        friends.put("Zoe Zebra", new HashSet<>(Arrays.asList("Freddy Fox", "Rebecca Rabbit", "Gabriella Goat", "Kylie Kangaroo", "Danny Dog")));

        System.out.println(commonFriends("Peppa Pig", "Zoe Zebra"));
        System.out.println(commonFriends("Peppa Pig", "Freddy Fox"));
    }

    private static Set<String> commonFriends(String hero1, String hero2) {
        if (!friends.containsKey(hero1) || !friends.containsKey(hero2)) {
            return Collections.emptySet();
        }

        Set<String> common = new HashSet<>(friends.get(hero1));
        common.retainAll(friends.get(hero2));

        return common;
    }
}
```
</Solution>

## Additional Resources

 - [📖 Java HashMap vs TreeMap](https://www.baeldung.com/java-treemap-vs-hashmap)
 - [📺 How HashMap works internally](https://www.youtube.com/watch?v=CojCE-ojdGY)