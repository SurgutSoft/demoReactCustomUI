package com.obedog;

import android.content.Intent;
import android.os.Bundle;

import com.electricimp.blinkup.BlinkupController;

import org.apache.cordova.CordovaActivity;

public class MainActivity extends CordovaActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }

        // Set by <content src="index.html" /> in config.xml
        loadUrl(launchUrl);
    }

    @Override
    protected void onActivityResult(
            int requestCode, int resultCode, Intent data) {
        BlinkupController.getInstance().handleActivityResult(this, requestCode, resultCode, data);
        super.onActivityResult(requestCode, resultCode, data);
    }

}
