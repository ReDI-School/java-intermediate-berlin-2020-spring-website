# How To Edit This Site?

This [site](https://redi-j2.netlify.com) is based on [VuePress](https://vuepress.vuejs.org/) - VueJS based static site generator. There are couple of reasons why I chose VuePress and not something X:

- no need to write ANY JS/HTML unless you really want to
- pure markdown based
- very good looking site without any effort

## Directory Structure

Structure of the markdown files is reflected in the structure of the urls - for example - file under `teachers/for-teachers.md` will be accessible in the browser under `http://host/teachers/for-teachers.html`.

## Markdown Syntax

- [VuePress Markdown Guide](https://vuepress.vuejs.org/guide/markdown.html)

Cool thing about VuePress is that you can create custom VueJS components and embed them into markdown. For example I created a component for embedding solution to the exercise on the website which works in a way that you have to click on a link to show the solution - you can find the component in `.vuepress/components/Solution.vue`. Now on any page you can just use:

```
<Solution>Hi I am a solution!</Solution>
```

in order to get:

<Solution>Hi I am a solution!</Solution>

## Available Custom Components

### Embedding YouTube Video

```
<YouTube src="https://www.youtube.com/embed/uif6eBb-cIA"></YouTube>
```

<YouTube src="https://www.youtube.com/embed/uif6eBb-cIA"></YouTube>

### Embedding Google Slides

```
<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTDkYSGHxcI4nhyfOVz_pYvrJesky7D28KSul5NqcKpqERPR14867LO0C580-b9nu6BNP--oieJW3q3/embed?start=false&loop=false&delayms=3000"></GoogleSlides>
```

<GoogleSlides src="https://docs.google.com/presentation/d/e/2PACX-1vTDkYSGHxcI4nhyfOVz_pYvrJesky7D28KSul5NqcKpqERPR14867LO0C580-b9nu6BNP--oieJW3q3/embed?start=false&loop=false&delayms=3000"></GoogleSlides>

### Collapsible Solution


```
<Solution>
```java
System.out.println("Code can be there too!")
\`\`\` (remove these slashes)
</Solution>
```

in order to get:

<Solution>
```java
System.out.println("Code can be there too!")
```
</Solution>

## Git Repository

The repository is hosted under the *Redi School* organisation on Github: [https://github.com/ReDI-School/java-intermediate-berlin-2020-spring-website](https://github.com/ReDI-School/java-intermediate-berlin-2020-spring-website). If you have no write access to it either create a pull request or ping me (`@micpalmia`) on Slack to add you as a collaborator.

This website was first created by [`@maciejwalkowiak`](https://github.com/maciejwalkowiak) for the Spring 2019 version of the Java Intermediate Course.