# 10 - From Array to ArrayList
<Teacher name="Renato"></Teacher>

## Goals

- Questions? 
- Introduction to Data structures: what are them?
- ArrayList
- Exercises (Countries: landlocked ones versus sea ones)

## Slides

- <https://s3.eu-central-1.amazonaws.com/saorico.com/j2x/index.html>

## Code

- Full code <https://s3.eu-central-1.amazonaws.com/saorico.com/j2x/lessonX.zip>

```java
public abstract class Country {


    public Country(String name){
        this.name = name;
    }

    public String getName() {
        return name;
    }

    private String name;
}
```

```java
public class SeaCountry extends Country{

    public SeaCountry(String name){
        super(name);
    }
}
```

```java
public class LandlockedCountry extends Country{

    public LandlockedCountry(String name){
        super(name);
    }
}
```

```java
        Country it = new SeaCountry("Italy");
        Country de = new SeaCountry("Germany");
        Country ad = new LandlockedCountry("Andorra");
        Country es = new SeaCountry("Spain");
        Country ch = new LandlockedCountry("Switzerland");
        Country ru = new SeaCountry("Russia");
        Country pt = new SeaCountry("Portugal");
        Country sy = new SeaCountry("Syria");

        ArrayList<Country> countries = new ArrayList<>();

        // there are better ways!
        countries.add(it);
        countries.add(de);
        countries.add(ad);
        countries.add(es);
        countries.add(ch);
        countries.add(ru);
        countries.add(pt);
        countries.add(sy);

        for(Country c:countries)
            if (c instanceof LandlockedCountry) {
                System.out.println(c.getName() + " is landlocked");
            } else {
                // System.out.println(c.getName() + " is not landlocked");
            }
```

## Resources

- Java Collections Framework (Oracle doc) <https://docs.oracle.com/javase/8/docs/technotes/guides/collections/index.html)>
- ArrayList (Oracle doc) <https://docs.oracle.com/javase/8/docs/api/index.html?java/util/ArrayList.html>

## Homework
 
### Exercise 1
Write a program to find the second smallest element in an array of integers. Write a program to find the second smallest element in an array list of integers

### Exercise 2
Try to add new functionalities to the Country class, let's make sure that for every country we can track the bordered countries. Would a ArrayList be the best approach? If not, why not?

