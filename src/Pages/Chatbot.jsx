import React, { useEffect, useState } from "react";
import { helperText } from "../helpers/text";

export default function ChatbotPage() {
  const [history, setHistory] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesList = window.document.getElementById("messagesList");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    if (messagesList) {
      messagesList.scrollTop = messagesList.scrollHeight;
    }
  }, [history]);

  async function handleSend() {
    if (!inputText) {
      return;
    }
    const messages = [
      {
        role: "system",
        content: helperText,
      },
      { role: "user", content: inputText },
    ];
    setInputText("");
    const newHistory = [...history, { role: "user", content: inputText }];
    setHistory(newHistory);

    const raw = JSON.stringify({
      messages,
      $action: "chat",
      stream: false,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    setIsLoading(true);

    fetch("https://iebs-chatbot.vercel.app/api/chatbot", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const chatbotResponse = JSON.parse(result);
        setIsLoading(false);
        setHistory([
          ...newHistory,
          {
            role: "chatbot",
            content: chatbotResponse.choices[0].message.content,
          },
        ]);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="content-below-navbar chat">
      <h2>Refutoken chatbot</h2>
      <div className="messages" id="messagesList">
        {history.map((message, idx) => (
          <div
            key={idx}
            className={`message ${message.role == "user" ? "user" : "bot"}`}
          >
            <strong>{message.role == "user" ? "Tú" : "Bot"}</strong>
            <div>{message.content}</div>
          </div>
        ))}
      </div>

      {isLoading && <div className="loading">...</div>}
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="form"
        >
          <input
            onChange={(e) => setInputText(e.target.value)}
            placeholder="¿Qué quieres preguntar?"
            value={inputText}
            className="input-text"
          />
          <button onClick={handleSend} className="button">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
