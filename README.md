# description
A PoC Ionic capacitor project with cordova biometric plugin control

# install ionic CLI
```shell
npm install -g @ionic/cli
```

# start scaffolding ionic project (wizard)
Select blank project. By default capacitor project is created

```shell
ionic start
```

# install dependencies
```shell
npm install @ionic-native/core --save
npm install cordova-plugin-fingerprint-aio --save
npm install @ionic-native/fingerprint-aio --save
```

# build ionic project
```shell
ionic build
```

# start ionic web project on default port 8100
```shell
ionic serve
```

# install Android Studio
Before test our hybrid App under any Android emulator we must to install Android Studio from Android default site

# configure SDK and Android Studio tools
Add this environment variables and set PATH in your bashrc file in your home folder
```shell
export ANDROID_SDK_ROOT=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator

export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
```

# create AVD (Android Virtual Device) from Android Studio to emulate Apps
Install some Android SDK

![Android Emulator configuration](/images/Android_SDK.png)

Install some Android Emulator

![Android Emulator configuration](/images/Android_Emulators.png)

After install some SDK and Android Emulator, we could list the android emulators installed from CLI

```shell
adb devices
```

# generate android native project
```shell
ionic capacitor add android
```

# build ionic project and copy ionic assets to android native project
```shell
ionic capacitor copy android
```

# live reload(debug) web and android native project on emulator 
```shell
ionic capacitor run android -l --host=192.168.1.57
```

# configure emulator
You must configure Screen Lock pattern and then add a Fingerprint using for example (Finger 1) from emulator extend controls

Security configurations

![Android Emulator configuration](/images/phone_config.png)


Finger print emulator

![Android Emulator Finger Print](/images/Finger_Print.png)

# App running

Android Finger Print validation. You must select (Finger 1) selected previously to validate

![Android Emulator Finger Print](/images/Android_Validation.png)