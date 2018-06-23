# Header
```html_example
<header class="grid-container full">
    <div class="title-bar">
        <div class="title-bar-left">
          <button class="menu-icon" type="button"></button>
          <span class="title-bar-title">Johan N. Martin</span>
        </div>
      </div>
  <nav class="top-bar icons">
      <ul class="menu align-left">
        <li class="menu-text">Johan N. Martin</li>
        </ul>
        <ul class="menu align-center icons">
        <li>
          <a href="{{root}}/index.html">Home</a>
        </li>
        <li>
          <a href="{{root}}/notebook.html">Notebook</a>
        </li>
        <li>
          <a href="{{root}}/lab.html">Lab</a>
        </li>
      </ul>
      <ul class="menu align-right">
        <li>
          <a href="#">
              <i class="fa fa-mobile" aria-hidden="true"></i>
            <span>Phone</span></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-envelope"><span>Email</span></i></a>
        </li>
        <li><a href="#"><i class="fa fa-github-square"><span>GitHub</span></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin-square"><span>LinkedIn</span></i></a></li>
      </ul>
  </nav>
</header>
```
---
# Cards
```html
<div class="card">
  <a href="#" class="card-image">
    <div class="background-card-image"></div>
    <div class="image-hover"></div>
  </a>
  <div class="card-details">
    <div class="category">category</div>
    <h2 class="title"><a href="#">title</a></h2>
    <p class="meta">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, repellendus?<span class="date">24 nov 2017</span> </p>
    <div class="excerpt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore vel corrupti earum cum natus voluptatibus corporis harum libero perspiciatis possimus reiciendis, praesentium maxime asperiores consectetur? Quas error magnam quisquam.</p></div>
    <div class="tail"><a href="#">Read more</a></div>
  </div>
</div>
```
---

## Nesting grid-x

In the Grid you can nest cells down as far as you'd like. Just embed grid-x inside cells and go from there. Each embedded grid-x can contain up to 12 cells.

```html
<div class="grid-x">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cell">4</div>
</div>
```

<div class="grid-x display">
  <div class="small-8 cell">8
    <div class="grid-x">
      <div class="small-8 cell">8 Nested
        <div class="grid-x">
          <div class="small-8 cell">8 Nested Again</div>
          <div class="small-4 cell">4</div>
        </div>
      </div>
      <div class="small-4 cell">4</div>
    </div>
  </div>
  <div class="small-4 cellgi">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="grid-x">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>
```

<div class="grid-x display">
  <div class="small-2 cell">2</div>
  <div class="small-10 cell">10, last</div>
</div>
<div class="grid-x display">
  <div class="small-3 cell">3</div>
  <div class="small-9 cell">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>\_settings.scss</code></p>

---
<div class="grid-container">
<div class="auto cell">
  <div class="column">
    <div class="color-block">
      <span style="background: #3d4a31"></span>
      #3d4a31 Primary
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #6e8983"></span>
      #6e8983 Secondary
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #f4f4f4"></span>
      #f4f4f4 Background
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #063d79"></span>
      #063d79 Success
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #ff6418"></span>
      #ff6418 Warn
    </div>
  </div>
    <div class="auto cell">
    <div class="color-block">
      <span style="background: #ece50b"></span>
      #ece50b 
    </div>
  </div>
    <div class="auto cell">
    <div class="color-block">
      <span style="background: #5f770e"></span>
      #5f770e
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #030303"></span>
      #030303
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #fffb18"></span>
      #fffb18 Yellow
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #a578ff"></span>
      #a578ff Purple
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #92c9ff"></span>
      #92c9ff
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #8fd16f"></span>
      #8fd16f
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #108757"></span>
      #108757
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #0b3a42"></span>
      #0b3a42
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #ff404a"></span>
      #ff404a
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #5ca0f2"></span>
      #5ca0f2
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #ff881d"></span>
      #ff881d
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #2e47ea"></span>
      #2e47ea
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #f7ffb1"></span>
      #f7ffb1
    </div>
  </div>
  <div class="auto cell">
    <div class="color-block">
      <span style="background: #ffe5b4"></span>
      #ffe5b4
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Helvetica Neue for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button">Large button</a>
<a href="#" class="primary button">Regular button</a>
<a href="#" class="primary small button">Small button</a>
<a href="#" class="primary tiny button">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button">Large button</a>
<a href="#" class="secondary button">Regular button</a>
<a href="#" class="secondary small button">Small button</a>
<a href="#" class="secondary tiny button">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```



# New Section

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora omnis suscipit id ut laborum recusandae molestias hic aliquid **expedita!** [Non dicta](zurb.com), autem obcaecati error, id ab voluptate unde culpa nulla.

```html_example
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
```
