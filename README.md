# Front-End Web Developer Interview

## Ground rules

- All questions welcome.
- As you go, look up any docs that help you (googling encouraged).
- Welcome to reference your own code.
- Talk us through what you're doing and why.

## 1 - React Basics

``` bash
git checkout task/react-counter
```

For this first task, don't worry about styling. The uglier the better. All we want to see in this step is that you can introduce a button to a page, which when clicked increments a counter which is rendered in a page.

### TODO

- Run the react solution.
- Add a button to the page.
- Add a counter to the page.
- Increment the counter when the button is pressed.

---

## 2 - React web API interactions

``` bash
git checkout task/react-api
```

The project is pre-loaded with a new CreateReactApp project, and has the axios npm package installed. Use it to load data from the api provided.

### TODO

- Explore the api (see thunder client extension for examples).
- Use axios to load json from https://randomuser.me/api.
- Print json from the api to console.
- Display json from as string on the webpage.

---

## 3 - React Styling and Component Libraries

``` bash
git checkout task/styled-components
```

Now that we're reading data from the provided API, it's time to build new react components, and to use them with the Material UI component library. The Material UI npm package has been added to the solution.

### TODO

- Create a component to display a user.
  - Display Username.
  - Display First and Last Name.
  - Display Email.
  - Render the users's profile picture.
- Connect the loading of users to a button press.
- Implement pagination, continuously loading and appending users.
  - eg: https://randomuser.me/api?page=1
- Render user components into a Material UI grid.

---

## 4 - React state management

``` bash
git checkout task/react-state 
```

The next task includes configuring the solution to use redux, then using it to build a simple to-do list. The list should support adding and removing items.

- Install the redux npm package.
- Configure the project to use the redux.
- Set up a input field to create new TODO items.
- Add a button which adds to-do items to the state.
- Support the removal of to-do items.

---

## 5 - Principles, Patterns & Practices

``` bash
git checkout task/fizz-buzz
```
