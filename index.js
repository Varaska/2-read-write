
const { saveData } = require('./dataSaver');

const jsonFilePath = '2-read-write-users.json';
const folderName = 'folderDaneIWartosc';
const overwrite = true;

saveData(jsonFilePath, folderName, overwrite);
