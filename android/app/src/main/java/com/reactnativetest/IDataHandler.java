package com.reactnativetest;

public interface IDataHandler {
    void onData(String message);
    void onError(Exception ex);
}
