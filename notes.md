# What is React and how does it work?

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
