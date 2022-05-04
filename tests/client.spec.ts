import 'mocha';
import {expect} from 'chai';
import {EventEmitter} from 'events';
import {CommandClient} from '../src/pract11/client';
import {Socket} from 'net';

describe('CommandClient', () => {
  it('Should emit a message event once it gets a the response from the server', (done) => {
    const socket = new Socket();
    const client = new CommandClient(socket);

    client.on('response', (message) => {
      expect(message).to.be.equal('Hola mundo');
      done();
    });

    // client.sendCommand({command: 'cat', options: ['helloworld.txt']});
    socket.emit('data', 'Hola mundo');
    socket.emit('end');
  });
});
