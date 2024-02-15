//import database
import { openDatabase } from "react-native-sqlite-storage";

//create constant object that refers to database
const meetingDB = openDatabase({name: 'Meeting.db'});

//create constant that contains the of the lists table
const listsTableName = 'lists';

module.exports = {
    //declare function that will crate lists table
    createListsTable: async function (){
        //declare transaction that will execute SQL
        (await meetingDB).transaction(txn => {
            //execute SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    email TEXT,
                );`,
                //arguments passed when using SQL prepared staements
                [],
                //callback functions to handle results 
                () => {
                    console.log('Meeting table created successfully');
                },
                error => {
                    console.log('Error creating Meeting table ' + error.message);
                },
            );
        });
    },

    //declare function that will insert a row of data into the lists table
    addList: async function (name, email){
        // declare transaction that will execute the SQL
        (await shopperDB).transaction(txn => {
            //execute SQL
            txn.executeSql(
                `INSERT INTo ${listsTableName} (name, email) VALUES ("${name}", "${email}")`,
                 //arguments passed when using SQL prepared staements
                 [],
                 //callback functions to handle results 
                 () => {
                     console.log(name+ " added succesfully.");
                 },
                 error => {
                     console.log('Error adding list ' +error.message);
                 },
            );
       });
    },
};

