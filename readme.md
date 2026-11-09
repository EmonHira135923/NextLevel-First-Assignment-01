# TypeScript & OOP Assignment

## Assignment Overview

This repository contains my solutions for **Module 4: Assignment-1** (Problem Solving with TypeScript & OOP). The assignment covers core TypeScript concepts from Modules 1, 2, and 3, and has two parts: problem solving (all code in a single file, `solutions.ts`) and a blog task (two technical blog posts).

## Problem Solving

All solutions are in [`solutions.ts`](./solutions.ts).

| #   | Name                           | Concepts Used                                       |
| --- | ------------------------------ | --------------------------------------------------- |
| 1   | `multiplyValue`                | Optional parameters, default behavior, handling `0` |
| 2   | `processInput`                 | Union types, type narrowing with `typeof`           |
| 3   | `formatCoordinate`             | Readonly tuples, template strings                   |
| 4   | `concatenateArrays`            | Generics, rest parameters                           |
| 5   | `Course` / `getPopularCourses` | Interfaces, array filtering without mutation        |
| 6   | `pluckValues`                  | Generics with `keyof` constraint                    |
| 7   | `Employee` / `Manager`         | Classes, inheritance, `protected` and `private`     |
| 8   | `validateAgeAsync`             | `Promise<string>`, `setTimeout`, error handling     |

## Blog Posts

1. [Type Alias vs Interface in TypeScript](./type-vs-interface.md)
2. [Access Modifiers in TypeScript: public, private, protected, and readonly](./public_private_protected_and_readonly.md)

## Project Structure

```text
├── solutions.ts
├── type-vs-interface.md
├── access-modifiers.md
└── README.md
```

## How to Check the Code

Make sure TypeScript is installed, then run:

```bash
npx tsc --noEmit solutions.ts
```

If there are no errors, the type check passed.
