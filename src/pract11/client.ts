import {EventEmitter} from 'events';
import * as net from 'net';

/**
 * Type that defines a request for a command
 */
export type RequestCommand = {
  command: string;
  options?: string[];
}

/**
 * Class that connects to a given port and takes
 * petitions of commands to send to a server.
 */
export class CommandClient extends EventEmitter {
  constructor(private connection: net.Socket) {
    super();

    let wholeResponse = '';
    connection.on('data', (responseChunk) => {
      wholeResponse += responseChunk;
    });

    connection.on('end', () => {
      this.emit('response', wholeResponse);
    });
  }

  /**
   * Method to send a command to the server
   * @param request command to request
   */
  public sendCommand(request: RequestCommand) {
    this.connection.write(JSON.stringify(request) + '\n');
  }

  /**
   * Method that ends the connection with the server.
   */
  public endConnection() {
    this.connection.end();
  }
}