# 10 - Interfaces & Abstract Classes

<Teacher name="Faiçal"></Teacher>

## Learning Objectives

At the end of the class, attendees should be able to

- Define what an interface is
- Create and use interfaces in Java
- Explain what interfaces are useful for
- Define what an abstract class is
- Create and use abstract classes in Java
- Explain what abstract classes are useful for
- Explain the differences between abstract classes and interfaces

## Presentation

[Interfaces & Abstract Classes](https://speakerdeck.com/ftchirou/interfaces-and-abstract-classes-in-java)

## Exercices

### Netflix, continued

Review the [Netflix task](https://redi-j2.netlify.com/lessons/09-interitance.html#inheritance) from the [previous lesson](https://redi-j2.netlify.com/lessons/09-interitance.html) and re-implement it **without using inheritance**. Use only the concepts studied in this lesson.

Below are the main requirements to keep in mind when working through this task.

- A `user` has a subscription `plan` on Netflix.
- A `user` can watch a `movie` on Netflix.
- A `movie` has a `title`.
- Netflix offers 3 different plans `Basic`, `Standard` and `Premium`. Each plan has some characteristics, for example: 
    - the  monthly price
    - the number of `devices` the user can watch on at the same time
    - whether HD or Ultra HD is available
    - etc.
- A `device` has a unique ID.
- A `user` can not watch a `movie` in *HD* if they don't have the `Standard` or `Premium` plan.
- A `user` can not watch a `movie` in *Ultra HD* if they don't have the `Premium` plan.
- A `user` can not watch a `movie` if they're simultaneously watching movies on as many devices as allowed by their `plan`.

#### Nice to have

- A `user` can watch on different types of `devices`: `Phone`, `Tablet` and `TV`.
- Some devices don't support *Ultra HD* (e.g. `Phones`).
- A `user` can not watch a `movie` in *Ultra HD* if the device they want to watch on does not have *Ultra HD* support (even if they have the `Premium` plan.

Discuss within your group about the objects involved and the relationships between them, the appropriate abstractions to use (interfaces or abstract classes) and why.

## Links

- [What is an interface?](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html)
- [Interfaces](https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html)
- [Abstract Classes](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)
