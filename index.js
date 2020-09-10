/* Project to easy convert money to local currency */

function convertMoney (local, currency , value) {
    if (typeof local != 'string') return 'Invalid Format of Local'
    if (typeof currency != 'string') return 'Invalid Format of Local'
    if (typeof value != 'number') return 'Invalid Format of Local'

    return Number(value).toLocaleString(local, {style: 'currency', currency: currency})
}

module.exports = {
    convertMoney
}