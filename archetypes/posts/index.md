---
date: {{ .Date }}
title: "{{ replace .Name "-" " " | title }}"
description: "Expanded post subject over a couple of lines"
intro: "Optional post intro paragraph"
series: "Optional series name"
tags: ['tag']
categories: ""
toc: false
draft: true
twitter_img: "twitter.jpg"
twitter_alt: "Some alt text"
---

## Heading

This is the post archetype, edit to taste.

<!--more-->

Add an responsive image!

{{< cfigure figcaption="Image credit: Unknown" >}}
{{< cimg src="wallpaper.jpg" alt="Meteor Wallpaper" >}}
{{< /cfigure >}}

## Point 2

Add an end-note[^notit].

### End Notes
[^notit]: This is a note
