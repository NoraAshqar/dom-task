# Advanced DOM Tasks (No Events)

These tasks are designed to deepen your understanding of the DOM, geometry, and browser APIs. No event listeners are allowed. Use only direct DOM APIs and scripting.

---

## Task 1: DOM Archaeologist

**Scenario:**  
You’ve been handed a legacy HTML layout. Your mission is to reconstruct its structure **without modifying it** — only via DOM traversal.

**HTML Sample:**

```html
<body>
  <header>
    <h1>My Website</h1>
  </header>
  <main>
    <section>
      <p>First paragraph</p>
      <p>Second paragraph</p>
    </section>
    <aside>Sidebar</aside>
  </main>
</body>
```

### Instructions:

1. Starting from document.body, write code that logs (in order):

- The tag name of the last element child of <main>, using only navigation properties (no query selectors).

- The number of element children in <section> (not text nodes).

- The difference in length between childNodes and children of <section>. Explain why they differ.

2. Determine:

- What is the nodeType and nodeName of the first node in document.body.childNodes?

- Is the first paragraph a sibling of the second, or a descendant?

#### Twist:

Can you find any unexpected text nodes in the DOM structure? Log them and explain their origin.

## Task 2: Synthetic DOM Injection

### Scenario:

You’re writing a script that dynamically injects a component into a clean HTML page. You are not allowed to use innerHTML.

### Instructions:

Using only DOM methods, construct this structure in memory, then attach it to the page:

```html
<div class="card" data-role="admin">
  <h2>Access Panel</h2>
  <p>Authenticated</p>
</div>
```

After appending it to the document body:

- Log the value of the data-role as a JS property, not via `.getAttribute`.

- Change the paragraph text to "Welcome back, Admin" using a property, not a method.

- Add two classes to the div: "authenticated" and "highlight" using `classList`.

### Challenge:

Use `classList.contains()` to verify that "card" still exists, and remove it while keeping the others.

----

## Submission Instructions

To submit your solutions:

- Fork this repository to your GitHub account.

- Create a folder inside the submissions/ directory named after your GitHub username or full name:

`submissions/your-name/`

- Inside your folder, create one file for the task:

`submissions/your-name/dom.js`

- Push your code to your forked repo.

- Open a Pull Request to this repo from your fork. Title the PR:

`[Your Name] - DOM Assignment Submission`
