# 14 - Data Structures: Sorting!

<Teacher name="Renato"></Teacher>

## Goals

- learn how to sort Data structures
- learn the differences between Comparable and Comparator
- what is static?
- **Practice!**

## Bike Class

```java
package lesson14;

public class Bike implements Comparable<Bike>{

    private String model;
    private int price;
    private int wheelSize;

    public Bike(String model, int price, int wheelSize) {
        this.model = model;
        this.price = price;
        this.wheelSize = wheelSize;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getWheelSize() {
        return wheelSize;
    }

    public void setWheelSize(int wheelSize) {
        this.wheelSize = wheelSize;
    }

    @Override
    public int compareTo(Bike bike) {

        // this > bike +
        if (this.getPrice() > bike.getPrice())
            return 1;
        else
            return -1;
    }
}
```
sort an ArrayList of Bikes

```java
public class Main {

    public static void main(String [] args) {

              List<Bike> bikes = new ArrayList<>();

        bikes.add(new Bike("Bianchi", 850, 28));
        bikes.add(new Bike("Velonisor", 330, 28));
        bikes.add(new Bike("Cube", 400, 24));
        bikes.add(new Bike("Unknown", 100, 26));
        bikes.add(new Bike("Puki", 110, 18));
        bikes.add(new Bike("Giant", 1200, 28));


        for (Bike b : bikes) {
            System.out.println(b.getPrice() + " " + b.getModel());
        }

        // we now sort the bikes

        Collections.sort(bikes);

        for (Bike b : bikes) {
            System.out.println(b.getPrice() + " " + b.getModel());
        }

    }
}
```


## Exercises

### Exercise 1

Let's now sort the bikes by brand DESCENDING. How do you do that?

### Exercise 2



