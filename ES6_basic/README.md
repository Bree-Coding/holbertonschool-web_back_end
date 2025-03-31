# ES6 Basics 🚀

Welcome to the **ES6 Basics** project! This repository contains tasks to help you understand and practice ES6 features like `const`, `let`, arrow functions, template literals, and more. 🌟

---

## Setup 🛠️

### Install NodeJS 20.x.x
Run the following commands in your home directory to install Node.js:

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```bash
$ nodejs -v
v20.15.1
$ npm -v
10.7.0
```

---

### Install Jest, Babel, and ESLint
Run the following commands in your project directory to install the necessary dependencies:

- Install Jest:
  ```bash
  npm install --save-dev jest
  ```

- Install Babel:
  ```bash
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```

- Install ESLint:
  ```bash
  npm install --save-dev eslint
  ```

---

### Configuration Files
Create the following configuration files in your project directory:

#### `package.json`
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

---

#### `babel.config.js`
```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

---

#### `.eslintrc.js`
```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

---

### Final Steps
Run the following command in your project directory to install all necessary dependencies:

```bash
npm install
```

**Note:** Do not push the `node_modules` folder to your repository.

---

## Tasks 📚

### 0. Const or let? 🛠️
Modify:
- `taskFirst` to use `const`.
- `taskNext` to use `let`.

**File:** `0-constants.js`

```javascript
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += ' is okay';
  return combination;
}
```

---

### 1. Block Scope 🔒
Ensure variables inside the function `taskBlock` aren’t overwritten by using block scope.

**File:** `1-block-scoped.js`

```javascript
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
```

---

### 2. Arrow Functions ➡️
Rewrite the `add` function using ES6 arrow syntax.

**File:** `2-arrow.js`

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
```

---

### 3. Parameter Defaults ✏️
Condense the function `getSumOfHoods` to one line using default parameter values.

**File:** `3-default-parameter.js`

```javascript
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
```

---

### 4. Rest Parameter Syntax 📋
Use the rest parameter syntax to return the number of arguments passed to the function.

**File:** `4-rest-parameter.js`

```javascript
export default function returnHowManyArguments(...args) {
  return args.length;
}
```

---

### 5. Spread Syntax 🌌
Concatenate two arrays and each character of a string using spread syntax.

**File:** `5-spread-operator.js`

```javascript
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
```

---

### 6. Template Literals 📝
Rewrite the return statement of `getSanFranciscoDescription` using template literals.

**File:** `6-string-interpolation.js`

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `As of ${year}, it was the seventh-highest income county in the United States, with a per capita personal income of ${budget.income}. As of 2015, San Francisco proper had a GDP of ${budget.gdp}, and a GDP per capita of ${budget.capita}.`;
}
```

---

### 7. Object Property Value Shorthand ✂️
Simplify the `budget` object using property value shorthand syntax.

**File:** `7-getBudgetObject.js`

```javascript
export default function getBudgetObject(income, gdp, capita) {
  return { income, gdp, capita };
}
```

---

### 8. Computed Property Names 🖋️
Use ES6 computed property names in the `getBudgetForCurrentYear` function.

**File:** `8-getBudgetCurrentYear.js`

```javascript
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = new Date().getFullYear();
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita,
  };
}
```

---

### 9. ES6 Method Properties 🛠️
Rewrite `getFullBudgetObject` to use ES6 method properties.

**File:** `9-getFullBudget.js`

```javascript
export default function getFullBudgetObject(income, gdp, capita) {
  const budget = { income, gdp, capita };
  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
```

---

### 10. For...of Loops 🔄
Rewrite `appendToEachArrayValue` to use ES6’s `for...of` loop.

**File:** `10-loops.js`

```javascript
export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(appendString + value);
  }
  return result;
}
```

---

### 11. Iterator 🔁
Create a function `createEmployeesObject` that returns an object with a department name and employees.

**File:** `11-createEmployeesObject.js`

```javascript
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
```

---

### 12. Report Object 📊
Create a function `createReportObject` that returns an object with `allEmployees` and a method `getNumberOfDepartments`.

**File:** `12-createReportObject.js`

```javascript
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
```