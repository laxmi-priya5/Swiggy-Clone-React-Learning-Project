# React .map() Key Usage

- key is mandatory when rendering lists to help React track item changes.
- Avoid using index as key — it can cause rendering bugs in dynamic lists.
- Use a unique ID from your data instead for better performance and stability.

# export

- there are two types of export/import
  1- named export/import

2-default export export/import

# hooks

- hooks are normal js utility function
- whenever a state variable (useSate) updates react rerender the UI.
- remember import useSate function/component/react element as named import
- useEffect hook called after the component(which contains this hook) render;
- so that we use it to make api call when we follow the rendering pattern (Loads → Render → API → Re-render)

# react recocilliation algorithm (react fibre)

- why react is so fast ?
- ans:- react has efficient dom manipulation activity because it has virtual dom
- virtual dom is just a representation of objects
- when something change in old virtual dom and new virtual dom react track the differences old object vs new object by applying diff algorithm
- and if there is certain changes in previous object(old virtual dom) then it rerenedrs this is called reconcillation algorithm

# monolithic vs microservices architecture

- monolithic :- one project contains multiple task
- microservice :- contains many small project and each project has single responsibilty without interfering with each other (known as separation of concerns) and follows single responsibility principle

# Two types of react rendering patterns:-

1.  Loads → API → Render

- Loads: Component mounts
- API: Data is fetched
- Render: Component re-renders with the fetched data

2.  Loads → Render → API → Re-render (mostly preferred)

- Loads: Component mounts
- Render: Initial render with empty/default state
- API: Data is fetched asynchronously
- Re-render: Component updates once data arrives

# look at the login btn on header

- when this state variable changes from login to logout or vice versa even though the total header component rerender again still it not update the total thing again it only update the button which changed by effective dom manipulation (based on finding the difference between older virtual dom and new virtual dom by applying diff algo)

# note on useEffect

- with no depedency array in useEffect => called on each render of that component
- with empty dependency array like [] => called only once for initial rendering (the component rendering for firsttime )
- when put some depedency inside depedency array then it is called on everytime of depedency changes / updates

# note on useState

-always call useSate hook inside the functional component (as local state variable) not outside of any functional component.

- always try to call on the top.
- never call useState inside if else (condition), for (loop),functions.

# react router dom

- handle error during routing:-

* react router provide us one hook called (useRouteError) through which we can customize our error when three is no such path exist .

- it also provides outlet component to reneder different children component
- also provides link component to link another page without using anchor(which causes reloading again)

# Types of Routing

- there are two types of routing :-
  1-server side routing
  2-client side routing

# Client-Side Routing in SPA (React)

✅ What It Means

- In a Single Page Application (SPA), the browser loads a single HTML file initially.
- Routing is handled by JavaScript (e.g., React Router), not by the server.
- When you navigate between pages (like /home → /about), the URL changes, but the page doesn’t reload.
- Instead, React swaps components dynamically — only the part of the UI that needs to change is re-rendered.

# class-based component

- A class-based component is a JavaScript class that extends React.Component. It must include a render() method, which returns JSX — the UI you want to display.

Example:-
import React { Component } from 'react';

class MyComponent extends Component {
render() {
return (

<div>
<h1>Hello from Class Component!</h1>
</div>
);
}
}
export default MyComponent;

# functional component

- Normal javascript function which return jsx

# Passing props to a class based component

- when we pass props to class-based component that component access that by using constructor
- If you're not using state or custom methods, you can skip the constructor entirely. React will handle the default setup behind the scenes.

# Sate variables in class based component

- we must declare a stete variable always inside constructor and like
  this.state = {
  followers : 0

       }

# component did mount

- component did mount is used to make api call inside class based component .
- as in functional component we use useEffect to make api call because it call the api after rendering
- same in the case of componentDidMount() - this is also called after rendering of the component

When a class component is first added to the DOM, React follows this sequence:

1. Constructor (optional)
   - Used to initialize state and bind methods.
   - Called once before anything is rendered.
2. render()
   - Returns the JSX to be displayed.
   - Called before the component appears on screen.
3. componentDidMount()

   - Called once, immediately after the component is mounted (i.e., inserted into the DOM).
   - Ideal for:
   - Fetching data from APIs
   - Setting up subscriptions or timers
   - DOM manipulations

# React life cycle method diagram

- follow the link => https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
