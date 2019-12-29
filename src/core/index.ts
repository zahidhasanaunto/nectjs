import chalk from 'chalk';
import boxen from 'boxen';
import cli from 'commander';

export class Core {

    constructor() {
        this.initApplicationHeader();

        this.startApplication();
    }

    public startApplication() {
        cli.version('0.0.1')
            .option('-l, --list [list]', 'list of customers in CSV file')
            .parse(process.argv);

        console.log(cli.list);
    }

    public initApplicationHeader() {
        const logMessage = boxen(
            chalk.red.bold('NectJS CLI'),
            {
                padding: 4,
                margin: 0,
                borderColor: 'greenBright',
            }
        );
        console.log(logMessage);
    }
}