// test up to git  adfsadf
const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Wichan')


// Challeage Append a message to notes to file
// 1. Use fs.appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text


try {
    fs.appendFileSync('notes.txt', ' I add text to File')
    console.log('The "data to append" was appended to file!')
} catch (error) {

}