# 🚀 Async Comprehension Project

This project explores asynchronous generators and asynchronous comprehensions in Python.  
Perfect for learning how to use `async` and `await`! 🐍⚡

## 📁 Files & Tasks

### 1️⃣ 0-async_generator.py  
**Goal:**  
Create an asynchronous generator that yields 10 random floating-point numbers between 0 and 10.  
**Main function:**  
- `async_generator()`  
**Details:**  
- Uses `asyncio.sleep(1)` to simulate asynchronous operations ⏳  
- Uses `random.uniform(0, 10)` to generate numbers 🎲

---

### 2️⃣ 1-async_comprehension.py  
**Goal:**  
Use an asynchronous comprehension to collect values from `async_generator`.  
**Main function:**  
- `async_comprehension()`  
**Details:**  
- Collects the 10 generated values into a list 📋  
- Uses `[i async for i in async_generator()]` for the comprehension

---

### 3️⃣ 2-measure_runtime.py  
**Goal:**  
Measure the total runtime of running 4 asynchronous comprehensions in parallel.  
**Main function:**  
- `measure_runtime()`  
**Details:**  
- Uses `asyncio.gather` to run `async_comprehension` 4 times concurrently 🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️  
- Measures total time with `time.perf_counter()` ⏱️  
- Returns the total execution time

---

### 📝 0-main.py  
**Goal:**  
Provides usage examples and tests for the previous functions.

---

## ▶️ Usage

To run a file, use the following command:

```sh
python3 [0-main.py](http://_vscodecontentref_/0)