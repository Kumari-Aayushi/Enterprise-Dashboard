import { useEffect } from 'react';
import { WebSocketService } from '../services/websocket/WebSocketService';

export const useWebSocket = (url: string, onMessage: (data: any) => void) => {
  useEffect(() => {
    const ws = new WebSocketService(url, onMessage);
    return () => ws.close();
  }, [url, onMessage]);
};
