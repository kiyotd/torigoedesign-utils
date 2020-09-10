# README

Utility library for me :)

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
