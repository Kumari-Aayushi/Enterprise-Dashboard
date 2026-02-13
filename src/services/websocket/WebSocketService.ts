export class WebSocketService {
  private socket: WebSocket;

  constructor(url: string, onMessage: (data: any) => void) {
    this.socket = new WebSocket(url);
    this.socket.onmessage = (e) => onMessage(JSON.parse(e.data));
  }

  send(data: any) {
    this.socket.send(JSON.stringify(data));
  }

  close() {
    this.socket.close();
  }
}
