/** 4.Write a JavaScript function to hide email addresses to protect from unauthorized user */

function protect_email(email) {
    let splitEmail, beforeSplit, afterSplit, minus;
    splitEmail = email.split("@");
    beforeSplit = splitEmail[0];
    afterSplit = splitEmail[1];
    avg = beforeSplit.length / 2;
    beforeSplit = beforeSplit.substring(0, (beforeSplit.length - avg));
    return beforeSplit + "...@" + afterSplit;
};

console.log(protect_email('eddygrant@example.com'));
