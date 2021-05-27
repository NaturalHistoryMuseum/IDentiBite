# NativeScript-Vue Application

> Insect bite identification

## Installation

Follow install instructions at: https://docs.nativescript.org/environment-setup.html#macos-ios

Working version of nativescript: nativescript@6.5.1

```
npm install -g nativescript@6.5.1
```

Node version: v12.0.0

With NVM:

``` bash
nvm install 12.0.0
nvm use 12.0.0
```

## Developing

### Running & building

``` bash

# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle
```

### Rebuilding

It's often useful to completely rebuild the platform:

```
tns platform remove ios
tns platform add ios@6.5.2
````

## Testing (on iPhone)

### Via Xcode

```tns platform add ios@6.5.2```

```tns build ios --release --for-device```

If get the error "error: Building for iOS, but the linked and embedded framework 'TNSListView.framework' was built for iOS + iOS Simulator."

Open IDentiBite.xcodeproj and change Build settings > Validate workspace -> No

Rerun: ```tns build ios --release --for-device```

Go into Xcode and click play button.

### Via TNS

```tns debug ios --bundle```

If building new, need to change Validate workspace setting as above.


## Potential errors

```MDFInternationalization not found``` Or other missing Pods

IDentiBite.xcodeproj is just the xcode project - IDentiBite.xcworkspace includes includes your original .xcodeproj and a Pods project. 

Switch to .xcworkspace and rerun.




## Releases

#### 1.0 / 1.1 - Initial release

#### 1.2 - Bug fix for app crashing - tkdatasource conflict.

Upgraded ui-listview (and other packages to resolve list-view conflicts) - https://github.com/NaturalHistoryMuseum/IDentiBite/commit/5a7e595b3136332060af284d3f9ec5515d689443#diff-7ae45ad102eab3b6d7e7896acd08c427a9b25b346470d7bc6507b6481575d519

https://github.com/ProgressNS/nativescript-ui-feedback/issues/1374


### Notes


https://dzone.com/articles/structuring-your-pages-sidedrawers-and-tabviews-wi

https://stackoverflow.com/questions/53327803/nativescript-vue-frame-navigateto-not-navigating


Print object to console:

console.dir(args);

https://dzone.com/articles/handling-changes-in-orientation-in-your-nativescri