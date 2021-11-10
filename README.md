# install ionic CLI
```shell
npm install -g @ionic/cli
```

# start scaffolding ionic project (wizard)
Select blank project

```shell
ionic start
```

# start ionic project on default port 8100
```shell
ionic serve
```

# build ionic project
```shell
ionic build
```

# install Android Studio from Google (download deb package)

# configure SDK and Android Studio tools
```shell
export ANDROID_SDK_ROOT=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator

export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
```

# creae AVD (Androisd Virtual Device) from Angulara Studio to emulate results. to check
```shell
adb devices
```

# generate android native project
```shell
ionic capacitor add android
```

# set Package ID in capacitor.config.json and set your unique app name
```shell
"appId": "io.oferto.starter"
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
You must configure screen lock pattern and then add a fingerprint (Finger 1) using the emulator extend controls

Security configurations

![Android Emulator configuration](/images/phone_config.png)


Finger print emulator

![Android Emulator Finger Print](/images/Finger_Print.png)

Android Finger Print validation

![Android Emulator Finger Print](/images/Android_Validation.png)