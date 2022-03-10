const fsPromises = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, 'files', 'starter.txt'),
      'utf-8'
    )
    // await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
    await fsPromises.writeFile(
      path.join(__dirname, 'files', 'writePromises.txt'),
      data
    )
    await fsPromises.appendFile(
      path.join(__dirname, 'files', 'writePromises.txt'),
      '\n\nappend content'
    )
    await fsPromises.rename(
      path.join(__dirname, 'files', 'writePromises.txt'),
      path.join(__dirname, 'files', 'rename.txt')
    )
  } catch (error) {
    console.error(error)
  }
}

fileOps()

// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`there is an uncaught error: ${err}`)
  process.exit(1)
})
