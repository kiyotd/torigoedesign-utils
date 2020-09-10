# README

Utility library

[![npm version](https://badge.fury.io/js/%40torigoedesign%2Futils.svg)](https://badge.fury.io/js/%40torigoedesign%2Futils)
[![GitHub version](https://badge.fury.io/gh/kiyotd%2Ftorigoedesign-utils.svg)](https://badge.fury.io/gh/kiyotd%2Ftorigoedesign-utils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

Using yarn:

```bash
yarn add @torigoedesign/utils
```

Using npm:

```bash
npm install @torigoedesign/utils
```

## Usage

### Validation

#### Email address validation

```typescript
import { isEmail } from "@torigoedesign/utils";

console.log(isEmail("example@example.com")); //true
console.log(isEmail("example@exam@ple.com")); //false
```

#### IPv4 address validation

```typescript
import { isIPv4 } from "@torigoedesign/utils";

console.log(isIPv4("255.255.255.255")); //true
console.log(isIPv4("255.255.255.256")); //false
```
