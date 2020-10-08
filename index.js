/* Project to easy convert money to local currency */

function convertMoney (local, currency , value) {
    if (typeof local != 'string') return 'Invalid Format of Local'
    if (typeof currency != 'string') return 'Invalid Format of Local'
    if (typeof value != 'number') return 'Invalid Format of Local'

    return Number(value).toLocaleString(local, {style: 'currency', currency: currency})
}

function convertIsoToDate(isoString) {
    const date = new Date(isoString)

    return date.getFullYear()+'-'+ (date.getMonth()+1) + '-'+date.getDate();
}

function genNumId(length) {

    if (typeof length !== 'number')
        return 'Invalid format'
    
    if (typeof length === 'number') {
        const generatedID = ((Math.round(Date.now() + Math.random() + Math.random() * Date.now())).toString()).substring(0,length)

        return generatedID
    }
}
function uniId (length) {

    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz123456789'
    var charLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLength));
    }
    return result;

}

function uniqueId () {

    return (uniId(5) + '-' + uniId(5) + '-' + uniId(5) + '-' + uniId(5))

}

module.exports = {
    convertIsoToDate,
    convertMoney,
    genNumId,
    uniId,
    uniqueId
}