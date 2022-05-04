import * as net from 'net';
import {spawn} from 'child_process';

/** Creates a new server with allowHalfOpen option */
net.createServer({allowHalfOpen: true}, (connection) => {
  console.log('A client has connected.');

  connection.on('close', () => {
    console.log('A client has disconnected.');
  });

  let wholeRequest = '';
  connection.on('data', (requestChunk) => {
    wholeRequest += requestChunk;

    let messageLimit = wholeRequest.indexOf('\n');
    while (messageLimit !== -1) {
      const request = JSON.parse(wholeRequest.substring(0, messageLimit));
      console.log(`Comando ${request.command} recibido`);

      const command = spawn(request.command, request.options);

      let comOutput = '';
      command.stdout.on('data', (chunk) => {
        comOutput += chunk;
      });

      command.stderr.on('data', (data) => {
        connection.write(`stderr: ${data}`);
      });

      command.on('close', (code) => {
        if (code !== 0) {
          connection.write(`El comando se ejecutó con código ${code}`);
        }
        connection.write(comOutput);
        connection.end();
      });

      wholeRequest = wholeRequest.substring(messageLimit + 1);
      messageLimit = wholeRequest.indexOf('\n');
    }
  });
}).listen(60300, () => {
  console.log('Waiting for clients to connect.');
});