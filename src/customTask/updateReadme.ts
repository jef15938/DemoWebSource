// import { version } from '../../package.json';
const fs = require('fs');
const path = require('path');
const util = require('util');
const package = require("../../package.json");

fs.readFile(path.resolve(__dirname, '../../README_SOURCE.md'), "utf8", (err, data) => {

    let githubPageURL = 'https://jef15938.github.io/DemoWebSource/';
    let appVersion = package.version;

    if (err) throw err;
    data = replaceAll(data, '${app-version}', appVersion);
    data = replaceAll(data, '${github-page-url}', githubPageURL);

    fs.writeFile(path.resolve(__dirname, '../../README.md'), data, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });
});

function replaceAll(source, beforeReplace, replaceBecome) {
    return source.split(beforeReplace).join(replaceBecome);
}


