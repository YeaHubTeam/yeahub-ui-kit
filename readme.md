## Development

1. Prepare

   - go to `yeahub-ui-kit`
   - `git pull` on main branch
   - create a new dev branch from main
   - install dependencies. See below:

   ```shell
   $ npm i
   ```

2. Replace yeahub-ui-kit package in the main app(Platform, Admin, LP) from published via npm to your current local build.

   - build yeahub-ui-kit package in `file:../yeahub-ui-kit`

   ```shell
   $ npm run build:dev
   ```

   - go to one of the main yeahub application
   - run `npm i -w file:../yeahub-ui-kit` (e.g. `pnpm add -w D:/GIT/yeahub-ui-kit`) inside main app to use your current local build of yeahub-ui-kit package INSTEAD of pulling a published package through npm.
   - verify that your `package.json` has been changed again to work with your local build of ui-kit. It is going to be similar to `"@yeahub-ui-kit": "file:../yeahub-ui-kit"`

3. Test your changes for yeahub-ui-ki together with main apps

- to see the affect of yeahub-ui-kit change, run your daily basis watch script, as usual, in main app, then you should re-run build command (or with :dev) in the yeahub-ui-kit `file:../yeahub-ui-kit`. Hence, webpack will automatically pick up the updated build of yeahub-ui-kit, and you will see your updates in the main app.

```shell
$ npm run build
```

- Sometimes you will need to re-run watch script of the main app since webpack will be triggered too early.

4. Once development is finished, return back to use the published package via npm.
   - go to the main app
   - run `npm i -E @yeahub-ui-kit@<version>` where `<version>`, e.g. 1.1.15. This command returns back a package from npm. You can specify your new version only after you have published your new version! See how to publish below.
   - make sure you didn't miss `-E`, hence, `package.json` doesn't include `^` for the yeahub-ui-kit package
   - time to publish! scroll down

---

## Storybook

- go to `yeahub-ui-kit`

```shell
$ npm i
```

- to run Storybook and open in a new tab

```shell
$ npm run storybook
```

## Customization process of the TextEditor based on CKEditor 5

1. Go to `/TextEditor/vendor`folder, `npm i`.
2. Go to `/TextEditor` and make required changes (you might need to adjust the core build setup in /vendor).
3. Go to `/TextEditor/vendor` and run `npm run build`. It re-create a custom build of CKEditor 5 classic.
4. Test your changes.
5. Push `ckeditor.js` custom build file to GIT if you have generated to reflect the new update.

## How to add a new custom plugin to Editor

1. Develop a new plugin in `/vendor/src/plugins`.
2. Import a new plugin class in `/vendor/src/configs/plugins` and add to a corresponding array.
3. Add plugin to Editor's toolbar if necessary. `/vendor/src/configs/toolbar`.
4. `npm run build` on `/vendor` folder level to get a fresh custom build of Editor itself.

## How to debug internals of CKEditor engine

1. Open our Sandbox `index.html` page containing a rich text and don't close it!

## Publishing

### Запуск локального тестирования инструкция

https://diagnostic-risk-e06.notion.site/UIKit-0b197273796e428797ef8196d60a3034?pvs=25
