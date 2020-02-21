# 13 - Data Structures: Compare objects

<Teacher name="Ahmed"></Teacher>

## Goals

- learn how to use Data structures like: `Maps` or `Set` with your objects
- learn how compare objects together
- **Practice!**

## Tips
- you can create a Set of your own object like this

```java
Set<Robot> robotSet = new HashSet<>();
```

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1UDFwHmQFNXQQ_I8ZBNGnQL7s-K9UpqjFZ0-WyW6i9l4/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

## Robot Class

```java
public class Robot {

    public int id;

    public String name;

    public String color;

    public int weigh;

    public Robot(){

    }

    public Robot(int id, String name, String color, int weigh) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.weigh = weigh;
    }

    @Override
    public boolean equals(Object o) {
        Robot anotherRobot = (Robot) o;
        return id == anotherRobot.id &&
                name.equals(anotherRobot.name) &&
                color.equals(anotherRobot.color) &&
                weigh == anotherRobot.weigh;
    }

    @Override
    public int hashCode() {
        return id * 17;
    }
}
```
check if two objects are equal

```java
public class Main {

    public static void main(String [] args) {


        Robot robot = new Robot(1, "Robot1", "Blue", 20);
        Robot sameRobot  = new Robot(1, "Robot1", "Blue", 20);

        System.out.println(robot.equals(sameRobot));
    }
}
```


## Exercises

### Exercise 1

Create student class with fields: first name, last name, age, course. then override hashcode and equal functions and create 3 objects from this class
two of them are the same. then create a HashSet of these students and print the size of the list

<Solution>

```java

public class Student {

    public String firstName;

    public String lastName;

    public String course;

    public int age;

    public Student() {

    }

    public Student(String firstName, String lastName, String course, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.course = course;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Student student = (Student) o;
        return Objects.equals(firstName, student.firstName) &&
                Objects.equals(lastName, student.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName);
    }
}

public class Main {

    public static void main(String [] args) {


        Student student1 = new Student("Harry", "Potter", "java", 20);
        Student student2 = new Student("Harry", "Potter", "java", 20);
        Student student3 = new Student("John", "Wesley", "java", 21);

        Set<Student> students = new HashSet<>(3);

        students.add(student1);
        students.add(student2);
        students.add(student3);

        System.out.println(students.size());
    }
}
```

</Solution>
### Exercise 2

Use the same student class and and create a lookup . the key is the student and the value is the number of project score he got for example
harry potter ==> 20

- try to define two object with same first name and last name but with different age and try to add it to the lookup
<Solution>

```java
public class Main{

	public static void main(String [] args) {


        Student student1 = new Student("Harry", "Potter", "java", 20);
        Student student2 = new Student("Harry", "Potter", "java", 30);
        Student student3 = new Student("John", "Wesley", "java", 21);

        HashMap<Student, Integer> studentsScore = new HashMap<>();

        studentsScore.put(student1, 10);
        System.out.println(studentsScore.put(student2, 20));
        studentsScore.put(student3, 30);



    }
}
```

</Solution>
### Exercise 3



Write a program that creates a map of students and their score like previouse example. Add 5 students from our class to this map.


- loop over the map entries and print all students first name and scores
- add students with same first name and last name and print the map again
- use `HashMap`
- print the the average score in the classe 

### hint 
average of scores is the sum of all scores divided by the number of studens
<Solution>

```java

public class Main{

    public static void main(String [] args) {


        Student student1 = new Student("Harry", "Potter", "java", 20);
        Student student2 = new Student("Harry", "Potter", "java", 30);
        Student student3 = new Student("John", "Wesley", "java", 10);

        HashMap<Student, Integer> studentsScore = new HashMap<>();

        studentsScore.put(student1, 10);
        studentsScore.put(student2, 20);
        studentsScore.put(student3, 30);


        double totalScores = 0;
        for(Map.Entry<Student, Integer> entry: studentsScore.entrySet()) {
            totalScores += entry.getValue();
        }
        System.out.println(totalScores/studentsScore.size());
    }
}
```

</Solution>
## Additional Resources

 - [📖 HashCode and equals (https://www.journaldev.com/21095/java-equals-hashcode)