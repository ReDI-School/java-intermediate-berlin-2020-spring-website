# 23 - JSON

<Teacher name="Michele"></Teacher>

## Goals

- learn to read and represent Json in Java
- understand the mapping of Json to Java data types
- a bit more on Json vs XML vs CSV

## Excercise

Let's design and implement together a data structure that can represent the following Json files.

```json
{ "employees": [
	{"id": "4A5GHJ29", "name": "Michele Palmia", "salary": 24000, "location": "Berlin", "qualifications_ids": [1, 5, 28]}
	{"id": "58FG5H75", "name": "Ahmed Karessli", "salary": 28000, "location": "London", "qualifications_ids": [23, 5, 99]}
	{"id": "58FG5H75", "name": "Zineb Graf", "salary": 27500, "location": "Barcelona", "qualifications_ids": [27, 54, 103]}
	{"id": "4A5GHJ29", "name": "Jonas Oh", "salary": 30000, "location": "Berlin", "qualifications_ids": [1, 22, 27]}
  ]
}
```

1. Can you think of a **different way to organize this data**? Which other data structure would that need?
2. Which **utility functions** could be added to our object to make life easier to the programmer coming next?
3. Let's design some of them!
4. Can we print the employees out as **XML**?

## Resources

- [Json specifications](http://www.json.org/)
- [XML specifications](https://www.w3.org/TR/xml/) <- you don't actually need to understand this
- [How are XML and JSON different?](https://stackoverflow.com/questions/4862310/json-and-xml-comparison)
