// Polyfill for MessageChannel in Cloudflare Workers
if (typeof MessageChannel === 'undefined') {
  globalThis.MessageChannel = class MessageChannel {
    port1: MessagePort;
    port2: MessagePort;

    constructor() {
      this.port1 = new MessagePort();
      this.port2 = new MessagePort();

      // Connect the ports
      this.port1._partner = this.port2;
      this.port2._partner = this.port1;
    }
  };

  class MessagePort {
    _partner: MessagePort | null = null;
    _messageQueue: any[] = [];
    _listeners: ((data: any) => void)[] = [];

    postMessage(data: any) {
      if (this._partner) {
        setTimeout(() => {
          this._partner!._messageQueue.push(data);
          this._partner!._processMessages();
        }, 0);
      }
    }

    _processMessages() {
      while (this._messageQueue.length > 0) {
        const message = this._messageQueue.shift();
        this._listeners.forEach(listener => listener(message));
      }
    }

    addEventListener(event: string, listener: (data: any) => void) {
      if (event === 'message') {
        this._listeners.push(listener);
      }
    }

    onmessage: ((data: any) => void) | null = null;

    start() {
      // Start processing messages
      this._processMessages();
    }

    close() {
      this._partner = null;
      this._listeners = [];
      this._messageQueue = [];
    }
  }
}