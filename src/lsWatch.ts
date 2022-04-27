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

  start(): void {
    console.log(`Starting watcher in file ${this.filename}`);
    watch(this.filename, (eventType, filename) => {
      if (eventType === 'change') {
        console.log(`There was a change in the content of the file ${filename}`);

        const ls = spawn('ls', ['-l', '-h', filename]);

        let lsOutput = '';
        ls.stdout.on('data', (piece) => lsOutput += piece);

        ls.on('close', () => {
          const lsOutputAsArray = lsOutput.split(/\s+/);
          console.log(`Permisions: ${lsOutputAsArray[0]}`);
          console.log(`User: ${lsOutputAsArray[2]}`);
          console.log(`Group: ${lsOutputAsArray[3]}`);
          console.log(`Last modified: ${lsOutputAsArray[4]} ${lsOutputAsArray[5]} ${lsOutputAsArray[6]} ${lsOutputAsArray[7]}`);
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

if (process.argv.length !== 3) {
  console.log('Please, provide a filename and a command.');
} else {
  const fileName = process.argv[2];

  access(fileName, constants.F_OK, (err) => {
    if (err) {
      console.log(`El fichero ${fileName} no existe`);
    } else {
      let watcher = new FileWatcher(fileName);
      watcher.start();
    }
  });
}
