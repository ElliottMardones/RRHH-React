const child_process = require('child_process');
const path = require('path')
child_process.exec('npm start', { cwd: path.join(__dirname, 'client') });