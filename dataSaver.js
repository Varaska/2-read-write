

const fs = require('fs');/* Moduł fs umożliwia interakcję z systemem plików, odczytywanie plików, zapisywanie do plików, tworzenie folderów, usuwanie plików itp. */

const path = require('path')

function saveData(jsonFilePath, folderDaneIWartosc, overwrite) { /* Ma zapiasać dane w formacie JSON do pliku w podanej ściezce, coś jest nie tak ze ściezką */
  // Powinien odczytać dane z pliku JSON, ale nie odczytuję :(
  const jsonData = fs.readFileSync(path.join(__dirname + '\\jsonFilePath\\' +  jsonFilePath), 'utf8');
  const users = JSON.parse(jsonData);
  // console.log(jsonData)
  // Sprawdź czy folder istnieje
  if (!fs.existsSync(path.join(__dirname, folderDaneIWartosc))) {
    // Jeśli folder nie istnieje, powinien juz działać albo nie...
    console.log('Folder nie istnieje')
    fs.mkdirSync(path.join(__dirname, folderDaneIWartosc));
  } else if (!overwrite) {
    // Jeśli folder istnieje i nie ma zezwolenia na nadpisywanie plików, wyświetli komunikat
    console.log('Folder już istnieje. Pliki nie zostały nadpisane.');
    return;
  }

  // Przejdź przez każdego użytkownika i zapisz dane do plików tekstowych
  users.forEach((user) => {
    const { id, name, surname, address, phone } = user;
    const { street, zipCode, city } = address;
    const fileName = `${id}-${name}-${surname}.txt`;
    const filePath = `${folderDaneIWartosc}/${fileName}`;
    const fileContent = `Name: ${name}\nSurname: ${surname}\nStreet: ${street}\nZip Code: ${zipCode}\nCity: ${city}\nPhone: ${phone}`;

    // Zapisz dane do pliku tekstowego
    fs.writeFileSync(filePath, fileContent);
  });

  console.log('Dane zostały zapisane.');
}

module.exports = { saveData };