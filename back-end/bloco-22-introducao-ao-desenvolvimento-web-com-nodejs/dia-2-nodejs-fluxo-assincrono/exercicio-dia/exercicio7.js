const fs = require('fs').promises;

async function arrayToFile() {
  const strs = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  
  const createPromisses = strs.map((str, index) => 
  fs.writeFile(`file${index + 1}.txt`, str)
  );

  await Promise.all(createPromisses);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const fileContents = await Promise.all(
    fileNames.map((file) => fs.readFile(file, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);

  const file = await fs.readFile('./fileAll.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })

  console.log(file);
}

arrayToFile();