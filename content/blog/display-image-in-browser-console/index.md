---
title: "How to display images in browser console"
date: "2020-09-21"
description: "How to simplify debugging of canvas-based apps or show cool console banners."
---

🎉 Just published a [tiny NPM library](https://www.npmjs.com/package/console-log-img) to print images in the browser console!

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/oayk29b29vjudw9h3ygx.gif)

It's like `console.log`, but for images: you can print an image from a URL, a Canvas or Image element, or an ImageBitmap.

# How to use it

```typescript
import { initConsoleLogImg } from "console-log-img"

// Run this once to initialize the library
initConsoleLogImg({
  // Optionally, disable image dimensions logging (enabled by default)
  printDimensions: true,
})

// ... later in the code ...

// Print an image from a URI, at original size
console.img("https://openclipart.org/image/800px/5661")

// Print a Canvas at 30% zoom, also log canvas dimensions
const canvas = document.getElementById("my-canvas")
console.img(canvas, 0.3, true)

// Print a CanvasRenderingContext2D
const ctx = canvas.getContext("2d")
console.img(ctx, 0.5)

// Print an ImageBitmap at 100% zoom
const bitmap = await createImageBitmap(canvas)
console.img(bitmap, 1)

// Print an Image DOM element
const imgEl = document.getElementById("my-img")
console.img(imgEl)
```

[DEMO](https://codesandbox.io/s/console-log-img-test-bti64)

The code was adapted from various sources and wrapped up in a neat TypeScript library.

Under the hood, it uses some hacks with styled console.log to set the background to the passed image. Check out the [source code](https://github.com/dmitru/console-log-img) if you want more.

## Why would you want to print images to console?

### Easier Debugging

I used it extensively when working on Canvas-heavy apps (e.g. [Inkarnate](https://inkarnate.com) – online fantasy maps editor) to make debugging of Canvas rendering easier.

I think it'll be especially helpful for those working on Canvas visualizations (e.g. generative artists) or other graphical apps like editors or generators.

### Other Uses

- **Hiring banners**. You can use it to show some fancy-pants hiring console banners to invite web devs to join your team.

- **Fraud prevention.** Ever seen anti-fraud console banner on Facebook? That's to prevent bad guys from manipulating users into pasting bad things to their browser console.

That's it! Hope you'll find it helpful. 😃
