import * as React from 'react';
import createChannel from '@/libs/socket';

interface IChatProvider {}
interface IChatProviderProps extends React.PropsWithChildren<{}> {}

const ChatContext = React.createContext<IChatProvider>({});

const chatSocketInfo = {
  channel: 'ChatChannel',
  channelId: Math.random(),
};

const ChatProvider: React.FC<IChatProviderProps> = ({ children }) => {
  const connectSocket = () => {
    return createChannel(chatSocketInfo, {
      connected,
      disconnected,
      received(data: any) {
        console.log(data);
      },
    });
  };
  const connected = () => {
    console.log('connected');
  };
  const disconnected = () => {};

  React.useEffect(() => {
    connectSocket();
  }, []);

  return <ChatContext.Provider value={{}}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => React.useContext(ChatContext);
export default ChatProvider;
