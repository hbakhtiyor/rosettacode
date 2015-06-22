# Rosettacode

This is a node.js command line utility that turns running/showing different challenges into an easy experiences.


**Features:**

* Easy to search challenges.
* Instant feedback after running code.
* Easy to install and use.

## Installation

This utility is available on npm, so installation is a breeze. Use the **-g** flag:

```bash
npm install -g rosettacode
```

## Usage

To use it, run `rosettacode` with commands and options.

### Examples

Show a list of available challenges:

```bash
rosettacode challenges
```

Run one or more challenges and immediately get feedback:

```bash
rosettacode run example_1
```

```bash
rosettacode run example_2, example_3
```

Show one or more challenges' description in a terminal output or source code in a browser:

```bash
rosettacode show example_1
```

```bash
rosettacode show example_1 --description 
```