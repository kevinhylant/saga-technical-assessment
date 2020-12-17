# Getting started

[Assessment Instructions Here](https://docs.google.com/document/d/1TSjMN-q9bAfzptFBlvqBSRbODVSvUyJ--RN1XIUmyFM)

👋Welcome!
Once you’ve read the code challenge instructions above, you can get started by tapping on the green "Use this template" button above in GitHub to create your own copy of this repo.

Then clone the repo and perform the following to get it up and running.

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

4. Install yarn (a node package manger)

```
$ npm install yarn -g
```

5. Install app dependencies

After opening a fresh tab in your terminal, navigate to the project, and run:
```
$ yarn install
```

Once your node modules are installed, install your iOS-specific dependencies
```
$ cd ios && pod install && cd ..
```

## Run the app locally
### iOS

Install Xcode on your machine & follow prompts to install command line tools required by Xcode. Then run:
```
$ npx react-native run-ios
```


## Troubleshooting
If you encounter terminal errors using npx to launch the app, try running the app via XCode, opening this project in the `/ios` folder.

### iOS
- Install pods from the `/ios` director using `pod install`
- Once complete, tap the black play (run) icon in the top left corner of XCode

## Assessment questions
1. How long did you spend on this and what would you change if you had more time to spend on it?

2. What did you find hardest about this challenge?

3. Where did you feel strongest during this challenge?

4. What would you change (if anything) about this challenge?
