const fs = require('fs')
const fsPromises = require('fs').promises

// if (!fs.existsSync('./new')) {
//   fs.mkdir('./new', (err) => {
//     if (err) throw err
//     console.log('directory created')
//   })
// }

// if (fs.existsSync('./new')) {
//   fs.rmdir('./new', (err) => {
//     if (err) throw err
//     console.log('directory removed')
//   })
// }

const fileOps = async () => {
  try {
    if (!fs.existsSync('./new')) {
      await fsPromises.mkdir('./new')
      console.log('directory created')
    }
    if (fs.existsSync('./new')) {
      await fsPromises.rmdir('./new')
      console.log('directory removed')
    }
  } catch (error) {
    console.error(error)
  }
}

fileOps()
