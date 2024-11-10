const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, 'src/images')
const outputPath = path.join(__dirname, 'src/imageList.js')

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  // Generate import statements
  const imports = files
    .filter((file) => /\.(png|jpe?g|svg)$/i.test(file))
    .map((file, index) => `import img${index} from './images/${file}';`)
    .join('\n')

  // Generate the imageList array
  const imageArray = files
    .filter((file) => /\.(png|jpe?g|svg)$/i.test(file))
    .map((file, index) => `img${index}`)
    .join(', ')

  const content = `
    ${imports}
    export const imageList = [${imageArray}];
  `

  fs.writeFileSync(outputPath, content)
  console.log('Image list generated successfully!')
})
