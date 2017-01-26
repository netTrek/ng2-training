var execSync = require('child_process').execSync;

const today = new Date ();
const dd = today.getDate();
const mm = today.getMonth()+1;//January is 0!`

var userName = 'anonym';
try {
    userName = process.env.USER || process.env['USERPROFILE'].split(path.sep)[2];
}catch (err) {}

const netTrekBuildInfo = {

    branch: execSync('git rev-parse --abbrev-ref HEAD').toString(),
    hash: execSync('git log --pretty="%H" -1').toString(),
    shorthash: execSync('git log --pretty="%h" -1').toString(),
    subj: execSync('git log --pretty="%s" -1').toString(),
    author: execSync('git log --pretty="%an" -1').toString(),
    mail: execSync('git log --pretty="%ae" -1').toString(),
    commitDate: new Date ( execSync('git log --pretty="%ad" -1') ),
    buildDate: today,
    major : 3,      //Hauptversionsnummer               WFE3
    minor : 2,      //Nebenversionsnummer               zweite Version ( 1.Pilot von Avaya und 2. Pilot netTrek)
    patch : 2,      //Revisionsnummer                   patch zweite Version mit Entrückmeldung
    build : (mm<10?('0'+mm):mm)+(dd<10?('0'+dd):dd),    //Buildnummer
    buildDev : userName
};

var out = '/** will be generated via node in build-scripts/netTrek.js */ \r' +
    'export const netTrekBuildInfo = { \r' +
    '    branch: \''+netTrekBuildInfo.branch.trim()+'\',\r' +
    '    hash: \''+netTrekBuildInfo.hash.trim()+'\',\r' +
    '    shorthash: \''+netTrekBuildInfo.shorthash.trim()+'\',\r' +
    '    subj: \''+netTrekBuildInfo.subj.trim()+'\',\r' +
    '    author: \''+netTrekBuildInfo.author.trim()+'\',\r' +
    '    mail: \''+netTrekBuildInfo.mail.trim()+'\',\r' +
    '    commitDate: \''+netTrekBuildInfo.commitDate+'\',\r' +
    '    buildDate: \''+netTrekBuildInfo.buildDate+'\',\r' +
    '    major: '+netTrekBuildInfo.major+',\r' +
    '    minor: '+netTrekBuildInfo.minor+',\r' +
    '    patch: '+netTrekBuildInfo.patch+',\r' +
    '    build: \''+netTrekBuildInfo.build.trim()+'\',\r' +
    '    buildDev: \''+netTrekBuildInfo.buildDev.trim()+'\',\r' +
    '};\r';

fs = require('fs');
fs.writeFile('./src/environments/enviroments.variables.ts', out, function (err) {
    if (err)
        return console.log(err);
});
