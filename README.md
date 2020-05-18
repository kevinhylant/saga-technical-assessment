# Getting started
## Installing dependencies
1. Install a node version manager (nodenv, nvm, etc.) to install the proper version of node. We will be using nodenv.
```
  $ brew install nodenv
```

2. Add the following to your shell's rc/profile file and restart your shell.
```
$ eval "$(nodenv init -)"
```
_Please reference [nodenv's docs for troubleshooting](https://nicedoc.io/nodenv/nodenv)_.

3. Use nodenv to install the node version specified in the project’s root (.node-version)

```
$ nodenv install
```

4. Install yarn and node package runner, [npx](https://www.npmjs.com/package/npx), globally

```
$ npm install yarn npx -g
```

5. Install app dependencies

```
$ yarn install
```

## Run the app locally
### iOS

```
$ npx react-native run-ios
```

### Android

```
$ npx react-native run-android
```

### Troubleshooting

- Try running the app via XCode (for iOS) or Android Studio (for Android). For both XCode and Android Studio, open this project in the respective application at the root of either the `/ios` or `/android` folder.

#### iOS
- Install pods from the `/ios` director using `pod install`
- Once complete, tap the black play (run) icon in the top left corner of XCode

#### Android
- Wait for gradle sync to finish in Android Studio (e.g. all progress indicators at the bottom should be complete)
- Tap the green play (run) icon in the top tools bar of Android Studio


### Screen recording
#### [iOS recording]((https://www.loom.com/share/141cb9af4b74466a8e944ff446839a0f))
