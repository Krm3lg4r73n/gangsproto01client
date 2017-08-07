package com.reactnativetest;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

public class TCPClientModule extends ReactContextBaseJavaModule implements IDataHandler {
    private static final String EVENT_DATA = "TCPClientAndroid.data";
    private static final String EVENT_ERROR = "TCPClientAndroid.error";

    public TCPClientModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TCPClientAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("EVENT_DATA", EVENT_DATA);
        constants.put("EVENT_ERROR", EVENT_ERROR);
        return constants;
    }

    @ReactMethod
    public void connect(String host, int port, Promise promise) {
        new TCPClientThread(host, port, this).start();
        this.resolveSuccessful(promise);
    }

    private void resolveSuccessful(Promise promise) {
        WritableMap params = Arguments.createMap();
        params.putString("status", "successful");
        promise.resolve(params);
    }

    @Override
    public void onData(String data) {
        WritableMap params = Arguments.createMap();
        params.putString("data", data);
        this.sendEvent(EVENT_DATA, params);
    }

    @Override
    public void onError(Exception ex) {
        WritableMap params = Arguments.createMap();
        params.putString("error", ex.getMessage());
        this.sendEvent(EVENT_ERROR, params);
    }

    private void sendEvent(String eventName, @Nullable WritableMap params) {
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
