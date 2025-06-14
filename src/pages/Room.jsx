import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room () {
    let {roomId}=useParams()
    function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

     const appID = 1375216882;
  const serverSecret = "15221a3fbf32c4714e4e46ab2c67d62c";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest
  (appID, serverSecret, roomId,  randomID(5),  randomID(5));

  let myMeeting = async (element) => {
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          
        },
        sharedLinks:[{
            name:"copy link",
            url:`${window.location.origin}/room/${roomId}`
        },
        ]
      });
  };
  return (
      <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  )
}

export default Room
