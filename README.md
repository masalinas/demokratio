# install ionic CLI
npm install -g @ionic/cli

# start scaffolding ionic project (wizard)
ionic start

# start ionic project on default port 8100
ionic serve

# build ionic project
ionic build

# install Android Studio from Google (download deb package)

# configure SDK and Android Studio tools
export ANDROID_SDK_ROOT=$HOME/Android/sdk

avdmanager, sdkmanager
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin

adb, logcat
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator

# creae AVD (Androisd Virtual Device) from Angulara Studio to emulate results. to check
adb devices

# generate android native project
ionic capacitor add android

# set Package ID in capacitor.config.json and set your unique app name
"appId": "io.oferto.starter"

# build ionic project and copy ionic assets to android native project
ionic capacitor copy android

# live reload(debug) web and android native project on emulator 
ionic capacitor run android -l --host=192.168.1.57

# configure emulator
You must configure screen lock pattern and then add a fingerprint (Finger 1) using the emulator extend controls

Security configurations

![Android Emulator configuration](/images/phone_config.png)


Finger print emulator

![Android Emulator Finger Print](/images/Finger_Print.png)