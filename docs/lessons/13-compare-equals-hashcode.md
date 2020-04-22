# 12 - Comparing Objects: Equals & Hash Code

<Teacher name="Sunday"></Teacher>

## Goals

- Learn what the `equals` method is
- Learn how to write a good `equals` method
- Learn what the `hashCode` method is
- Learn how to combine the `hashCode` and `equals` methods.
- Learn how to generate the `hashCode` method
- Learn how to generate the `equals` method

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/17dUYikcL5cidlRy0T6dA0SUAguLShcVWJpHQToJtcyQ/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Useful links
 - <https://www.journaldev.com/21095/java-equals-hashcode)> 

### Exercise

#### Point

- Creates a class Point with two properties:
  - `final Integer x`
  - `final Integer y`
- Implements the `equals` method. Do not generate it. Pay attention and do not use `==`.
- Implements the `hashCode` function to return `x + y`.

- In the main method:
  - Create a `point1 =  Point(3, 4)`
  - Create another `point2 = Point(3, 4)`
  - Create another `point3 = Point(2, 5)`
  - Create another `point4 = point1`

- Answer the following question without coding:
  - [No code] What is `point1.equals(point2)` ? Why?
  - [No code] What is `point1 == point2` ? Why?
  - [No code] What is `point1.equals(point1)` ? Why?
  - [No code] What is `point1 == point1` ? Why?
  - [No code] What is `point1 == point4` ? Why?
  - [No code] What is `point1.hashCode()`?
  - [No code] What is `point3.hashCode()`?
  - [No code] What is `point1.equals(point3)` ? Why?
- Verify the answers to the above questions by printing each of them.

#### Generate equals and hashCode

Using intellij, generate `equals()` and `hashCode()` for the  classes created in the OOP recap session:
 - Restaurant
 - Menu
 - Dish
    - Starter
    - Main Course
    - Dessert :shaved_ice:
 - Bill  :money_mouth_face:

#### MyHashSet

- Define another class called `Bucket` with one property
  - `final List<Point> items` initialized as an empty list
- Implement the following methods in `Bucket`
  - `boolean contains(Point point)` returns `true` if `items` contains `point` otherwise returns `false`. Here
     you must use a for loop over `items` and use the `equals` method to compare the `Points`.
  - `void add(Point point)` adds `point` into `items` if `items` does not contain `point`. 
     Feel free to use the previously defined `contains` method.
  - `int size()` returning the size of `items`

- Define another class called MyHashSet with one property
  - final List<Bucket> buckets.
  - Insert 10 new instances of `Bucket` in `buckets`. Now `buckets` should be of size 10.

- Implement the following methods in `MyHashSet`
  - `void add(Point point)` Get the `bucket` found in `buckets` at index `point.hashCode()`
     and add `point` to the `bucket` using `Bucket#add`
  - `boolean contains(Point point)` Get the `bucket` found in `buckets` at index `point.hashCode()` and check if the
     bucket contains `point` using `Bucket#point`.
  - `int size()` returning the sum of the sizes of all `buckets`
     
- In the main method:
  - Create an instance of `MyHashSet`
  - Add `Point(3, 4)` to the created `MyHashSet`
  - [No code] What bucket index in `MyHashSet` was `Point(3, 4)` added to?
  - [No code] What is the size of that `bucket`?
  - [No code] What is the size of the created `MyHashSet`?
  - Add `Point(2, 5)` to the created `MyHashSet`
  - [No code] What bucket index in `MyHashSet` was `Point(2, 5)` added to?
  - [No code] What is the size of that `bucket`?
  - [No code] What is the size of the created `MyHashSet`?
  - Does the created `MyHashSet` contain `Point(1, 6)`?
  - Does the created `MyHashSet` contain `Point(3, 4)`?
  - Add `Point(0, 0)` to the created `MyHashSet`
  - [No code] What bucket index in `MyHashSet` was `Point(0, 0)` added to?
  - [No code] What is the size of that `bucket`?
  - [No code] What is the size of the created `MyHashSet`?
  
