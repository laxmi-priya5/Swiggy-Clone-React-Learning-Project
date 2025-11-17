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
