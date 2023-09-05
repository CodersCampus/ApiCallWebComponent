# APICallWebComponent

This project began life as a subset of the lit starter kit - what is missing is the 11ty site, then got significantly morphed from there.

This project includes a sample component using LitElement with TypeScript.

## Disclaimers and Pre-Reqs

This project is not a part of the coderscampus bootcamp curriculum.

It is furnished only as extra material and may have the side effect of confusing students rather than helping them. Thus, use this project at your own risk.

One of many pre-requirements to understanding and consuming this project is being fluent in npm processes, and also javascript and typescript. It is also assumed that you are already consuming lit.dev - and may have partaken of some of the lit team's youtubes.

## Hint to Web Component Newbies.

Almost all of this project is just supporting dev infrastructure! Welcome to the world of app development on the client side!

The two files you want to see for _**actual**_ WebComponent code are:

1. `src/api-element.ts` for the WebComponent code itself. Yup. One file, that's it.
2. `index.html` for the page that is "hosting" the web component.

The 3rd file you want to look for is `api-element.js` which is the javascript file that is compiled _**from**_ the `src/api-element.ts` source file. This file is imported into the `index.html` noted above.

## Setup

Install dependencies:

```bash
npm i
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

If you don't want to build every time you make a change, run the following command in a separate shell and leave it running:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

I removed the testing code from this project

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

## Editing

If you use VS Code, we highly recommend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to recommend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This element is also deployed into a separate sibling project which is an 11ty site.

## Bundling and minification

This starter project doesn't include any build-time optimizations like bundling or minification. We recommend publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

For information on building application projects that include LitElement components, see [Build for production](https://lit.dev/docs/tools/production/) on the Lit site.

## More information

See [Get started](https://lit.dev/docs/getting-started/) on the Lit site for more information.
