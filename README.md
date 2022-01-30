# React Student Details

## External Packages

1. Ant Design - UI library.
2. Zustand - state management.
3. Firebase - File management & CI/CD.
4. React Router - Routing solution.

## Foreign Files

1. `firebase.js` initialize firebase, the file is required by the `index.js`.
2. `store.js` zustand state management, holds the global app state.

## Directories

1. Elements - contains the apps elements, used by various components and instances of these components.
2. Components - contains the 3 steps and an indicator of what step the user is at.

## Question One

```javascript
// Encoding functions
// Result: 3a4b2c1d2a
const encode = (input) => {
  // Complete function here to return 3a4b2c1d2a
};

encode(aaabbbbccdaa);
```

### Answer 01

```Javascript
const encode = (input) => {
  let encodedStr = '';
  const charArrs = input.match(/([a-zA-Z])\1*/g) || [];
  for (const charArr of charArrs) encodedStr = encodedStr + charArr.length + charArr.charAt(0);
  return encodedStr;
};

encode('aaabbbbccdaa');
```

## Question Two

```javascript
const sum = () => {
  // complete function as instructed
};
// sum(1)(2)(3)(4)()
// Logs 10
```

### Answer 02

```javascript
const sum = (a) => {
  return (b) => (c) => (d) => (e) => console.log(a + b + c + d);
};

sum(1)(2)(3)(4)();
```
