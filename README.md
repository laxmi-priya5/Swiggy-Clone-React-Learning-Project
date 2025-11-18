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
