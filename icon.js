// Writes the LifeOS launcher icon (vector) into the generated Android project.
const fs=require('fs'),r='android/app/src/main/res/';
const w=(p,t)=>{fs.mkdirSync((r+p).replace(/\/[^/]*$/,''),{recursive:true});fs.writeFileSync(r+p,t)};
const ring='M32,54 a22,22 0 1,0 44,0 a22,22 0 1,0 -44,0',dot='M45,54 a9,9 0 1,0 18,0 a9,9 0 1,0 -18,0',dot2='M65.5,40 a4.5,4.5 0 1,0 9,0 a4.5,4.5 0 1,0 -9,0';
w('drawable/ic_lifeos_fg.xml',`<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android" android:width="108dp" android:height="108dp" android:viewportWidth="108" android:viewportHeight="108">
<path android:pathData="${ring}" android:strokeColor="#9DB4D0" android:strokeWidth="5" android:fillColor="#00000000"/>
<path android:pathData="${dot}" android:fillColor="#9DB4D0"/>
<path android:pathData="${dot2}" android:fillColor="#9DB4D0"/>
</vector>`);
const ad=`<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android"><background android:drawable="@color/ic_launcher_background"/><foreground android:drawable="@drawable/ic_lifeos_fg"/></adaptive-icon>`;
w('mipmap-anydpi-v26/ic_launcher.xml',ad);w('mipmap-anydpi-v26/ic_launcher_round.xml',ad);
w('values/ic_launcher_background.xml',`<?xml version="1.0" encoding="utf-8"?>
<resources><color name="ic_launcher_background">#0D0F12</color></resources>`);
console.log('icon ok');
