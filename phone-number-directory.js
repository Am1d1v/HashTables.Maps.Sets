


function phoneNumberDirectory(phoneNumbers) {

    const phoneContacts = new Map();
    
    // Split Name and Phone Number
    for(const entry of phoneNumbers){
        const [name, phoneNumber] = entry.split(':');

        // Add Name as key and Phone Number as value in the map
        phoneContacts.set(name, phoneNumber);
    }

    console.log(phoneContacts);
}

    // Phone Contacs Array
const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
  ];

phoneNumberDirectory(phoneNumbers);  



module.exports = phoneNumberDirectory;