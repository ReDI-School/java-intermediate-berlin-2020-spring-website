# 19 - File IO

<Teacher name="Alina"></Teacher>
<Teacher name="Michele"></Teacher>

## Goals

- Be able to read a file from the computer
- Be able to write to a file to the computer

## Slides

<GoogleSlides src="https://docs.google.com/presentation/d/1aoGuk6tgpAg4ZhzDkJQUB5NUQQwbaPlkHodDZj7JLp8/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

### Useful links
File IO
 - <https://docs.oracle.com/javase/tutorial/essential/io/file.html> 
 - <https://docs.oracle.com/javase/7/docs/api/java/io/File.html>
 - <https://www.w3schools.com/java/java_files.asp>
 - <https://www.mkyong.com/java8/java-8-stream-read-a-file-line-by-line/>
 - <https://www.baeldung.com/reading-file-in-java>
 
## Homework

 - Manually download and save [The Adventures of Sherlock Holmes](https://raw.githubusercontent.com/ReDI-School/java-intermediate-berlin-2020-spring-website/master/docs/misc_material/sherlock.txt) to your computer. You'll need it for all exercises!

### Exercise 1
 - Read the file with a Scanner. How many lines does the file have?
 - Read the file with the `readAllLines` utility from `Files`. Hopefully, the line count matches!
 - (Homework) Check out how to handle the file [as a stream of lines(https://stackoverflow.com/a/5868528/592138). Why could this be useful?

### Exercise 2
 - After successfully reading the file, let your program replace all occurrences of "Sherlock" and "Sherlock Holmes" with your own name
 - Let your program save the data to a new file with the name "Adventures of _your name_"
 
### Exercise 3
- Let your program split the book by adventure. There are 12 adventures in the book. Each adventure starts with the uppercase word `ADVENTURE`. Can you find a good way to split the file correctly? You should collect all 12 adventures plus the incipit.
- Save each part to a different file. Name the files `adventure_x.txt`. The intro text can be adventure 0.
