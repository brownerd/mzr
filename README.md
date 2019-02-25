# MZR - Measure

MZR is an module that highlights multiple character-per-line counts in any line of text. This is meant to be a tool for web typography nerds that want an indication of desired "character-per-line" settings.

![MZR example](brownerd/mzr/blob/master/example.png?raw=true "MZR example")

## Isntall

```
npm install mzr --save-dev
```

## Usage
Pick any elemenet in your page and give it a data attribute of `data-mzr=""`. Assign this attribute any number. You can assign multiple numbers separated by a `/` to indicate multiple character counts in one line of text. Peep the example below.

```html
<!-- Example -->
<p data-mzr="35/65/85/105">
  Cardinals arch gooey butter cake south grand muny nelly mississippi river, CWE barnes-jewish hospital toasted ravioli anheuser-busch neon sign. Lindbergh St. Louis science center and zoo turtle park soulard bowling riverfront times. Delmar loop blueberry hill tivoli COCA moonrise hotel RAC answers.com washington university forest park spanish pavilion art hill.
</p>

```


