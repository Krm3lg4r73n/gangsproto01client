package com.reactnativetest;

import android.util.Log;

import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.Socket;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;

public class TCPClientThread extends Thread {
    private IDataHandler mDataHandler;
    private String mHost;
    private int mPort;

    public TCPClientThread(String host, int port, IDataHandler handler) {
        mHost = host;
        mPort = port;
        mDataHandler = handler;
    }

    public void run() {
        try {
            Socket clientSocket = new Socket(mHost, mPort);
            OutputStream outStream = clientSocket.getOutputStream();

            ByteBuffer bb = ByteBuffer.allocate(512);
            bb.order(ByteOrder.LITTLE_ENDIAN);

            while (true) {
                Thread.sleep(2000);
                bb.putInt(101); // type
                bb.putInt(0); // size
                outStream.write(bb.array(), 0, bb.position());
                bb.rewind();
            }
        }
        catch(Exception ex) {
            mDataHandler.onError(ex);
        }
    }
}



