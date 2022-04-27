import {constants, access, watch} from "fs";
import {spawn} from 'child_process';
import {exit} from "process";

class FileWatcher {
  private filename: string;
  private command: string[];

  constructor(filename: string, command: string[] = []) {
    this.filename = filename;
    if (command.length === 0) {
      this.command = ['ls', '-l', '-h'];
    } else {
      this.command = command;
    }
  }

  getFileName(): string {
    return this.filename;
  }


  getCommand(): string[] {
    return this.command;
  }

  start(): void {
    console.log(`Starting watcher in file ${this.filename}`);
    watch(this.filename, (eventType, filename) => {
      if (eventType === 'change') {
        console.log(`There was a change in the content of the file ${filename}`);
        let options: string[] = [];
        for (let i = 1; i < this.command.length; i++) {
          options.push(this.command[i]);
        }
        const command = spawn(this.command[0], options.concat(filename));

        let commandOutput = '';
        command.stdout.on('data', (piece) => commandOutput += piece);

        command.on('close', () => {
          const commandOutputArray = commandOutput.split(/\s+/);
          commandOutputArray.forEach((output) => {
            process.stdout.write(`${output} `);
          });
          process.stdout.write(`\n`);
        });
      } else if (eventType === 'rename') {
        access(this.filename, constants.F_OK, (err) => {
          if (err) {
            console.log(`Error: the file ${this.filename} has been deleted`);
          } else {
            console.log(`Error: name of file ${this.filename} modified`);
          }
          exit();
        });
      }
    });
  }
}

if (process.argv.length < 4) {
  console.log('Please, provide a filename and a command.');
} else {
  const fileName = process.argv[2];
  let commands: string[] = [];
  for (let i = 3; i < process.argv.length; i++) {
    commands.push(process.argv[i]);
  }

  access(fileName, constants.F_OK, (err) => {
    if (err) {
      console.log(`File ${fileName} does not exist`);
    } else {
      let watcher = new FileWatcher(fileName, commands);
      watcher.start();
    }
  });
}
