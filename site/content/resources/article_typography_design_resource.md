---
created_at: Friday, May 1, 2020
updated_at: Sunday, May 3, 2020
title: Article Typography Design Resource
author: Greg Hemphill
description: Resource for designing article typographic styling and the layout of article elements.
draft: false
layout: article
---

This document is a resource to design the interactions of various common article elements when 
developing typographic styling. There really isn't much to see here -- unless 
you're a design nerd. 

Most people probably want to visit our [home page](/) instead. 

### Overview

The purpose of this document is to be used while creating or modifying stylesheets for text articles. This document 
focus on the content of an article body. There is no attempt to cover general GUI elements like toolbars, dialog modals, 
page templates, navigation, & etc. In fact, they are intentionally avoided. There's nothing precluding this document 
from being used in UI design projects, in fact it's well suited to be part of a UI design project, but it's not focus. 

I've attempted to avoid placing any opinions about _how_ things should look or _how_ they should be styled,
in this document. It's meant to be used like the [CSS Zen Garden](http://www.csszengarden.com) of lore  -- 
_you supply the design & styling_.

You're free to use this document anywhere you'd like. Attribution is appreciated, but not required. It uses an MIT 
Licence. If you want to use this, but the MIT licence doesn't suit your needs, contact me and we'll probably be able to 
work something out.


### Links

Here is a [visited link](/) and an [unvisited link](#something-unvisited).

Here is a **[bold link](#something-unvisited)**, an *[italic one](#something-unvisited)*, and a _**[bold italic link](#something-unvisited)**_.

### Quotes

Going to "quote something" to make sure those quotes look nice and curly, even the 'single quotes'. 

"Perhaps have a 'quote inside' another quote."



##### Blockquote

> Dolor sit amet, consectetur adipiscing elit. Fusce ac eros interdum, suscipit lorem ac, scelerisque libero. In aliquet viverra tortor vitae semper. Nulla adipiscing commodo lacus nec vulputate. 

##### Blockquote within a figure

With a caption containing a citation.

<figure>
  <figcaption>Programming according to <cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>

### Images

We start off with a standard image within a link. I took this picture. If you're using a copy of this article in your own 
website or app, you're free to use this image along with it.

[![statue in St. Petersburg, FL](/images/stpete_1024x685.jpeg)](/images/stpete_1024x685.jpeg)


The Previous image is a `JPEG`, the next one is an `SVG`.

##### Image within a figure 

<figure>
  <img src="/images/squiggle-white.svg">
  <figcaption>
    <cite>
      The Process of Design Squiggle by<br> 
      Damien Newman, <a href="https://thedesignsquiggle.com">thedesignsquiggle.com</a>
    </cite>
  </figcaption>
</figure>


### Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac eros interdum, suscipit lorem ac, scelerisque libero. In aliquet viverra tortor vitae semper. Nulla adipiscing commodo lacus nec vulputate. 

Aliquam erat volutpat. Fusce et fermentum tortor, id aliquam ligula. Suspendisse potenti. 

Quisque condimentum sem vitae neque hendrerit, vel suscipit ante hendrerit. Vivamus metus mauris, vehicula ut augue eu, faucibus accumsan lorem. Sed erat velit, faucibus sit amet enim eget, varius scelerisque diam. Sed sollicitudin blandit dolor, id varius nunc fringilla vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus nibh, blandit nec dignissim eget, varius scelerisque justo. Integer ornare in quam in hendrerit. Etiam ut laoreet augue.

### Inline Text

This is a paragraph; it has _italic text_ and also **bold text**.

This paragraph has _italic text and within it is some **bold text**_.

This paragraph has **bold text and within it is some _italic text_**.

This paragraph has some inline code in it, `{foo != bar}`.

This paragraph has <cite>a citation</cite>.

Some numbers: 1 2 3 4 5 6 7 8 9 10 20 30 50 100 1,000 1,000,000

Now for some common date formats <sup>[1](#dates)</sup>.

June 1977

1/24/1984 

15 August 1998

2001-10-23

June 29, 2007

2010 April 3

24/4/2015






Phone Number: (123) 867-5309

Here we test a `<sup>` tag, often used to reference a footnote or citation <sup id="from-1">[1](#1)</sup>

Followed by a horizontal rule.

---

<div id="footnote-1"></div>

1. some footnote or citation, which includes a `<sub>` tag around the return arrow link. <sub>[↩︎︎](#from-1)</sub>


### Lists

##### Unordered list with single line items

This is probably the most common list use case.

- Nice unordered list
- With a few items
- So we can see how it looks

##### Unordered list with multiline items

This allows us to examine how the spacing of our line-height performs 
in comparison to the spacing between our list items.

- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac eros interdum, suscipit lorem ac. 
- Scelerisque libero. In aliquet viverra tortor vitae semper. Nulla adipiscing commodo lacus nec vulputate. 
- Quisque condimentum sem vitae neque hendrerit, vel suscipit ante hendrerit. Vivamus metus mauris, vehicula ut augue eu, faucibus. 
- Sed erat velit, faucibus sit amet enim eget, varius scelerisque diam. Sed sollicitudin blandit dolor, id varius nunc fringilla vitae.

##### Ordered list with single line items

1. Now a nice ordered list
2. Again, with a few items.
3. So we can see how it looks :)

##### Ordered list with multiline items

This allows us to examine how the spacing of our line-height performs 
in comparison to the spacing between our list items.

1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac eros interdum, suscipit lorem ac. 
2. Scelerisque libero. In aliquet viverra tortor vitae semper. Nulla adipiscing commodo lacus nec vulputate. 
3. Quisque condimentum sem vitae neque hendrerit, vel suscipit ante hendrerit. Vivamus metus mauris, vehicula ut augue eu, faucibus. 
4. Sed erat velit, faucibus sit amet enim eget, varius scelerisque diam. Sed sollicitudin blandit dolor, id varius nunc fringilla vitae.


### Code Blocks

This first example keeps the line numbers in the single digit range. Which is helpful you are using a syntax highlighter.

```css
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}
```

This second example pushes the line numbers into the triple digit range. Which is helpful you are using a syntax highlighter.

```ruby
# The first bit of code is a set of tests for a Map model in a 
# work-in-progress game. It is an API written in Ruby on Rails. 
# The codes is using the Rspec-Rails, Shoulda-Matchers, and 
# Factory Bot Rails gems. The attachment is using ActiveStorage.
 
require 'rails_helper'

RSpec.describe Map, type: :model do

  describe 'factory' do
    it 'is valid' do
      expect(create(:map)).to be_valid
    end
  end

  describe 'database table' do
    it {is_expected.to have_db_column(:name).of_type(:string)}
  end

  describe 'associations' do
    it { should have_many(:boards) }
  end

  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_uniqueness_of(:name) }
  end

  describe 'attachment' do
    it 'is valid  ' do
      subject.image.attach(io: File.open(fixture_path + '/dummy_image.jpg'), filename: 'attachment.jpg', content_type: 'image/jpg') # Adding a comment to the end of this line to really push it's length.
      expect(subject.image).to be_attached
    end
  end

end

# This next bit of code is just filler to push the line numbers longer

# A helpful comment
def foo
  puts 'foo'
end

# An unhepful comment
def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def foo
  puts 'foo'
end

def bar
  puts 'bar'
end

# This is for Flight of the Conchords fans
def binary_solo
  puts '101011010111111000001010100101 01 01 01'
end

# end of file
```

### Headings

Here we display all headings (1 through 6), with enough text that they should wrap to multiple lines in most designs. 
This is useful for checking the line-height, margins, and padding of all headings. 

# Heading Level 1: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

## Heading Level 2: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

### Heading Level 3: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

#### Heading Level 4: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

##### Heading Level 5: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

###### Heading Level 6: The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.

For comparison purposes headings are follow by an all uppercase paragraph. 

**UPPERCASE PARAGRAPH:** THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac eros interdum, suscipit lorem ac, scelerisque libero. In aliquet viverra tortor vitae semper. Nulla adipiscing commodo lacus nec vulputate.


---



#### Footnotes

<div id="dates"></div>

The date examples represent the major hardware platforms created by Apple.

1. Apple II (June 1977)
2. Macintosh (1/24/1984)
3. iMac (15 August 1998)
4. iPod (2001-10-23)
5. iPhone (June 29, 2007)
6. iPad (2010 April 3)
7. Apple Watch (24/4/2015)

My criteria was to pick consumer products which I consider the first of a new class of device, and one which was successful. To make the list the device also had to be a device that functions properly as a stand alone device. This isn't to say it doesn't use other devices in some fashion, but that it's 


Runners Up:

- Apple I
- Lisa
- LaserWriter
- Newton
- Ti-Book
- Apple TV
- AirPods
