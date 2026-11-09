# Access Modifiers in TypeScript: public, private, protected, and readonly

## Introduction

TypeScript is a programming language built on top of JavaScript. One of its useful features for object-oriented programming is access modifiers. They control who can read or change the properties and methods of a class. TypeScript has four of them: `public`, `private`, `protected`, and `readonly`. In this blog, I explain how each one works with simple examples.

## Public

`public` means everyone can use the member, inside and outside the class. It is the default modifier.

```ts
class Student {
  constructor(public name: string, public age: number) {}
}

const emon = new Student("Emon Hossain Hira", 23);
console.log(emon.name); // allowed
```

## Private

`private` means only the code inside the same class can use the member. It cannot be accessed from outside the class.

```ts
class Student {
  constructor(public name: string, private age: number) {}
}

const emon = new Student("Emon Hossain Hira", 23);
emon.age; // Error: 'age' is private
```

## Protected

A `protected` member can be used inside its own class and inside child classes, but not from outside.

```ts
class Person {
  constructor(protected name: string) {}
}

class Student extends Person {
  introduce() {
    return `I am ${this.name}`; // allowed in child class
  }
}

const emon = new Student("Emon Hossain Hira");
emon.name; // Error: 'name' is protected
```

## Readonly

`readonly` stops a property from being changed after it is set in the constructor. You can still read it.

```ts
class Student {
  constructor(public readonly id: number, public name: string) {}
}

const emon = new Student(101, "Emon Hossain Hira");
emon.name = "Hira"; // allowed
emon.id = 102;      // Error: 'id' is read-only
```

## Key Difference

Public:
1. `public` keyword.
2. Allows access to the value from anywhere.
3. It is the default modifier.

Private:
1. `private` keyword.
2. Allows access to the value only inside its own class.
3. Use it to hide important data from outside code.

Protected:
1. `protected` keyword.
2. Allows access to the value inside its own class and child classes.
3. Use it when child classes need the data but outside code should not.

Readonly:
1. `readonly` keyword.
2. The value can be set once, in the constructor, and cannot be changed after that.
3. Use it for values that must never change, like an `id`.

## Conclusion

Access modifiers help us protect the data inside a class and decide how it can be used. `public` members are open to everyone, `private` members stay inside the class, and `protected` members can also be used by child classes. `readonly` makes sure a value cannot be changed after it is set. As a simple rule, keep members `private` by default and open them only when needed. Using access modifiers correctly makes your classes safer, cleaner, and easier to maintain.