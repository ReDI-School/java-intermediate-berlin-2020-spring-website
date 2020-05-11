# 15 - Putting it all together

<Teacher name="Alina"></Teacher>

## Goals
- Learn how we can use the data structures we've learned about in order to solve real problems
- Use object oriented paradigms together with complex data structures
- *Get more confident transforming requirements into code*

## Lesson

Today's lesson is completely in the form of a long, interactive excercise. Here you find the outline of what we'll build. Afterwards, you can find a similar exercise to try later.

### :money_with_wings: Where do we spend money? :money_with_wings: 

Today we will work for a Bank :bank:. Our bank wants to implement a new feature for our users. Our users would like 
to get Statistics where do they spend money and how much. The bank stores information about different payment. Each 
Payment has a unique id, amount, type (for example groceries :tomato: , entertainment :movie_camera: , cafes :tropical_drink:
 , house holding :house: , transport :bus: ...) and month and year when the payment happened. Our users want to get 
 statistics what was the most expensive payment, what was the biggest income that they got, how much they spend and earned in total and how much they paid for each type of the 
 payment.

#### Let's start with structures
What structures do we need? Let's create them!

 <Solution>
 
 ```java
 
 public class Payment {
 
     private int id;
     private double amount;
     private String category;
     private int month;
     private int year;
 
     public Payment(int id, double amount, String category, int month, int year) {
         this.id = id;
         this.amount = amount;
         this.category = category;
         this.month = month;
         this.year = year;
     }
 
     public int getId() {
         return id;
     }
 
     public double getAmount() {
         return amount;
     }
 
     public String getCategory() {
         return category;
     }
 
     public int getMonth() {
         return month;
     }
 
     public int getYear() {
         return year;
     }
 
     public String printPayment() {
         return id + ": [" + amount + ", " + category + ", " + month + ", " + year + "]";
     }
 
 }

 ```
 </Solution>

#### Let's add some data
Let's add some payments in our bank. Pay attention, how we make sure that the payments are unique? How are we going 
to store them?

<Solution>

 ```java
public class BankApplication {

    private Map<Integer, Payment> payments = new HashMap<>();

    public BankApplication() {
        Payment inCafe = new Payment(1, -10.0, "Cafe", 10, 2019);
        Payment inCafe2 = new Payment(2, -11.2, "Cafe", 9, 2019);
        Payment rentOctober = new Payment(3, -302.0, "House", 10, 2019);
        Payment rentNovember = new Payment(4, -302.0, "House", 11, 2019);
        Payment foodRewe = new Payment(5, -12.0, "Groceries", 10, 2019);
        Payment salaryOctober = new Payment(6, 1200, "Salary", 10, 2019);
        Payment salaryNovember = new Payment(7, 1200, "Salary", 11, 2019);

        payments.put(inCafe.getId(), inCafe);
        payments.put(inCafe2.getId(), inCafe2);
        payments.put(rentOctober.getId(), rentOctober);
        payments.put(rentNovember.getId(), rentNovember);
        payments.put(foodRewe.getId(), foodRewe);
        payments.put(salaryOctober.getId(), salaryOctober);
        payments.put(salaryNovember.getId(), salaryNovember);
    }
 }
 
 ```
</Solution>

#### Let's do some calculations! :mag: :chart_with_upwards_trend:
Show the user their the most expensive payment:

```
The biggest payment is: 2001003 [-200$, "Groceries", 2019, October]
```

<Solution>

 ```java
     public void printBiggestPayment() {
         Payment theBiggestPayment = null;
         for(Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             if (entry.getValue().getAmount() >= 0) {
                 continue;
             }
 
             if (theBiggestPayment == null) {
                 theBiggestPayment = entry.getValue();
             }
 
             if (theBiggestPayment.getAmount() > entry.getValue().getAmount()) {
                 theBiggestPayment = entry.getValue();
             }
         }
 
         if (theBiggestPayment != null) {
             System.out.println("The biggest payment is " + theBiggestPayment.printPayment());
         } else {
             System.out.println("There is no payments!");
         }
     } 
  ```
 </Solution>
 
#### Let's do some calculations! :mag: :chart_with_upwards_trend:
Show the user their total income:

```
The total income is: 2000$
```

<Solution>

 ```java
     public void printTotalIncome() {
         int sum = 0;
         for (Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             if (entry.getValue().getAmount() >= 0) {
                 sum += entry.getValue().getAmount();
             }
         }
         System.out.println("The total income is: " + sum);
     }
 ```
  </Solution>
  
  
#### Let's do some grouping!
Show the user their spending grouped by type, alphabetically ordered by the type name:

```
How do spend your money:
Cafes: 128$
Entertainment: 26$
Groceries: 150$
...
```  

<Solution>

 ```java
     public void printCategoryStatistics() {
         Map<String, Double> inCategories = new HashMap<>();
         for (Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             Payment payment = entry.getValue();
             String category = payment.getCategory();
 
             double categorySum = inCategories.getOrDefault(category, 0.0);
             categorySum += payment.getAmount();
             inCategories.put(category, categorySum);
         }
 
         System.out.println("Payments categories: ");
         System.out.println(inCategories);
     }
 ```
</Solution>
  
#### Let's get some input from the user :man: :woman: 
Give the user opportunity to choose what statistics they want to see:
```
> Enter what statistics you want to see: 
1 - My biggest payment
2 - My total income
3 - How do I spend my money
0 - exit

```

#### Tip - How switch works: 
```java
public class SwitchDemo {
    public static void main(String[] args) {

        int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
    }
}
```

<Solution>

 ```java
 public class Main {
 
     public static void main(String[] args) {
         BankApplication application = new BankApplication();
         Scanner scanner = new Scanner(System.in);
 
         while (true) {
             System.out.println("Enter what statistics you want to see: \n");
             System.out.println("1 - My biggest payment\n" +
                     "2 - My total income\n" +
                     "3 - How do I spend my money\n" +
                     "4 - Statistics for 1 year\n" +
                     "5 - The Biggest income \n"+
                     "6 - the Total spending\n"+
                     "0 - exit\n");
 
             int input = Integer.parseInt(scanner.nextLine());
             switch (input) {
                 case 1:
                     application.printBiggestPayment();
                     break;
                 case 2:
                     application.printTotalIncome();
                     break;
                 case 3:
                     application.printCategoryStatistics();
                     break;
 
                 case 4:
                     System.out.println("Enter a year:  \n");
                     int year = Integer.parseInt(scanner.nextLine());
                     application.printYearStatistics(year);
 
                     break;
                 case 5:
                     application.printBiggestIncome();
                     break;
                 case 6:
                     application.printTotalSpendings();
                     break;
                 default:
                     System.out.println("Incorrect input. Please try again");
                     break;
             }
 
             if (input == 0) {
                 break;
             }
         }
 
     }
 }
 ```
</Solution>

#### Let's do some calculations! :mag: :chart_with_upwards_trend:
Show the user their biggest income:

```
The biggest income is: 2001003 [1200$, "Income", 2019, October]
```

<Solution>

 ```java
     public void printBiggestIncome() {
         Payment theBiggestIncome = null;
 
         for(Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             if (entry.getValue().getAmount() <= 0) {
                 continue;
             }
 
             if (theBiggestIncome == null) {
                 theBiggestIncome = entry.getValue();
             }
 
             if (theBiggestIncome.getAmount() < entry.getValue().getAmount()) {
                 theBiggestIncome = entry.getValue();
             }
         }
 
         if (theBiggestIncome != null) {
             System.out.println("The biggest income is: " + theBiggestIncome.printPayment());
         } else {
             System.out.println("There is no income!");
         }
     }
 ```
</Solution>

#### Let's do some calculations! :mag: :chart_with_upwards_trend:
Show the user their total spending:

```
You spent in total: -278$
```

<Solution>

 ```java
 public void printTotalSpendings() {
         int sum = 0;
         for (Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             if (entry.getValue().getAmount() <= 0) {
                 sum += entry.getValue().getAmount();
             }
         }
         System.out.println("The total spendings is: " + sum);
     }
 ```
</Solution>

#### Let's do some grouping! :calendar: 
Show the user their spendings & earnings grouped by month during this year, chronologically ordered. Make sure that 
you print the month even if there are no payments.

```
In January you spent: 143$ and earned: 2300$
In February you spent: 260$ and earned: 2300$
In March you spent: 0$ and earned: 2300$
In April you spent: 107$ and earned: 2500$
...
```

<Solution>

 ```java
     public void printYearStatistics(int year) {
         System.out.println("Statistics of the payments for the year: " + year);
         Map<Integer, Double> incomeInMonths = new HashMap<>();
         Map<Integer, Double> spendingsInMonths = new HashMap<>();
         for (int i = 1; i<=12; i++) {
             incomeInMonths.put(i, 0.0);
             spendingsInMonths.put(i, 0.0);
         }
         for (Map.Entry<Integer, Payment> entry: payments.entrySet()) {
             Payment payment = entry.getValue();
             if (payment.getYear() != year) {
                 continue;
             }
             Integer month = payment.getMonth();
             if (payment.getAmount() > 0) {
                 double sum = incomeInMonths.get(month);
                 sum += payment.getAmount();
                 incomeInMonths.put(month, sum);
             } else {
                 double sum = spendingsInMonths.get(month);
                 sum += payment.getAmount();
                 spendingsInMonths.put(month, sum);
             }
         }
         for (int i = 1; i<=12; i++) {
             System.out.println("In the " + MonthUtils.getMonthName(i) + " you earned: " +  incomeInMonths.get(i)
                     + ", and spent: " + spendingsInMonths.get(i));
         }
     }  
 ```
</Solution>

#### Let's do some grouping! :calendar: 
Show the user their spendings & earnings grouped by month during chosen year, chronologically ordered. Make sure that 
you print the month even if there are no payments. For that you will need to make the bank terminal menu more 
interactive:
```
> Enter what statistics you want to see: 
1 - My biggest payment
2 - My total income
3 - How do I spend my money
4 - Statistics for 1 year
0 - exit

User's input> 4

> Enter a year: 

User's input> 2018

In January 2018 you spent: 143$ and earned: 2300$
In February 2018 you spent: 260$ and earned: 2300$
In March 2018 you spent: 0$ and earned: 2300$
In April 2018 you spent: 107$ and earned: 2500$
...

```
