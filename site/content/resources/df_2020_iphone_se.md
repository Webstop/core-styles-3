---
created_at: Wednesday, 22 April 2020
title: The 2020 iPhone SE
author: John Gruber
description: Example article lifted from Daring Fireball
draft: false
layout: article
---

The 2020 iPhone SE is a device where, for the most part, what you see is what you get. The one thing you get that you can’t see is the A13 Bionic chip -- although you can see, particularly with Portrait Mode photography, what the A13 makes possible in the SE.

Let’s start with the outside.

Close your eyes and the SE feels identical to the iPhone 8: same materials, same button placement, same size (down to the 10th of a millimeter -- the iPhones SE and 8 are 100 percent case compatible), same weight (148 g).

Open your eyes and you'll notice the coloring is different, if you're looking at the white model. The white SE has a black front face. There’s some prior art for this -- the white iPhone 3G and 3GS models [also had black front faces][3g]. But starting with the iPhone 4,<sup id="fnr1-2020-04-22">[1]</sup> white/light-colored iPhones equipped with home buttons have had white front panels, [except for the iPhone 5C][5c]. I have never cared for those white front panels -- I don’t like the way they emphasize, rather than hide, the elements embedded in the iPhone’s forehead: the speaker, the camera, the flash. It’d be bad enough if those elements were symmetrically arranged but they’re not -- the camera is off center. The black front face is simply a better look, to my eyes. And it doesn’t hurt that when the display is off, the black front disguises the now-dated forehead and chin above and below the screen.

[5c]: https://www.imore.com/iphone-5c

Apple’s [Product Red iPhone 8 was introduced 6 months after the other colors][red8], and it too sported a black front face. It’s a sharp look. My iPhone SE review unit is white, and I think it looks much nicer than the “silver” iPhone 8, which, to my eyes, plays as off-white on the back panel. Pure white looks better, and Apple nailed it with the iPhone SE.
  
  [3g]: /misc/2020/04/iphone-3g-white-black.jpg

  [red8]: https://www.apple.com/newsroom/2018/04/apple-introduces-iphone-8-and-iphone-8-plus-productred-special-edition/

<a href="https://daringfireball.net/misc/2020/04/iphone-se/white-iphones-8-se.jpeg" class="noborder">
<img
  src   = "https://daringfireball.net/misc/2020/04/iphone-se/white-iphones-8-se.jpeg"
  alt   = "A silver iPhone 8 and white iPhone SE, faces down."
  width = 425
/></a>


There’s one more cosmetic improvement: the back panel of the iPhone 8 sported an Apple logo, centered vertically between the volume buttons, and the word “iPhone” at the corresponding position toward the bottom.<sup id="fnr2-2020-04-22">[2]</sup> Like its iPhone 11 brethren models, the iPhone SE's back panel markings have been reduced to the essential minimum: just the Apple logo, perfectly centered. Everyone who is going to put their new SE in a case and never remove it should take a moment to appreciate the purity of this design before they do.

Like the iPhone 5-style 2016 iPhone SE before it, the new iPhone 6-style iPhone SE feels like the canonical ideal of the form factor it embodies.


## Performance

Because I [recently reviewed the updated iPad Pros][df ipad rev], I had it in my mind that the A13 system-on-a-chip isn’t that much faster than the A12. Not true.

I had that erroneous notion in mind because the iPad Pros have the A12Z. Now, it’s definitely the case that the new A12Z chips are only ever-so-slightly improved over the A12X chips in the 2018 iPad Pros -- [CPU performance is identical, and GPU performance is improved only by going from 7 cores to 8][mr-zx]. And because the A12X and Z chips in iPad Pros have more CPU cores than the A12 chip in the iPhone XS and XR models, they perform better on benchmarks. In my benchmarks for the new iPad Pro, I was comparing the A13 against A12X/Z in iPad Pros, not the “plain” A12 in the iPhone XS and XR.

  [mr-zx]: https://www.macrumors.com/guide/a12z-vs-a12x/

  [df ipad rev]: https://daringfireball.net/2020/03/the_2020_ipad_pros

When you compare iPhones to iPhones, it’s quite obvious that the A13 is remarkably more performant than the A12. Geekbench 5 results, averaged over a few runs and rounded to account for variability (single- and multi-core benchmarks test the CPU, "compute" tests the GPU):

<!-- Markdown Table
|                     | Chip | Single |  Multi | Compute |
|---------------------|:----:|-------:|-------:|--------:|
| 2020 iPhone SE      |  A13 |  1,330 |  3,325 |   6,370 |
| iPhone 11 Pro       |  A13 |  1,330 |  3,340 |   6,350 |
| iPhone XR           |  A12 |  1,090 |  2,425 |   4,490 |
| iPhone 8            |  A11 |    910 |  2,170 |   3,420 |
|                     |      |        |        |         |
| 2020 iPad Pro       | A12Z |  1,125 |  4,690 |  10,050 |
| 2019 16″ MBP        |   i9 |  1,265 |  7,275 |  25,350 |
-->
<table>
<thead>
<tr>
  <th></th>
  <th align="center">Chip</th>
  <th align="right">Single</th>
  <th align="right">Multi</th>
  <th align="right">Compute</th>
</tr>
</thead>
<tbody>
<tr>
  <td>2020 iPhone SE</td>
  <td align="center">A13</td>
  <td align="right">1,330</td>
  <td align="right">3,325</td>
  <td align="right">6,370</td>
</tr>
<tr>
  <td>iPhone 11 Pro</td>
  <td align="center">A13</td>
  <td align="right">1,330</td>
  <td align="right">3,340</td>
  <td align="right">6,350</td>
</tr>
<tr>
  <td>iPhone XR</td>
  <td align="center">A12</td>
  <td align="right">1,090</td>
  <td align="right">2,425</td>
  <td align="right">4,490</td>
</tr>
<tr>
  <td>iPhone 8</td>
  <td align="center">A11</td>
  <td align="right">910</td>
  <td align="right">2,170</td>
  <td align="right">3,420</td>
</tr>
<tr>
  <td> </td>
  <td align="center"></td>
  <td align="right"></td>
  <td align="right"></td>
  <td align="right"></td>
</tr>
<tr>
  <td>2020 iPad Pro</td>
  <td align="center">A12Z</td>
  <td align="right">1,125</td>
  <td align="right">4,690</td>
  <td align="right">10,050</td>
</tr>
<tr>
  <td>2019 16″ MBP</td>
  <td align="center">i9</td>
  <td align="right">1,265</td>
  <td align="right">7,275</td>
  <td align="right">25,350</td>
</tr>
</tbody>
</table>

So, yes, a $400 iPhone SE bests a $3,000 top-of-the-line MacBook Pro in single-core CPU performance.


## Camera

Benchmarks only measure CPU and GPU performance. The biggest improvement from the A12 to the A13 might be the Neural Engine, used for machine learning, which in practice means AR and photography. You can’t put a simple number on it like a benchmark score, but there are tangible features it enables, most noticeably with Portrait Mode photography.

Apple is calling the new SE camera its “best single-imaging system ever”. It has just one rear-facing camera lens and sensor, and that sensor (but not the lens) is apparently the same as that in the iPhone XR.

When Apple's Portrait Mode first appeared, it required a dual-imaging system -- either two cameras (on the rear) or a camera and Face ID TrueDepth system (on the front). This makes intuitive sense -- we all know that our own depth perception is impaired significantly if we close one eye. Doing it with nothing but a single camera lens requires what Apple terms "monocular depth estimation".

The iPhone XR does monocular depth estimation with its rear camera. The iPhone SE does it with *both* its rear and front-facing cameras. The results are rather amazing, really. Apple's built-in Camera app only supports Portrait Mode for human subjects with the iPhone SE (both front and rear) -- no inanimate objects, and, alas, no pets. The reason why, quite obviously, is that this monocular depth estimation is powered in large part, if not entirely, by a machine learning model optimized specifically for human faces. Using the third-party [Halide][] camera app, however, allows you to shoot photos of anything with an accompanying depth map. Halide also allows you to view this depth map. It's clear to me, but well beyond the scope of this review to examine in detail, that the iPhone SE's rear-facing camera is capable of much more accurate depth maps than the iPhone XR's. Since they're both single-imaging systems and the same (or very similar) sensors, the SE's superior depth mapping can only be attributed to the A13's much more powerful neural engine.

  [halide]: https://halide.cam/

I find this even more impressive with the SE's front-facing camera. Self portraits using Portrait Mode's advanced lighting effects are quite comparable between the SE and the iPhone 11 Pro. Below are side-by-side "Stage Light Mono" examples of yours truly, taken with front-facing cameras on the SE and 11 Pro. In the first two, I was standing next to a window on a sunny day; in the next two, I was in the same sunny room, but away from the windows. No editing was performed on any of the files, other than to use Photos to export HEIC originals as JPEGs, and to rescale the versions embedded below using [Retrobatch].


<p style= "margin-bottom: 0.25em;">iPhone 11 Pro (<a href="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-a-11pro.jpeg" rel="nozoom">original JPEG file</a>):</p>

  <img
	src="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-a-11pro_thumb.jpeg"
	alt=""
	width="600"
  />


<p style= "margin-bottom: 0.25em;">iPhone SE (<a href="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-a-se.jpeg" rel="nozoom">original JPEG file</a>):</p>

  <img
	src="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-a-se.jpeg"
	alt=""
	width="600"
  />


<p style= "margin-bottom: 0.25em;">iPhone 11 Pro (<a href="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-b-11pro.jpeg" rel="nozoom">original JPEG file</a>):</p>

  <img
	src="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-b-11pro_thumb.jpeg"
	alt=""
	width="600"
  />


<p style= "margin-bottom: 0.25em;">iPhone SE (<a href="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-b-se.jpeg" rel="nozoom">original JPEG file</a>):</p>

  <img
	src="https://daringfireball.net/misc/2020/04/iphone-se/slm-portrait-b-se.jpeg"
	alt=""
	width="600"
  />

<del>I include no comparative examples from the iPhone XR because the iPhone XR doesn't support any of the background-masking Portrait Mode lighting effects -- no Stage Light, Stage Light Mono, or High-Key Light Mono.</del> **Update:** Whoops, actually the XR [does support] those effects, but *only* for the front-facing camera, which has the TrueDepth system.

[does support]: https://twitter.com/suspen5e/status/1253125696991313920

To my eyes the SE does a very credible job compared to the 11 Pro. You can see the differences most obviously on my shoulders. And remember, the 11 Pro front-facing Portrait Mode is aided by the TrueDepth sensors from the Face ID system. The iPhone SE is doing this with just a single camera and a presumably very advanced machine learning model.<sup id="fnr3-2020-04-22">[3]</sup>

  [retrobatch]: https://flyingmeat.com/retrobatch/

## Experience

Spending a week with the iPhone SE, after two and a half years using an iPhone X, then XS, now 11 Pro, has been, well, a bit frustrating.

A while back, I was talking with someone at Apple who had worked on the iPhone X. The X wasn’t just a fork in the iPhone *hardware* -- Face ID instead of Touch ID, OLED instead of LCD, round-cornered edge-to-edge displays instead of sharp-cornered rectangles, etc. -- but the fact that it didn’t even have a home button at all necessitated a rethinking of the fundamental *software* interface too.

OK, it wasn’t *necessary* per se. What Apple *could* have done, in theory, was replace the hardware home button with a virtual on-screen home button that worked just like the hardware home buttons on previous iPhones. Maybe that’s what they *would* have done with the iPhone X’s “all screen” design if they couldn’t figure out something better than a home button.

But they did figure out a better design. An all-new fundamental paradigm for the basic operation of using an iPhone: swipe up from the bottom to go home, swipe up more for the multitasking switcher, and animate the user interface as you swipe to make it look and feel like you’re *directly* manipulating the apps on screen, not *indirectly* applying gesture shortcuts as though the touchscreen were just a trackpad.

What this source told me is that while developing the iPhone X, members of the team would typically carry two phones with them: a prototype iPhone X they could use, but (of course) not while in the presence of anyone who wasn’t disclosed on the project, and an older iPhone they could use in front of anyone. These team members would spend time, every day, using both phones. They knew they were onto a winning idea with the new interaction design for the iPhone X when they started instinctively using the X-style gestures on the older iPhone, and *never vice versa*. When a new design is clearly better than an old one, it's a one-way street mentally.

I believed that then, but I believe it more now after spending the last week with the iPhone SE. I’ve used it exclusively for hours at a stretch and I never stopped expecting it to act like a post-iPhone-X device. I swipe up from the bottom to go home or multitask. I expect it to wake up just by tapping anywhere on the display. I pull down from the top right corner expecting to see Control Center. I can’t stop doing any of these things unless I'm consciously thinking about the fact that I'm using an old-style iPhone. Even if I locked my personal iPhone 11 Pro in a drawer and touched no phone other than the new SE for a week or two, I still wouldn’t shake my iPhone X interaction habits unless I abandoned my iPad Pro too.

Once you get used to the post-iPhone-X interaction model, there's no going back. A week with the new SE has not shaken my belief that the X-style interaction design is superior. Not one iota.<sup id="fnr4-2020-04-22">[4]</sup>

But that’s OK. The new iPhone SE is not intended for anyone who has already switched to an iPhone X or later. It’s not a phone for enthusiasts, unless your enthusiasm is for the smallest phone you can get, or if price is a significant concern. The users the SE is targeting are upgrading from an older Touch ID iPhone or an Android phone. 

It's quite remarkable that the $400 iPhone SE significantly outperforms -- and to a lesser but still noticeable degree, out-photographs -- the $600 iPhone XR, both of which prices are for 64 GB base models. It's even more remarkable that you can upgrade all the way to a 256 GB iPhone SE for $550, which is still less than the XR base model. But the XR has one obvious advantage: screen real estate. With the same text size, the XR shows significantly more vertical content:

<a href="https://daringfireball.net/misc/2020/04/iphone-se/se-xr-display-size-comparison.jpeg" class="noborder">
<img
  src   = "https://daringfireball.net/misc/2020/04/iphone-se/se-xr-display-size-comparison.jpeg"
  alt   = "An iPhone SE next to an iPhone XR, both showing the Settings → Display and Brightness screen."
  width = 425
/></a>

But no one considering an iPhone SE is unaware of its size. SE buyers are either buying one despite its smaller size or because of it.

The iPhone SE is an excellent value if you’re fine with the smaller display and Touch ID instead of Face ID. It's an astoundingly good value if you flat-out prefer the smaller form factor and familiar Touch ID experience.<sup id="fnr5-2020-04-22">[5]</sup>


<div class="footnotes">
<hr />
<ol>

<li id="fn1-2020-04-22">
<p>The white model of which <a href="https://www.businessinsider.com/apple-writer-john-gruber-lands-a-white-iphone-4-2010-11">proved to be surprisingly difficult</a> for Apple to manufacture -- it didn’t begin shipping until <a href="https://www.macworld.com/article/1159502/white_iphone4_shipping.html">10 months after the black models</a>. That delay was surprising at the time, but seems downright bananas now. Can you imagine if, say, the midnight green iPhone 11 Pros still weren't shipping now, and wound up not shipping until this coming July?&nbsp;<a href="#fnr1-2020-04-22"  class="footnoteBackLink"  title="Jump back to footnote 1 in the text.">↩︎︎︎</a></p>
</li>

<li id="fn2-2020-04-22">
<p>Long gone are the various <a href="/misc/2020/04/iphone-se/iphone-5s-indicia-cruft.jpeg">regulatory indicia and small-print cruft</a> like model numbers and "Designed by Apple in California / Assembled in China". Apple moved <a href="https://support.apple.com/en-us/HT204073">most</a> of that stuff to software in the Settings app starting with the iPhone 6S. But the first iPhone that didn't have those regulatory marks on the back was the Verizon iPhone 4, <a href="https://daringfireball.net/2011/02/verizon_iphone_4">one of my favorite iPhones of all time</a>. What an odd beast that was. It debuted 7 months after the regular iPhone 4, and was an entirely different model because Verizon's 3G network was CDMA, not GSM. It sported the 4S antenna lines over eight months before the iPhone 4S was unveiled.</a>&nbsp;<a href="#fnr2-2020-04-22"  class="footnoteBackLink"  title="Jump back to footnote 2 in the text.">↩︎︎︎</a></p>
</li>

<li id="fn3-2020-04-22">
<p>These Portrait Mode effects all have a live preview in the Camera app, but the live previews are crude approximations. I wonder how many people don't bother trying these effects because the previews look so rough. Once you snap a portrait using these effects, it takes a brief moment to be processed, and while the end result can still be hit-or-miss, it's always way better than the live preview would suggest.&nbsp;<a href="#fnr3-2020-04-22"  class="footnoteBackLink"  title="Jump back to footnote 3 in the text.">↩︎︎</a></p>
</li>

<li id="fn4-2020-04-22">
<p>I must point out here that Touch ID works just fine while wearing a face mask, and Face ID doesn't work at all. That's been a consideration for medical professionals and citizens of countries with a culture of face-mask-wearing ever since Apple introduced Face ID with the iPhone X in 2017. Now it's a consideration for literally billions of us around the world. That's not enough to even vaguely make me, personally, consider switching to the SE as my personal phone. But your mileage may vary, especially if the nature of your work requires you to wear a face mask all day, not just while out of the house on brief excursions. (But such jobs might also require gloves.)&nbsp;<a href="#fnr4-2020-04-22"  class="footnoteBackLink"  title="Jump back to footnote 4 in the text.">↩︎︎︎</a></p>
</li>

<li id="fn5-2020-04-22">
<p>If you're in that camp, I strongly advise buying an iPhone SE while the getting is good. I would wager, heavily, that this is the last iPhone Apple will ever make with a home button and the old-style user interface.&nbsp;<a href="#fnr5-2020-04-22"  class="footnoteBackLink"  title="Jump back to footnote 5 in the text.">↩︎︎︎</a></p>
</li>


</ol>
</div>


[1]: #fn1-2020-04-22
[2]: #fn2-2020-04-22
[3]: #fn3-2020-04-22
[4]: #fn4-2020-04-22
[5]: #fn5-2020-04-22


