# Difference Calculator

A difference calculator is a cli-program that calculates the difference between two data structures.

[![Actions Status](https://github.com/ZorenkoElena/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ZorenkoElena/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/c8c4e32010221de010ab/maintainability)](https://codeclimate.com/github/ZorenkoElena/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c8c4e32010221de010ab/test_coverage)](https://codeclimate.com/github/ZorenkoElena/frontend-project-lvl2/test_coverage)

### Utility features:

- Support for different input formats: yaml, json
- Report output as plain text, stylish and json

### Usage example:

```
# output format: plain
gendiff --format plain filepath1.yml filepath2.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```

```
# output format: stylish (default format)
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

### Installation

git clone https://github.com/ZorenkoElena/frontend-project-lvl2.git

```
cd gendiff
make install
npm link
```

### Demo

[![asciicast](https://asciinema.org/a/555391.svg)](https://asciinema.org/a/555391)
