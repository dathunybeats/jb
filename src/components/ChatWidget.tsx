import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm here to help you with JB's Mobile Detailing. How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { id: Date.now(), text: inputValue, sender: "user" };
      setMessages([...messages, newMessage]);
      setInputValue("");
      
      // Simple bot response
      setTimeout(() => {
        const botResponse = { 
          id: Date.now() + 1, 
          text: "Thanks for your message! For immediate assistance, please call +1 205-872-5994, email Jbsmobiledetail@gmail.com, or follow @jbsdetailingandceramics on Instagram.", 
          sender: "bot" 
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-40 right-6 w-80 h-96 shadow-2xl border-border bg-card z-50 rounded-xl">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground font-semibold tracking-tight">JB's Mobile Detailing Chat</CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-md"
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 h-10 rounded-md"
              />
              <Button onClick={handleSendMessage} size="icon" className="rounded-md h-10 w-10">
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </>
  );
};

export default ChatWidget;