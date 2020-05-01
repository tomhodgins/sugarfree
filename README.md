# sugarfree

Manage Sass in vanilla CSS workflows

## About

Embed any SCSS syntax that is valid CSS syntax inside vanilla CSS inside `@--sass-lang` at-rules and use _sugarfree_ to process the Sass inside these special rules

```css
@--sass-lang {
  your {
    sass {
      --here: okay;
    }
  }
}
```
