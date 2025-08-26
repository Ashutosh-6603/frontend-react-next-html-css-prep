# - What is React and how does it work?

🔹 What is React?

Component-based: Everything in React is a component (a button, form, navbar, etc.). Components can be reused and composed together.

Declarative: You describe what you want to see in the UI, and React takes care of updating the DOM efficiently.

Virtual DOM: React uses an in-memory representation of the DOM (Virtual DOM) to figure out the minimal changes needed and updates only those parts in the real DOM.

🔹 How does React work?

    1. Write Components

    - You define UI pieces as components (functions or classes).

    2. Render with JSX

    - React uses JSX (JavaScript XML), a syntax extension that lets you write HTML-like code inside JavaScript.

    3. Virtual DOM Creation

    - When you render components, React builds a lightweight copy of the DOM (the Virtual DOM).

    4. Diffing Algorithm

    - When state/props change:

        - React compares the new Virtual DOM with the old one (a process called reconciliation).

        - It finds the minimal differences (diff).

    5. Efficient DOM Update

    - React updates only the changed parts in the real DOM instead of re-rendering the entire UI. This makes it fast and efficient.

    6. Unidirectional Data Flow

    - Data flows in one direction:

        - Parent → Child using props.

        - State is usually managed inside components and can be lifted up if needed.

# - Functional vs Class components

| **Aspect**      | **Functional Components** ✅ _(Modern & Preferred)_                                | **Class Components** 🟡 _(Older Approach)_                          |
| --------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Definition**  | JavaScript functions that return JSX.                                              | ES6 classes that extend `React.Component`.                          |
| **Hooks**       | Use **React Hooks** (`useState`, `useEffect`, etc.) to manage state and lifecycle. | Use `this.state` and lifecycle methods (`componentDidMount`, etc.). |
| **Simplicity**  | Shorter, easier, and more readable.                                                | Verbose and harder to manage.                                       |
| **Performance** | More optimized because of hooks and no need to bind `this`.                        | Slightly slower due to `this` binding and lifecycle overhead.       |
| **Recommended** | ✅ Yes, preferred in modern React (16.8+).                                         | ❌ Mostly replaced by functional components.                        |

- Lifecycle Methods vs Hooks

| **Feature** | **Class Component**                 | **Functional Component**                  |
| ----------- | ----------------------------------- | ----------------------------------------- |
| Mounting    | `componentDidMount`                 | `useEffect(() => {}, [])`                 |
| Updating    | `componentDidUpdate`                | `useEffect(() => {}, [dep])`              |
| Unmounting  | `componentWillUnmount`              | `useEffect(() => { return cleanup }, [])` |
| State       | `this.state` + `this.setState()`    | `useState()`                              |
| Context     | `contextType` or `Context.Consumer` | `useContext()`                            |
| Refs        | `React.createRef()`                 | `useRef()`                                |

=> When to Use Functional vs Class -

✅ Use Functional Components when:

        - You're using React 16.8+ (modern apps).

        - You want cleaner, shorter, and more readable code.

        - You want to use hooks for state and lifecycle.

🟡 Use Class Components when:

        - You're working on legacy React projects.

        - The project already heavily uses class-based architecture.

Q: Why did React move from class components to functional components?

    - Hooks allow stateful logic inside functions.

    - Functional components are simpler, shorter, and easier to test.

    - No need for this keyword.

    - Better performance due to React's Concurrent Mode optimizations.

# - Props vs State

| **Aspect**       | **Props** ✅                                          | **State** 🟢                                            |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| **Definition**   | Data **passed from parent** to child.                 | Data **managed inside the component**.                  |
| **Mutability**   | **Immutable** → Cannot be changed.                    | **Mutable** → Can be updated using hooks or `setState`. |
| **Who Controls** | **Parent component** controls props.                  | **Component itself** controls state.                    |
| **Usage**        | To pass **data & configuration** to child components. | To handle **dynamic data & UI changes**.                |
| **Update**       | Updated **by parent**.                                | Updated **by the component itself**.                    |
| **Reusability**  | Makes components **reusable**.                        | State is **local** to the component.                    |
| **Example**      | `<User name="Ashutosh" />`                            | `const [count, setCount] = useState(0)`                 |

Q: Can a child modify props?
A: ❌ No, props are read-only. If needed, the parent must pass a callback to update data.

Q: Does updating props trigger re-render?
A: ✅ Yes, when props change, React re-renders the child component.

Q: Can we pass state as props?
A: ✅ Yes, you can pass state variables from parent to child as props.

Q: Which causes a re-render — props or state?
A: Both. Whenever props or state change, React re-renders the component.

# - JSX and its purpose

- JSX stands for JavaScript XML.
  It’s a syntax extension for JavaScript that allows us to write HTML-like code inside React components.

- JSX is not understood by browsers directly.
  It is compiled into JavaScript using Babel before execution.

Q: What is JSX in React?
A: JSX is a syntax extension for JavaScript that allows writing HTML-like code inside React components. It gets compiled to React.createElement() calls.

Q: Is JSX mandatory in React?
A: ❌ No, but it makes code simpler and more readable.

Q: How is JSX different from HTML?
A: JSX looks like HTML but is actually JavaScript and supports dynamic rendering using {}.

Q: Who converts JSX into JavaScript?
A: Babel transpiles JSX into React.createElement() calls.

# - Virtual DOM

- Virtual DOM is an in-memory copy of the real DOM that React uses to detect changes and update only the necessary parts of the UI.

Q: Why React Uses Virtual DOM?
A:

=> Manipulating the Real DOM is slow because:

        - Every DOM update causes reflows and repaints.

        - Large apps with many elements would become laggy.

=> React solves this by:

        - Keeping a virtual copy of the UI in memory.

        - Calculating differences between the old and new Virtual DOM.

        - Updating only the changed parts in the Real DOM.

=> Example -

```
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

How React Handles It Internally:

1. Creates a new Virtual DOM when count changes.

2. Compares it with the previous Virtual DOM.

3. Finds only <h2> changed.

4. Updates just that part in the Real DOM.

=> React’s Diffing & Reconciliation

    - React uses a highly optimized algorithm:

        => Diffing Algorithm

            - Compares old and new Virtual DOM trees.

            - If an element is different, React marks it for an update.

            - Uses O(n) complexity → very efficient.

        => Reconciliation

            - Applies only the necessary changes to the Real DOM.

Q: What is the Virtual DOM?
A: It's a lightweight copy of the real DOM that React uses to efficiently update the UI.

Q: How does Virtual DOM improve performance?
A: React compares the new Virtual DOM with the old one (diffing) and updates only the changed parts in the Real DOM.

Q: What is reconciliation?
A: The process of updating the Real DOM based on differences between old and new Virtual DOM.

Q: Is the Virtual DOM faster than the Real DOM?
A: Yes, because it minimizes expensive DOM operations.

# - Event handling

- Event handling in React means responding to user actions like clicks, typing, form submissions, mouse movements, key presses, etc.

| **Aspect**              | **React Synthetic Event** ✅                      | **Native Event** 🟡                             |
| ----------------------- | ------------------------------------------------- | ----------------------------------------------- |
| **Definition**          | React’s wrapper around native events.             | Browser’s built-in DOM events.                  |
| **Performance**         | Uses **event delegation** for better performance. | Handlers are attached directly to each element. |
| **Cross-browser**       | ✅ Same behavior across browsers.                 | ❌ May behave differently in browsers.          |
| **Access Native Event** | `event.nativeEvent`                               | Directly available.                             |

=> Event Delegation in React:

    - React uses event delegation for performance:

        - Instead of attaching listeners to each element, React attaches a single listener to the root DOM node.

        - React then uses event bubbling to detect which component triggered the event.

        - This reduces memory usage and improves speed.

=> Best Practices

✅ Use arrow functions for automatic this binding.
✅ Use meaningful handler names (handleClick, handleChange, handleSubmit).
✅ Use e.preventDefault() for form submissions.
✅ Use e.stopPropagation() when needed to prevent event bubbling.
✅ Keep event handlers small and clean.

Q: How is event handling in React different from HTML?
A:

Uses camelCase (onClick vs onclick).

Passes functions, not strings.

Uses Synthetic Events for cross-browser support.

Q: What is a Synthetic Event in React?
A:
A wrapper around native events that normalizes behavior across browsers.

Q: How to pass parameters to event handlers?
A:
Use an arrow function:

```
onClick={() => handleClick(id)}
```

Q: How does React handle events internally?
A:
Through event delegation on the root element.

# - Key prop in lists (React keys and why they’re important)

- In React, a key is a special attribute you provide when rendering lists of elements.

- It helps React identify which items have changed, added, or removed.

- Definition: A unique identifier for each item in a list so React can efficiently update the DOM.

=> Why Keys Are Important?

- React uses the Virtual DOM and updates the Real DOM using a diffing algorithm.
  When you render a list, React compares the new Virtual DOM with the old one to decide what changed.

        - Without keys → React re-renders all items unnecessarily.

        - With keys → React updates only the changed items → faster performance.

Q: Why are keys used in React lists?
A: Keys help React identify which elements have changed, allowing efficient updates.

Q: What happens if you don’t use keys?
A: React re-renders all list items, which impacts performance and can cause bugs.

Q: Can we use array index as a key?
A: Use only when the list is static and won’t change. Otherwise, prefer unique IDs.

Q: How do keys improve performance?
A: React uses diffing; keys allow it to skip unchanged items and update only the modified ones.

Best Practices

✅ Always use unique IDs for keys.

✅ Avoid using indexes unless the list is static.

✅ Keep keys stable — they shouldn’t change between renders.

✅ Use consistent keys when rendering dynamic components.

# - Default props

- In React, default props allow you to set default values for props when they are not passed by the parent component.

- This ensures that your component always has a value to work with and avoids undefined errors.

| **Use Case**     | **Without Default Props ❌**        | **With Default Props ✅**   |
| ---------------- | ----------------------------------- | --------------------------- |
| Missing prop     | `undefined` errors                  | Always has a value          |
| Code readability | Hard to know default behavior       | Self-documented             |
| Better DX        | Need to handle `undefined` manually | React handles automatically |
| Avoid bugs       | Random crashes possible             | Safer components            |

# - React Hooks:

        - What are hooks?

        - useState

        - useEffect

        - useMemo

        - useCallback

        - useRef

1. React Hooks are special functions introduced in React 16.8 that allow you to use state, lifecycle methods, and other React features in functional components without writing class components.

- Before Hooks

  - State and lifecycle methods were only available in class components.

  - Functional components were stateless.

- After Hooks

  - Functional components became powerful and stateful.

  - Hooks provide a cleaner, more reusable, and more readable way to write components.

2. useState 🟢
   Purpose → To manage state in a functional component.

```
const [state, setState] = useState(initialValue);
```

- state → Current state value.

- setState → Function to update the state.

- initialValue → Initial value of the state.

Key Points

- Re-rendering: When you call setCount, React re-renders the component.

- State batching: Multiple state updates inside the same event are batched for performance.

3. useEffect 🔄
   Purpose → To handle side effects in functional components.

A side effect is anything that affects something outside the component, such as:

- API calls

- DOM manipulation

- Setting timers

- Subscribing/unsubscribing to events

=> useEffect uses :

    - No dependency array → runs every time the component re-renders.

    - Empty dependency array → runs only once when the component mounts.

    - Runs only when count changes. (condition where the dependency array has some state or variable or something)

    - Useful for removing subscriptions, event listeners, or timers.
    Example =>

```
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleanup done");
  };
}, []);
```

4. useMemo 🧠
   Purpose → To optimize performance by memoizing expensive calculations.

```
const memoizedValue = useMemo(() => computeSomething(a, b), [a, b]);
```

- useMemo caches the result of the function.

- It recalculates only when dependencies change.

5. useCallback 🔗
   Purpose → To memoize functions and prevent unnecessary re-renders of child components.

```
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

6. useRef 📌

   Purpose →

   - To reference DOM elements.

   - To store mutable values without triggering re-renders.

   - To cache previous values.

# - Controlled vs Uncontrolled components

1. Controlled Components ✅

Definition

    - A controlled component is a form input whose value is controlled by React state.

    - The source of truth → React state.

    - Every time you type, React updates the state.

    - The input value comes from state → React is in full control.

```
import React, { useState } from "react";

function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;

```

How it works :-

    1. User types in the input.

    2. onChange updates the React state.

    3. React re-renders the component.

    4. The value of the input always matches the state.

2. Uncontrolled Components ⚠️

Definition

    - An uncontrolled component is a form input whose value is controlled by the DOM, not React.

    - The source of truth → DOM itself.

    - You don’t store the value in React state.

    - You access the value using useRef or document.querySelector().

```
import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <input ref={nameRef} placeholder="Enter name" />
      <input ref={emailRef} placeholder="Enter email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

| **Feature**           | **Controlled Component** ✅          | **Uncontrolled Component** ⚠️                          |
| --------------------- | ------------------------------------ | ------------------------------------------------------ |
| **Source of Truth**   | React State                          | DOM                                                    |
| **Access Value**      | From state (`value`)                 | Using `ref` or DOM APIs                                |
| **onChange Handling** | Required                             | Optional                                               |
| **Validation**        | Easy                                 | Harder                                                 |
| **Resetting Inputs**  | Easy (`setState("")`)                | Manual (`ref.current.value`)                           |
| **Performance**       | Slightly slower for very large forms | Faster for very simple forms                           |
| **Use Cases**         | Recommended for most apps            | Useful for simple, legacy, or third-party integrations |

Q: What’s the difference between controlled and uncontrolled components in React?
A:

- Controlled components → React state is the single source of truth.

- Uncontrolled components → The DOM manages the input value internally, and you fetch it using ref.

- Controlled components are preferred because they make form handling, validation, and state management easier.

# - React Router & client-side routing

- React Router is the most popular library for handling routing in React single-page applications (SPA). It enables client-side routing, meaning page transitions happen without refreshing the browser.

A. What is Client-Side Routing? 🧠

- Normally, in server-side routing:

  1. Each time you click a link → Browser sends a request to the server.

  2. The server responds with a new HTML page → Full page reload.

- In client-side routing (React Router):

  1. The app loads once.

  2. React Router intercepts link clicks.

  3. It updates the URL but doesn’t reload the page.

  4. The right component is rendered dynamically.

=> React Router Best Practices

✅ Use Link instead of <a> → prevents full reloads
✅ Use useNavigate instead of window.location.href
✅ Use Outlet for nested routing
✅ Use Suspense & React.lazy() for code-splitting

Q1. Difference between client-side and server-side routing?

    - Client-side: Faster, SPA-based, React Router manages views.

    - Server-side: Full page reloads, server serves new HTML every time.

Q2. How does React Router work internally?

    - Uses the History API (pushState, replaceState)

    - Listens to URL changes → renders matching component.

# - Context API vs Redux (when to use one over the other)

| Feature             | **Context API** 🟢                         | **Redux** 🔴                                     |
| ------------------- | ------------------------------------------ | ------------------------------------------------ |
| **Library Type**    | Built-in React API                         | External library                                 |
| **Best For**        | Small to medium apps                       | Large, complex apps                              |
| **State Structure** | Simple                                     | Organized & centralized                          |
| **Performance**     | Rerenders all consumers when value changes | Optimized with selective updates                 |
| **Debugging**       | Limited                                    | Powerful dev tools                               |
| **Boilerplate**     | Minimal                                    | More setup required                              |
| **Async Support**   | Manual                                     | Built-in support with **Redux Thunk** / **Saga** |

=> When to Use Which?

✅ Use Context API → Small to medium apps, light global state, simple logic

✅ Use Redux → Large-scale apps, multiple data sources, complex updates, debugging needs

# - Prop drilling & solutions

- Prop drilling happens when you pass data from a parent component to a deeply nested child component through multiple intermediate components, even if those components don’t need the data.

- This leads to:

  - Unnecessary code complexity

  - More boilerplate

  - Performance issues due to unwanted re-renders

=> When to Use Which Solution

| **Scenario**                 | **Best Solution**         | **Why**                             |
| ---------------------------- | ------------------------- | ----------------------------------- |
| Small app, few global states | **Context API**           | Simple & built-in                   |
| Medium app, moderate state   | **Context + useReducer**  | Better control & cleaner updates    |
| Large app, complex state     | **Redux Toolkit**         | Centralized store & debugging tools |
| Heavy API usage              | **React Query / Zustand** | Better server-state management      |

# - React.memo for optimization

- React.memo is a higher-order component (HOC) in React that optimizes performance by preventing unnecessary re-renders of functional components.

- By default, React re-renders a component whenever its parent re-renders, even if props haven't changed.

- React.memo caches the rendered result (memoization) and reuses it if props are the same.

Q1. What is React.memo and when would you use it?

React.memo is a higher-order component that memoizes functional components and skips re-renders if props haven't changed.

Use it for performance optimization when:

    - Props rarely change

    - Component is expensive to re-render

Q2. Why doesn’t React.memo work with objects or functions?

Because objects and functions are compared by reference, not value.
Use useMemo or useCallback to stabilize references.

=> Difference between React.memo and useMemo?

| Feature | **React.memo**                   | **useMemo**                 |
| ------- | -------------------------------- | --------------------------- |
| Purpose | Prevents **component re-render** | Memoizes **computed value** |
| Usage   | Wraps component                  | Wraps **values/objects**    |
| Level   | Component-level                  | Value-level                 |

# - Higher-Order Components (HOCs)

- An HOC is a function that takes a component as input and returns a new component with enhanced features.

- Key Points :-

  - HOC adds extra functionality to components without modifying their code.

  - HOCs reuse logic across multiple components.

  - Mostly used in authentication, logging, data fetching, analytics, and permissions.

- Example of HOCs

```
function withAuth(WrappedComponent) {
  return function AuthHOC(props) {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated) {
      return <h3>Access Denied. Please Login.</h3>;
    }

    return <WrappedComponent {...props} />;
  };
}

const Dashboard = () => <h1>Dashboard</h1>;
export default withAuth(Dashboard);
```

HOCs vs Custom Hooks ⚡

- Custom Hooks have replaced HOCs in modern React.

| Feature     | **HOCs**                             | **Custom Hooks**          |
| ----------- | ------------------------------------ | ------------------------- |
| Code Reuse  | ✅ Yes                               | ✅ Yes                    |
| Readability | ❌ Nested HOCs can be confusing      | ✅ Much cleaner           |
| Performance | Slightly slower due to extra renders | More efficient            |
| Popularity  | Used in older codebases              | Preferred in modern React |

# - Re-renders & performance optimization (memoization, lazy loading, code splitting)

Q: What Causes Re-renders in React

A: React components re-render when:

    - State changes (useState)

    - Props change (parent passes new props)

    - Context value changes (useContext)

    - Parent re-renders (child also re-renders, even if props didn't change)

    - Force updates (forceUpdate, Redux, etc.)

=> Lazy Loading in React

- Lazy loading means loading components only when needed instead of loading everything at once.

- This improves initial load performance.

=> Best Practices for Performance Optimization

| **Technique**               | **Use Case**                                             |
| --------------------------- | -------------------------------------------------------- |
| **React.memo**              | Prevent child re-renders when props don’t change         |
| **useMemo**                 | Cache expensive computations                             |
| **useCallback**             | Prevent function recreation & child re-renders           |
| **Lazy loading**            | Load components only when needed                         |
| **Code splitting**          | Reduce initial bundle size                               |
| **Debouncing & Throttling** | Optimize API calls & heavy events                        |
| **Virtualization**          | Use `react-window` or `react-virtualized` for long lists |
| **React Profiler**          | Detect performance bottlenecks                           |

# - Reconciliation & Diffing algorithm

# - Error boundaries (what they are & how to implement)

# - Auth & protected routes

# - React Fiber & Concurrent Mode

# - Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)

# - Testing tools (Jest, React Testing Library, etc.)

# - Infinite scroll implementation in React

# - Hydration in React (SSR/Next.js context, but concept applies to React too)
