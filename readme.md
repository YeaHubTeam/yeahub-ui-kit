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

## Publishing

### Запуск локального тестирования инструкция

https://diagnostic-risk-e06.notion.site/UIKit-0b197273796e428797ef8196d60a3034?pvs=25
