# 09 - OOP - Classes & Objects

<Teacher name="Anca"></Teacher>

## Goals
- Learn the difference berween a Class and an Object
- Learn how to design classes 
- Learn how to create Objects


## Slides


<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vRBvkOhBpCT2nbPCteJ_rtZyiSM7aG2DHzWXGyBJhC_FIn13jswWMMYNysgkWHEo3gIL2QM5b8J6GDm/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

### User sample

```java
public class User {

    public String id;
    public String name;
    private String password;
    public String email;

    public User(String id, String name, String password, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    public void changePassword(String newPassword) {
        this.password = newPassword;
    }
```

```java
public class Application {

    public static void main(String[] args) {
        User user = new User("id", "Anca", "123", "anca.etodirica@gmail.com");

        System.out.println("Email address is " + user.email);

        user.changePassword("0000");

    }
}
```

## Exercises

### Excercise 1
Create 2 robots named Rob and Bot. Rob is yellow and Bot is blue. Rob weights 10kg while Bot just 8kg. Rob has green eyes and Bot has black eyes. 
Each of the robots should print their attributes when asked to introduce themselves.
Create a class that has all the attributes that Rob and Bot have and a method called `introduce()` that will let the robots tell us all their characteristics, then create Rob and Bot and ask them to introduce themselves. To be able to create Rob and Bot, add to the Robot class a constructor that has all the attributes the robots need.

Example: *My name is Rob. I weight 10kg. I have green eyes.*

### Exercise 2
Add different types of constructors for the `Robot` class
- Default constructor
- Constructor with 1 parameter - the name
- Constructor with 2 paramters - the name and eye color.
Create different robots using all the constructors and let them introduce themselves. Observe what will be the values of the attributes when using different constructors.

<Solution>
```java
public class Robot {

    public String name;
    public int weight;
    public String eyeColor;

    public Robot() {

    }

    public Robot(String name) {
        this.name = name;
    }

    public Robot(String name, int weight, String eyeColor) {
        this.name = name;
        this.eyeColor = eyeColor;
        this.weight = weight;
    }

    public void introduce() {
        System.out.println("My name is " + name + ".");
        System.out.println("I weight " + weight + "kg.");
        System.out.println("I have " + eyeColor + " eyes.");
    }
}
```

```java
public class Application {

    public static void main(String[] args) {
        Robot rob = new Robot("Rob", 10, "green");
        Robot bot = new Robot("Bot", 8, "black");

        rob.introduce();
        bot.introduce();

        Robot robot1 = new Robot();
        robot1.introduce();

        Robot robot2 = new Robot("Robot");
        robot2.introduce();
    }
}
```
</Solution>

### Excercise 3
You work for DHL and you have to drive a truck full of packets. Design the Truck into a java class then create the truck. Add specific truck attributes to the Truck class.

### Excercise 4
You need to drive the truck to the storehouse and pick up some packets to be delivered. Create a `startTruck()` `stopTruck()` method and an `accelerate()` method.  Every time you accelerate, your speed increases with 10km. Use them to drive the truck.

### Excercise 5
You need to load your truck with packets. Design the `Packet` class. The packet should know the details of the sender and be able to print them. Add 3 packets to your truck and print where you need to deliver them. 

<Solution>
```java
public class Truck {

    public String name;
    public int currentSpeed;
    public int maxSpeed;
    public int currentFuel;
    public int maxFuel;
    public boolean status;
    public String color;
    public List<Packet> packets;

    public Truck(String name,
                 int currentSpeed,
                 int maxSpeed,
                 int currentFuel,
                 int maxFuel,
                 boolean status,
                 String color) {
        this.name = name;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        this.currentFuel = currentFuel;
        this.maxFuel = maxFuel;
        this.status = status;
        this.color = color;
        this.packets = new ArrayList<Packet>();
    }

    public void startTruck() {
        System.out.println("Truck is started");
        status = true;
        currentSpeed = 0;
    }

    public void stopTruck() {
        System.out.println("Truck is stopped");
        status = false;
        currentSpeed = 0;
    }

    public void accelerate() {
        if (currentSpeed < 100) {
            currentSpeed += 10;
        }
        System.out.println("Current speed is " + currentSpeed);
    }

    public void addPacket(Packet packet) {
        packets.add(packet);
    }
}
```

```java
public class Packet {

    public int weight;
    public String size;
    public Address sender;
    public Address receiver;

    public Packet(int weight, String size, Address sender, Address receiver) {
        this.weight = weight;
        this.size = size;
        this.sender = sender;
        this.receiver = receiver;
    }
}
```

```java
public class Address {

    public String name;
    public String street;
    public int number;
    public int postalCode;
    public String city;
    public String country;

    public Address(String name, String street, int number, int postalCode, String city, String country) {
        this.name = name;
        this.street = street;
        this.number = number;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
    }

    public void getAddress() {
        System.out.println(name);
        System.out.println(street + " " + number);
        System.out.println(postalCode);
        System.out.println(city);
        System.out.println(country);
    }
}
```

```java
public class Application {

    public static void main(String[] args) {
        Truck truck = new Truck("Volvo", 30, 100, 15, 100, true, "red");

        truck.startTruck();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.accelerate();
        truck.stopTruck();

        Packet packet1 = new Packet(2, "S",
                                    new Address("Name1", "Street1", 1, 1234, "Berlin", "Germany"),
                                    new Address("Name2", "Street2", 2, 456, "Berlin", "GERMANY"));
        truck.addPacket(packet1);

        for (int i = 0; i < truck.packets.size(); i++) {
            truck.packets.get(i).receiver.getAddress();
        }
    }
}
```

</Solution>

## Homework 

### Excercise 6 
You want to go to the bank and open an account. You want to be able to transfer money, deposit money, withdraw money. When you transfer/withdraw the sum you have in your account can never go under 0EUR.
You want to keep track of your transactions as well, to see where your money is going. Whenever a new action is performed, print the current amount of money you have 	
- create an `Account` class with specific account attributes and methods like `deposit`, `withdraw`, `transfer`.
- crete a `Customer` class that will have associated an Account. 
- Create 2 `Customer` objects, one for you, and one for one of your colleagues. 
- deposit some money in the accounts
- transfer some money from your account to your friends account
- withraw some money from your account. 
- after every operation, print how much money you still have in your account.

### Exercise 7
You are working in a shop and you need to make an order to get new supplies. In your order, you need to add multiple products. Design the Java classes in order to be able to create the order for the products you need, then create the order and add the products to the order. 

### Exercise 8
You are a librarian and you just received some books that need to be added on the Library's bookshelves. You need to sort them by Author name and Author country of origin. Design the classes to create the Library that contain Books. Every book has just one Author. Add some books to the Library and print them sorted by the criterias already mentioned.

### Exercise 9
You want to find on which planet we will be able to move as a race when the Earth will be destroyed. 
- Create a class called `Planet`. Add `color`, `size` and `sustainLife` fields as attributes for this class. The `sustainLife` field is a boolean that is true if the planet can support life and false otherwise. 
- Create a constructor with all the parameters.
- Create a method that prints in the console all the characteristics of a Planet.
- In the main method of a different class create 3 planets and print in the console the characteristics of the planets that can sustain life.

### Exercise 10
You are looking for a new apartment in Berlin. 

- create a class `Address` that will have the street, number, zipCode and city as attributes
- create a constructor that have as parameters all the attributes of the Address. 

- Create a class `Apartment` that will contain the following attributes: numberOfRooms, numberOfBathrooms, hasTerace, hasKeller, surface, isAvailable, address.
- The attributes hasTerrace, hasKeller and isAvailable are boolean values
- Create a constructor that have as parameters all the attributes of the apartment.
- Create a method that prints all the attributes of the appartment, including the address. 
- In the main method of a different class create 3 apartments and print in the console the characteristics of the apartment

### Exercise 11
You are in vacation and you want to travel with the train. To be sure you will not miss any trains for the trips you have scheduled, you need to have with you the train Schedule. 
- Create a class called `ScheduleDetails` that will contain the following attributes: typeOfTrain, numberOfWagons, departureCity, departureTime, arrivalCity, arrivalTime.
- create a constructor that has as parameters all the attribues
- In the main method of a different class create a List of `ScheduleDetails` objects, called `schedule`.
- Create some `ScheduleDetails` objects and add them to the list.
- Iterate trough the list and print in the console the trains that you can take after 17:00.
- Iterate trough the list and print in the console the trains that you can take from Berlin.


## Additional Resources
- [📺 OOP Ilustrated](https://www.youtube.com/watch?v=CqlM7JjnAi4)
- [Class Design](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Class%20Design/classes.html)
