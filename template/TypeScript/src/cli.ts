import commander from 'commander';
import { exec } from 'shelljs';
import { Container } from 'typedi';
import { Database } from './db/database';

const db = Container.get(Database);

commander.version('0.0.1', '-v --version');

commander
  .command('db:reset')
  .description('Resets database based on NODE_ENV')
  .action(async () => {
    try {
      await db.connect();
      await db.reset();
      await db.disconnect();
      console.log('Database successfully reseted');
    } catch (err) {
      throw new Error(`Cannot reset database. Error: ${err}`);
    }
  });

commander.command('migrations:up').action(() => {
  exec(`typeorm migrations:run`, (code: any, stdout: any, stderr: any) => {
    if (stderr) {
      console.log('migration error:', stderr);
      return;
    }
    console.log('migration output:', stdout);
  });
});

commander.command('migrations:down').action(() => {
  exec(`typeorm migrations:revert`, (code: any, stdout: any, stderr: any) => {
    if (stderr) {
      console.log('migration error:', stderr);
      return;
    }
    console.log('migration output:', stdout);
  });
});

commander.command('migrations:create <name>').action((name: string) => {
  exec(
    `typeorm migrations:create -n ${name}`,
    (code: any, stdout: any, stderr: any) => {
      if (stderr) {
        console.log('migration error:', stderr);
        return;
      }
      console.log('migration output:', stdout);
    }
  );
});

commander.command('migrations:generate <name>').action((name: string) => {
  exec(
    `typeorm migrations:generate -n ${name}`,
    (code: any, stdout: any, stderr: any) => {
      if (stderr) {
        console.log('migration error:', stderr);
        return;
      }
      console.log('migration output:', stdout);
    }
  );
});

commander.command('*').action(async () => {
  console.log(
    'No command has been catched please use -h for display all commands'
  );
});

commander.parse(process.argv);
