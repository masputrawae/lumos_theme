---
id: '20250712220512'
title: Typography Preview
description: Typography preview
image: https://picsum.photos/1080/720?2
tags:
  - typography
  - markdown
created: 2025-07-12T22:05:12+07:00
updated: 2025-07-12T22:05:12+07:00
pinned: true
---

Officia aute ut voluptate magna amet dolore sint nisi voluptate. Quis proident exercitation ipsum anim et magna et laboris anim sit consequat mollit duis cillum. Eiusmod est elit esse enim. Sunt ex officia laboris deserunt dolor irure. Ex eiusmod in anim ea eiusmod velit minim sint exercitation.

---

Laborum duis dolore mollit amet laboris incididunt incididunt irure ullamco adipisicing. Eu magna nulla nisi commodo nulla. Est aliquip cillum quis voluptate minim enim do deserunt. Ea tempor sint in aliqua aute veniam ipsum qui commodo labore consectetur. Sit nostrud pariatur nulla enim mollit.

Irure laborum irure ipsum ullamco ipsum tempor incididunt cupidatat fugiat qui aliquip. Nisi aliquip ad nulla aliqua eu deserunt fugiat tempor aute irure tempor. Veniam exercitation voluptate minim ad occaecat mollit excepteur sit quis exercitation occaecat. Labore incididunt sit sint do velit eiusmod culpa commodo et eiusmod nisi tempor occaecat. Veniam amet nulla est elit culpa commodo qui qui et dolore ullamco Lorem. Adipisicing elit culpa ullamco aliqua.

Et eu ipsum tempor nostrud labore aute enim id ea reprehenderit deserunt deserunt occaecat tempor. Veniam ad labore aliqua ullamco esse. Est fugiat magna eu eiusmod et ut non do.

**Advertisement :)**

- **[pica](https://nodeca.github.io/pica/demo/)** - high quality and fast image
  resize in browser.
- **[babelfish](https://github.com/nodeca/babelfish/)** - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

4. You can use sequential numbers...
5. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js {file="/src/main.js"}
var foo = function (bar) {
  return bar++
}

console.log(foo(5))
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

## Images

Laborum nulla amet in duis est ipsum deserunt et anim laboris incididunt dolor non id. Non mollit enim ullamco enim veniam dolore. Esse incididunt adipisicing duis duis magna sint elit veniam sunt amet nisi velit. Esse velit adipisicing nostrud minim nulla culpa nisi non ullamco ex officia enim velit. Consequat veniam cillum et consequat tempor aliquip non.

![Minion](https://octodex.github.com/images/minion.png "left|this is a cute picture of a cat")

Consectetur elit deserunt laborum aliqua cupidatat cupidatat tempor ad commodo Lorem in nostrud. Mollit aute incididunt dolor aliqua cillum consectetur officia. Occaecat duis proident consectetur incididunt anim aliquip. Irure ut mollit exercitation pariatur consectetur irure exercitation Lorem ad consectetur et.

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'right|The Stormtroopocat')

Occaecat esse ad ullamco consequat eiusmod ex eiusmod in nulla. Laboris nulla fugiat est culpa consequat. Duis adipisicing aliqua deserunt proident exercitation laborum aute. Qui nisi magna sunt mollit excepteur sint.

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'

## Plugins

The killer feature of `markdown-it` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).

### Emojies

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### Subscript / Superscript

- 19^th^
- H~2~O

### \<ins>

++Inserted text++

### \<mark>

==Marked text==

### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### Definition lists

Term 1

: Definition 1
with lazy continuation.

Term 2 with _inline markup_

: Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
~ Definition 1

Term 2
~ Definition 2a
~ Definition 2b

### Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

\*[HTML]: Hyper Text Markup Language

### Custom containers

::: warning
_here be dragons_
:::