## How to Install
- download zip from github
- cd My-app
- npm i
- npm run dev

Note: figma file is within this project. 👉[figma file](./React.fig)

## JSX Rules
- always return a single element
- we can use react fragment with adding extra nodes

```
    <React.Fragment></React.Fragment>
or
    <></>
```

## Nesting of components
```
    <section>
        <Navbar/>
        <Profile>
    </section>


    ## Navbar component
    <nav>
        <ul>
            <li></li>
            <li></li>
        </ul>
    </nav>
```

## React Dev Tools
- chrome, firefox, edge

## css
- style sheet
- css in jsx:
  -> style prop
  -> js object
  ```
  <h1 style={{background: 'red'}}></h1>
  ```
  -> passing as reference

## Images
- external
- Local

## Js in JSX
{}
value used with the curly bracket must be an expression (i.e return something) 
statement are not 
- using variables

## Props
- passing props
- using strings, variables as props
- objects and array as props
- destructuring props
- children props
- spread operator

Project: Movie list



## List and keys
- map
  Note: objects can't can be rendered in react

## Events
    in Js:
    ```
    const btn = document.getElementById('btn');
    btn.addEventListener('click',()=>{
        // access the event properties
        // do something once the event fires
    })
    ```
    - by reference
    - iffy func (used when you want to pass arguments to your func)
    - inline function / arrow func
    - functions as props
    - components are independent

## conditional Rendering
- if statement
- element variable
- ternary operator 
- short circuit

