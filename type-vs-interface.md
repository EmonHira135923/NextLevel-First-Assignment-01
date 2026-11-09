# Type Alias vs Interface in TypeScript

## Introduction

TypeScript is a programming language built on top of JavaScript. `type` aliases and `interface` are two of its most important features. A `type` alias can describe basic types, unions, tuples, and intersections. An `interface` is mainly used to describe the shape of objects. In this blog, I explain both and when to use each one.

## Type Alias

A type alias gives a name to a type so you can reuse it. You do not have to write the same type again and again. It works for objects and also for simple types and unions.

```ts
type Role = "admin" | "student" | "teacher";

const myRole: Role = "student";
```

## Interface

An interface describes the shape an object must follow: which properties it has and what type each one is. An interface can also extend another interface to get its properties.

```ts
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const user: Person = {
  name: "Emon Hossain Hira",
  age: 23,
  isStudent: true,
};
```

## Key Difference

| Type Alias | Interface |
|---|---|
| Uses the `type` keyword. | Uses the `interface` keyword. |
| Can describe objects and other types. | Mainly describes objects. |
| Can make union types. | Cannot make union types directly. |
| Combines types with `&`. | Extends other interfaces with `extends`. |
| Cannot be declared twice. | Can be merged when declared twice. |

## Conclusion

Both `type` aliases and `interface` describe data in TypeScript. Use `interface` for object shapes and class contracts, and use `type` for unions, tuples, and intersections. Choosing the right one keeps your code clean and easy to maintain.