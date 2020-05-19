# Getting started

After cloning or downloading this repo, to get it up and running, please perform the following.

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



## Troubleshooting

- If you encounter terminal errors using npx to launch the app, try running the app via XCode (for iOS) or Android Studio (for Android). For both XCode and Android Studio, open this project in the respective application at the root of either the `/ios` or `/android` folder.

### iOS
- Install pods from the `/ios` director using `pod install`
- Once complete, tap the black play (run) icon in the top left corner of XCode

### Android
- Wait for gradle sync to finish in Android Studio (e.g. all progress indicators at the bottom should be complete)
- Tap the green play (run) icon in the top tools bar of Android Studio


## Screen recording
- #### [iPhone 11 recording](https://www.loom.com/share/63e3cbf224f04a2c8de223c23686061d)
- #### [iPhone 6S recording](https://www.loom.com/share/b704ebb5b38446c99b418ae8d17008cd)
- #### [Android recording](https://www.loom.com/share/2e926347b6d64c6f9b56026c12b1c314)

## Assessment questions
1. How long did you spend on this and what would you change if you had more time to spend on it?
    - While I didn’t keep close track, I’d guess 13-14 hours in total.
    - If I had more time, I'd find a way to adjust the size of the time slider, regression testing on Android more, and add UI and unit tests.

2. What did you find hardest about this challenge?
    - I struggled most when adding panning functionality (dragging time slider).
    - As React Native's Slider component’s ability to style the progress indicator is very limited & buggy, I attempted to use another library ([Azir Slider](https://azir.io/docs/components/core/slider)) to better match the design spec, but soon reverted in favor of the more heavily maintained and RN-community-endorsed Slider library despite its shortcomings.
    - Furthermore, my initial progress bar approach relied on react-native-track-player to manage the progress state and read its value into my UI components. This became tricky when I wanted the UI to display a different value while a user is actively panning. It also fell short when the player is paused and the user seeked forward or backward using the control buttons.
    - After a couple of re-writes, long code comments explaining my logic, and a nice run, I landed on the more simple approach of self-maintaining the position state of the slider; writing to it after manual-seeking actions and after react-native-track-player’s position state updates when desired. While my second-to-last approach may have re-rendered less by conditionally reading from the track player's state or my own override state value during a panning actions, this approach was more confusing and error prone so I opted for the simpler approach.

3. Where did you feel strongest during this challenge?
    - Scaffolding out the project: setting up typescript, integrating a design system, and defining the project’s organization structure.
    - Writing React, JSX, and styling the components to match the designs.
4. What would you change (if anything) about this challenge?
    - Perhaps include the brand colors and icons required for the project.
    - I’d recommend reducing the scope a bit by maybe focusing on either the top player component or on the bottom feedback component?
