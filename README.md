# MZR - Measure

MZR is an module that highlights multiple character-per-line counts in any line of text. This is meant to be a tool for web typography nerds that want an indication of desired "character-per-line" settings.

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
### Example of output

![MZR example](https://github.com/brownerd/mzr/blob/master/example.png?raw=true "MZR example")

Here we can see that four measures are highlighted in one line of text: 35, 65, 85 and 105. Now we can use the web inspector to adjust font-size and/or column width to easily arived at the desired line measure.

This is intended to be used for development purposes during the "design-to-code" phase.
