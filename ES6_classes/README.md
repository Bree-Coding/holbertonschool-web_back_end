Here’s an updated README.md file with a warm welcome and more emojis:

---

# 🎉 Welcome to the ES6 Classes Project! 🎉

Welcome to the **ES6 Classes** repository! 🚀 This project showcases the power of modern JavaScript features like **classes**, **inheritance**, **getters and setters**, **static methods**, and more. Dive in and explore how ES6 makes object-oriented programming in JavaScript more elegant and efficient! 💻✨

---

## 🌟 Tasks Overview

### 🏫 0. You used to attend a place like this at some point
- **Description**: Implement a class named `ClassRoom`.
- **Attributes**: 
  - `maxStudentsSize` (Number) stored as `_maxStudentsSize`.

---

### 🏠 1. Let's make some classrooms
- **Description**: Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

---

### 📚 2. A Course, Getters, and Setters
- **Description**: Implement a class named `HolbertonCourse`.
- **Attributes**:
  - `name` (String)
  - `length` (Number)
  - `students` (Array of Strings)
- **Features**:
  - Validate types during object creation.
  - Implement getters and setters for each attribute.

---

### 💰 3. Methods, static methods, computed methods names..... MONEY
- **Description**: Implement a class named `Currency`.
- **Attributes**:
  - `code` (String)
  - `name` (String)
- **Features**:
  - Implement getters and setters for each attribute.
  - Add a method `displayFullCurrency` that returns `name (code)`.

---

### 💵 4. Pricing
- **Description**: Implement a class named `Pricing`.
- **Attributes**:
  - `amount` (Number)
  - `currency` (Currency)
- **Features**:
  - Implement getters and setters for each attribute.
  - Add a method `displayFullPrice` that returns `amount currency_name (currency_code)`.
  - Add a static method `convertPrice` to convert prices using a conversion rate.

---

### 🏢 5. A Building
- **Description**: Implement a class named `Building`.
- **Attributes**:
  - `sqft` (Number)
- **Features**:
  - Implement a getter for `sqft`.
  - Ensure this class is abstract by requiring subclasses to implement a method `evacuationWarningMessage`.

---

### 🏙️ 6. Inheritance
- **Description**: Implement a class named `SkyHighBuilding` that extends `Building`.
- **Attributes**:
  - `sqft` (Number)
  - `floors` (Number)
- **Features**:
  - Implement getters for each attribute.
  - Override `evacuationWarningMessage` to return `Evacuate slowly the NUMBER_OF_FLOORS floors.`.

---

### ✈️ 7. Airport
- **Description**: Implement a class named `Airport`.
- **Attributes**:
  - `name` (String)
  - `code` (String)
- **Features**:
  - Override the default string description to return the airport code.

---

### 🏫 8. Primitive - Holberton Class
- **Description**: Implement a class named `HolbertonClass`.
- **Attributes**:
  - `size` (Number)
  - `location` (String)
- **Features**:
  - When cast to a `Number`, return the `size`.
  - When cast to a `String`, return the `location`.

---

### 🎓 9. Hoisting
- **Description**: Fix the provided code to make it work.
- **Features**:
  - Implement the `HolbertonClass` and `StudentHolberton` classes.
  - Ensure the `listOfStudents` array works as expected.

---

### 🚗 10. Vroom
- **Description**: Implement a class named `Car`.
- **Attributes**:
  - `brand` (String)
  - `motor` (String)
  - `color` (String)
- **Features**:
  - Add a method `cloneCar` that returns a new object of the class using ES6 Symbols.

---

## 📂 Repository Structure
- **GitHub Repository**: `holbertonschool-web_back_end`
- **Directory**: `ES6_classes`

---

## 🎉 Thank You!
Thank you for exploring the **ES6 Classes** project! 🌟 We hope you enjoy learning and experimenting with modern JavaScript features. If you have any questions or feedback, feel free to reach out. Happy coding! 💻✨

--- 
