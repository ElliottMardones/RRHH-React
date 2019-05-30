const child_process = require('child_process');
const path = require('path')
console.log('Installing Server Dependencies')
child_process.exec('npm install', { cwd: __dirname },
    (error, stdout, stderr) => {
        if (!error) {
            console.log('Installing Client Dependencies')
            child_process.exec('npm install', { cwd: path.join(__dirname, 'client') },
                (error, stdout, stderr) => {
                    if (!error) {
                        console.log('Listo')
                    } else {
                        console.log(stderr)
                    }
                }
            );
        } else {
            console.log(stderr)
        }
    }
);