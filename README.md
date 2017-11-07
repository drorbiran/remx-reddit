# Remx Reddit

## An example project for learning remx combined with react-native-navigation and react-native-ui-lib

View the following [blog post](https://medium.com/@drorbiran/getting-started-with-remx-a5880563566f) (WIP) for a step by step tutorial of creating this project.

Check the following libraries for more details:
* [remx](https://github.com/wix/remx)
* [react-native-navigation](https://github.com/wix/react-native-navigation/wiki)
* [react-native-ui-lib](https://github.com/wix/react-native-ui-lib)


### preparing this project

Download npm dependencies:

```sh
npm i -g react-native-cli
npm install
```

### Running this project

From project dir, run:

#### iOS
1. Build and run (this will start a simulator if not already started)

	```sh
	react-native run-ios
	```
	This would also start a packager if not already started

2. Set your Simulator to live reload changes `⌘`+`d`  (`cmd`+`d`) => `Enable Live Reload`



#### Android
1. Start an emulator
2. Build and run

	```sh
	react-native run-android
	```
	This would also start a packager if not already started


3. Set your Emulator to live reload changes `⌘`+`m`  (`cmd`+`m`) => `Enable Hot Reloading`

To open packager manually, from project dir run:

```sh
react-native start
```

