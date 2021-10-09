const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fs = require("fs");
var FileName = "";
var fileData = "";

// Creating A File
var createFileWizard = () => {
    fs.writeFile(FileName, fileData, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File "+FileName+" Saved Successfully..!");
        }
        repeat();
    });
};

// Creating Directory
var createDirWizard = () => {
    rl.question("Enter Name of the  directory :: ", (ans) => {
        if (!fs.existsSync(ans)) {
            fs.mkdirSync(ans);
        } else {
            console.log("Directory Already exist...!");
        }
        repeat();
    });
};

//  Remove Directory
var removeDirWizard = () => {
    rl.question("Enter Name of the Directory :: ", (ans) => {
        if (fs.existsSync(ans)) {
            fs.rmdirSync(ans);
            console.log("Diretory "+ans+ " Is Now Removed");
        } else {
            console.log("Directory does not exist...!");
        }
        repeat();
    });
};

// Creating and writing in File
var writeFileWizard = () => {
    rl.question("Enter Name of the File :: ", (ans) => {
        FileName = ans + ".txt";
        rl.question("Enter Data of the File :: ", (ans) => {
            fileData = ans;
            createFileWizard();
        });
    });
};

// Reading File
var readFileWizard = () => {
    rl.question("Enter Name of the File :: ", (ans) => {
        FileName = ans + ".txt";
        fs.readFile(FileName, 'utf8', function(err, data) {
            if (err) {
                console.log("File"+FileName+" does not exist...!");
            } else {
                console.log("Reading :: " + FileName);
                console.log(data);
            }
            repeat();
        });
    });
};

// Deleting File
var deleteFileWizard = () => {
    rl.question("Enter Name Of File :: ", (ans) => {
        FileName = ans + ".txt";
        fs.unlink(FileName, function(err) {
            if (err) {
                console.log("File "+FileName+" is not exist");
            } else {
                console.log('File Deleted..!');
            }
        });
        repeat();
    });
};

// Append In File
var appendToWizard = () => {
    rl.question("Enter Name Of File :: ", (ans) => {
        FileName = ans + ".txt";
        rl.question("Enter Data In File :: ", (ans) => {
            fileData = ans;
            fs.appendFile(FileName, fileData, function(err) {
                if (err) {
                    console.log("File "+FileName+" not exist..!");
                } else {
                    console.log('File Appended..!');
                }
                repeat();
            });
        });
    });
};

// Update
var updateFileWizard = () => {
    rl.question("Enter Name Of File :: ", (ans) => {
        FileName = ans + ".txt";
        rl.question("Enter Data In the File :: ", (ans) => {
            fileData = ans;
            fs.writeFile(FileName, fileData, function(err) {
                if (err) {
                    console.log("File "+FileName+" not exist..!");
                } else {
                    console.log('File Updated ');
                }
                repeat();
            });
        });
    });
};

//  Rename File 
var renameFileWizard = () => {
    rl.question("Enter File Name :: ", (ans) => {
        var newName = "";
        FileName = ans + ".txt";
        rl.question("Enter Replaced File Name :: ", (ans) => {
            newName = ans + ".txt";
            fs.rename(FileName, newName, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(FileName + ".txt replaced with " + newName + ".txt");
                }
                repeat();
            });
        });
    });
};

// User Choice
var instruction = () => {
    console.log("1.  Create Directory ( Hint: fs.mkdir )");
    console.log("2.  Remove Directory ( Hint: fs.rmdir )");
    console.log("3.  Create and write File");
    console.log("4.  Read File");
    console.log("5.  Delete File");
    console.log("6.  Append data to file");
    console.log("7.  Update / Replace file with new data");
    console.log("8.  Rename File");
    console.log("0.  Exit");
    
};

var start = () => {
    rl.question("Enter Choice :: ", (ch) => {
        if (ch == "1") {
            createDirWizard();
        } else if (ch == "2") {
            removeDirWizard();
        } else if (ch == "3") {
            writeFileWizard();
        } else if (ch == "4") {
            readFileWizard();
        } else if (ch == "5") {
            deleteFileWizard();
        } else if (ch == "6") {
            appendToWizard();
        } else if (ch == "7") {
            updateFileWizard();
        } else if (ch == "8") {
            renameFileWizard();
        } else if (ch == "0") {
            rl.close();
        } else {
            console.log("Not a valid Choice...!");
            repeat();
        }
    });
};

var repeat = () => {
    instruction();
    start();
};

repeat();