# 24 - Coding challenges and interview questions

<Teacher name="Michele"></Teacher>

## Goals
- Learn about the coding interview
- Go through simple coding tasks examples
- Learn where and how you can get better at it

### Examples

**1. Reverting a string**

Print out a string in reverse order.

*Examples*
```
Input: Hello World
Ourpur: dlroW olleH

Input: This is crazy
Output: yzarc si sihT
```
<BR />

**2. Most frequent element in an array** (from [https://www.geeksforgeeks.org/frequent-element-array/](https://www.geeksforgeeks.org/frequent-element-array/))

Given an array, find the most frequent element in it. If there are multiple elements that appear maximum number of times, print any one of them.


*Examples*
``` 
Input : arr[] = {1, 3, 2, 1, 4, 1}
Output : 1
 
Input : arr[] = {10, 20, 10, 20, 30, 20, 20}
Output : 20
```

<Solution>
```java
//Java program to find the most frequent element 
//in an array 
import java.util.HashMap; 
import java.util.Map; 
import java.util.Map.Entry; 
  
class GFG { 
      
    static int mostFrequent(int arr[], int n) 
    { 
          
        // Insert all elements in hash 
        Map<Integer, Integer> count = new HashMap<Integer, Integer>(); 
          
        for(int i = 0; i < n; i++) 
        { 
            int key = arr[i]; 
            if(count.containsKey(key)) 
            { 
                int freq = count.get(key); 
                freq++; 
                count.put(key, freq); 
            } 
            else
            { 
                count.put(key, 1); 
            } 
        } 
          
        // find max frequency. 
        int max_count = 0, res = -1; 
          
        for(Entry<Integer, Integer> val : count.entrySet()) 
        { 
            if (max_count < val.getValue()) 
            { 
                res = val.getKey(); 
                max_count = val.getValue(); 
            } 
        } 
          
        return res; 
    } 
      
    // Driver code 
    public static void main (String[] args) { 
          
        int arr[] = {1, 5, 2, 1, 3, 2, 1}; 
        int n = arr.length; 
          
        System.out.println(mostFrequent(arr, n)); 
    } 
} 
```
</Solution>

<BR />
**Questions Marks** (from [https://www.coderbyte.com/editor/Questions%20Marks:Java](https://www.coderbyte.com/editor/Questions%20Marks:Java))

Have the function `QuestionsMarks(str)` take the `str` string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string `true`, otherwise it should return the string `false`. If there aren't any two numbers that add up to 10 in the string, then your program should return `false` as well.

For example: if `str` is "arrb6???4xxbl5???eee5" then your program should return `true` because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

*Examples*
```
Input: "aa6?9"
Output: false

Input: "acc?7??sss?3rr1??????5"
Output: true
```


<Solution>
```java
import java.util.*; 
import java.io.*;

class Main {

  // by no means the best solution!!!
  public static boolean QuestionsMarks(String str) {
    boolean status = true;
    boolean pairFound = false;
    
    Integer first = null;
    int count = 0;
    
    for (char c : str.toCharArray()) {
      if (c == '?') { count += 1; }
      else if (Character.isLetter(c)) {
        continue;
      } else if(Character.isDigit(c)) {
        Integer current = Character.getNumericValue(c);
        if (first == null) { count = 0; first = current; }
        else {
          int tot = current + first;
          if (tot == 10) {
            pairFound = true;
            if (count != 3) { status = false; } 
          }
          first = current;
          count = 0;
        }
      }
    }
    
    if (pairFound == false) status = false;
    return status;
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(QuestionsMarks(s.nextLine())); 
  }
}
```
</Solution>


## Additional Resources

**Interactive code challenges**

 - [https://www.hackerrank.com/dashboard](Hsckerrank), a nice platform for coding challenges and learning in general
 - [https://leetcode.com/problemset/all/](Leetscode) is full of coding interview problems, and they recently added a learning platform
 - [https://edabit.com/challenges/java](Edabit), more coding challenges
 - [https://codingbat.com/java](Codingbat)
 - [https://coderbyte.com/](Coderbyte)

 **Other resources**
 - https://www.softwaretestinghelp.com/java-coding-interview-programs/
 - https://javarevisited.blogspot.com/2017/07/top-50-java-programs-from-coding-Interviews.html
 
