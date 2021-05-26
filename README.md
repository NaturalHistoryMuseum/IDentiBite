# NativeScript-Vue Application

> Insect bite identification

## Installation

Follow install instructions at: https://docs.nativescript.org/environment-setup.html#macos-ios


 npm install --include=dev


``` tns debug ios --bundle ```


nativescript@6.0.2


To get it working on the simulator: https://developer.apple.com/forums/thread/657913

In xcode add arm64 to excluded architecture


To debug -  00008030-001A24302E23802E

# Get rid of platforms/*
tns clean - for 6.5 +??

https://stackoverflow.com/questions/59856596/failed-to-tns-build-ios-due-as-mdfinternationalization-and-materialcomponents-di



## Set up

Add platform:

```tns platform add ios@6.5.2```




## To test on iPhone

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


#### Potential errors

```MDFInternationalization not found``` Or other missing Pods

IDentiBite.xcodeproj is just the xcode project - IDentiBite.xcworkspace includes includes your original .xcodeproj and a Pods project. 

Switch to .xcworkspace and rerun.




## TODO:

Roll back changes - and see if just install works???

If not, keep trying to fix

## To test on an iPhone

Add device at: https://developer.apple.com/account/resources/devices/add

Create a new profile: https://developer.apple.com/account/resources/certificates/add/

## Usage

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

tns run android --timeout 500

https://dzone.com/articles/structuring-your-pages-sidedrawers-and-tabviews-wi

https://stackoverflow.com/questions/53327803/nativescript-vue-frame-navigateto-not-navigating


Print object to console:

console.dir(args);

https://dzone.com/articles/handling-changes-in-orientation-in-your-nativescri