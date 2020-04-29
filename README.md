# hazadapt_offline_client
React Native offline communication app


This is the current working offline client. 

Due to COVID, we've had to rollback code to an older version and focus on making things work with a makeshift server.
It was discovered that having to make an offline app work online has been one hell of a thing.
This version of our project is sadly very much a shell of what it was, due to it not being an in-person
thing anymore with a true dedicated server. Since we've had to change our server, things like different usernames 
and chat flags and wifi-switching have had to be dropped. But! It's still mostly here even if it isn't as polished as it was.

# Before you start:
1. You'll need to download the Expo app on your phone (and you'll need the phone too)
2. The computer you're building this from should have npm installed.
3. Once these things are complete, install Expo-cli by running `npm install -g expo-cli`

## To build:
- Make sure you're in the root directory of the project ("/hazadapt-offline-client")
- Run `npm install`
  - You may also need to explicitly install react-native-paper with `expo install react-native-paper`

If you want you can run `npm audit fix` to try and get rid of some of the security warnings that were caused by some recent component
library updates. It should work just fine without this, but I figured it should be acknowledged.

Now to make the client line up with the server on your computer:
- get the current ip address of your computer (run ipconfig in cmd or powershell on a Windows machine)
- open `Consts.js` and change the `DEFAULT_SERVER_URL` to the ipv4 your computer is using, but be sure to leave the port as 3000

Now when you run the project the URL will be pointing to the server on your computer

## Now run it!
- Type `expo start`

This should start the server and open a page with a QR code in your default browser
If it doesn't by default, just hit the 'd' key.

Use the Expo app on your phone to copy the QR code and watch it build! Hopefully no errors occur I'd be very confused because
we got this to work every time but ¯\\_(ツ)_/¯ that's life.

Now follow the instructions to set up the server and then try to chat!

### NOTE:
Android users may have some weird UI things happen that don't happen on IOS. Some of these bugs are new as of recent package updates so sorry if you see them.
