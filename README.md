# griddy

griddy is a low-level grid-based CSS framework, inspired by the awesome [Tailwind CSS](https://github.com/tailwindcss) and originally built as a capstone project for [The Odin Project](https://www.theodinproject.com/home)'s HTML and CSS course. It's written in [Sass/SCSS](https://sass-lang.com).

## Documentation

```sh
npm install griddycss
```

Or you can clone or download this repo.

### Usage

To use griddy, import either the normal or the minimized CSS file. They are located in the `dist` directory as `griddy.css` or `griddy.min.css`. If you are using Sass, you can also `@use "griddy";` in your entry file.

griddy is unopinionated and provides mostly classes that directly correspond to single CSS properties. For example, to set a background color, you simply apply the class `bg-red` to an element. All named CSS colors are valid classes.

#### Syntax

Most of griddy's classes are named after their corresponding CSS properties with some abbreviations where they make sense. The padding and margin classes for example are simply named `p` and `m`, with `px` for horizontal padding, `my` for vertical margin, and `pt` for `padding-top` for example. Width is `w` and height is `h`.

To get an overview over all available classes, take a look at the source files in the `src` directory.

#### Breakpoints

griddy comes with breakpoint support for reactive design. By default, it has four breakpoints: `sm`, `md`, `lg`, and `xl`, which all can be applied as pseudo-classes to other classes. By applying `lg:bg-mistyrose` the class will only activate once the `lg` breakpoint is hit.

#### Pseudo-selectors

In addition, several classes also come with support for pseudo-selectors like `hover`, `active`, `focus`, etc. To make use of them, you can also apply them as pseudo-classes: `hover:weight-bold`. This can be combined with breakpoints as well: `xl:hover:decoration-underline`.

### Configuration

Basic configurations can be made in the `_user.config.scss` file, like changing breakpoints, default spacing, and adding custom colors. After you make any changes, you can recompile the CSS files by running:

```sh
npm run build
```

If you are using griddy by importing into your own Sass files, you can also use Sass's new `@use` directive to make changes without editing the `_user.config.scss` by overriding the defaults during import.

```scss
@use "griddy" with ($spacer: 10px);
```

For more extensive configuration, you can edit the source files directly and then recompile griddy. To add breakpoint and pseudo-selector support to a class, the `_utilities.scss` file comes with some functions and mixins that can add them dynamically to a defined class.

### Purging

The full CSS file is quite large, even in its minimized format, because it contains a ton of utility classes with support for breakpoints, and some of them also with pseudo-selectors. It is therefore recommended to remove classes you don't need by running the purge script with `npm run purge`. This will reduce the filesize greatly.

The purged files are by default saved in the `min` subfolder inside the `dist` directory.

Note that PurgeCSS, which is used for this script, simply runs a regular expression over your HTML files to check which classes you have applied somewhere.

## Testing

You can run the tests through the npm script.

```sh
npm test
```

The tests are run through [Jasmine](https://jasmine.github.io) and [True](https://www.oddbird.net/true/).

## Credits

- [Reset CSS](https://meyerweb.com/eric/tools/css/reset/) by Eric A. Meyer
- [PurgeCSS](https://github.com/FullHuman/purgecss) by Full Human
- [True](https://github.com/oddbird/true) by oddbird

## License

griddy is licensed under GPL3, so feel free to fork and play around with it.
