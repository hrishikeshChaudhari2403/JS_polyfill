# JavaScript Polyfills & Utilities

This repository contains custom implementations of commonly used JavaScript polyfills and utilities.  
The goal is to understand the internal working of core JavaScript features by building them from scratch.

---

## 📌 Function Polyfills

- **Function.prototype.call**
  - Custom implementation of the `call` method for invoking a function with an explicit `this` context.

- **Function.prototype.apply**
  - Polyfill for `apply` to invoke a function with a specified `this` value and arguments as an array.

- **Function.prototype.bind**
  - Polyfill for `bind` supporting permanent `this` binding, partial arguments, and constructor usage (`new`).

---

## 📌 Promise Polyfills

- **Promise.all**
  - Resolves when all promises resolve.
  - Rejects immediately if any promise rejects.

- **Promise.allSettled**
  - Resolves after all promises settle.
  - Returns an array of result objects with `status` and `value` / `reason`.

- **Promise.race**
  - Settles as soon as the first promise settles (resolve or reject).

- **Promise.any**
  - Resolves when the first promise resolves.
  - Rejects with `AggregateError` if all promises reject.

---

## 📌 Utility Functions

- **Debounce**
  - Limits function execution by delaying it until after a specified wait time.
  - Supports immediate and trailing execution modes.

- **Throttle**
  - Ensures a function executes at most once in a given time interval.
  - Supports leading and trailing execution options.

- **Memoization**
  - Caches function results to optimize repeated calls.
  - Includes cache eviction strategy to limit memory usage.

- **Deep Clone**
  - Creates a deep copy of objects.
  - Handles nested structures and circular references safely.

---




