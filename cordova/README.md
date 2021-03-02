 
# Cordova Hooks

https://github.com/johnkmzhou/cordova-create-react-app

npm run builld
cp -r build/ cordova/www

cd cordova 

export ANDROID_SDK_ROOT=$ANDROID_HOME
export JAVA_HOME=<jdk 8>
 
cordova platform add android
cordova run android
 