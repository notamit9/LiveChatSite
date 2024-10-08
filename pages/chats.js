import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats(){
  const { username, secret} = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()
  useEffect(() => {
    if(typeof document !== null){
      setShowChat(true)
    }
  });

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/")
  })

  if (!showChat) return <div />;
  return (
  <div className="background">
    <div className="shadow">
      <ChatEngine
        height="calc(100ch - 200px)"
        projectID="e556ad0e-cb50-4820-8a43-c35170ad1d9e"
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial/>}
      />
    </div>
  </div>
  )
    }
