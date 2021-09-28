# Contributing to the Vignette wiki

Want to contribute to the Vignette wiki? Great!

Before that, keep in mind a couple of points.

1. We use [MKDocs](https://www.mkdocs.org) as our wiki framework.

2. All the pages should be neutral, and use second person to refer to the user where possible.

3. Avoid using inline HTML where possible.

## Markdown styling

We are very strict about styling, to keep the wiki as consistent as possible.

- Use `-` to create bullet lists
  
  ```md
  - Item 1
  - Item 2
  - Item 3
  ...
  ```

- Use `.` to create ordered lists
  
  ```md
  1. Item 1
  2. Item 2
  3. Item 3
  ...
  ```

- Use 4 spaces for indentation

## Embedding images

All images should be put in the `img/` directory relative to the current document.

Example:

```
docs/
     index.md
     img/
         menu.png
```

All images should have a description explaining what the image is

```md
![The Vignette main menu](img/menu.png)
```




