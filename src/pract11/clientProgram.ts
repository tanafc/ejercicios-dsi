import {CommandClient} from "./client";
import {connect} from 'net';

/**
 * Taking the commands from command line.
 */
const command = process.argv[2];
let options: string[] = [];
for (let i = 3; i < process.argv.length; i++) {
  options.push(process.argv[i]);
}

/**
 * Making the command request to the server.
 */
const commands = new CommandClient(connect({port: 60300}));
commands.sendCommand({command: command, options: options});
commands.endConnection();
// Taking the response from the server.
commands.on('response', (response) => {
  console.log(response);
});