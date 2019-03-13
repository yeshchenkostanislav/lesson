function getFriendlyNumbers(start, end) {
    var rand = start - 0.5 + Math.random() * (end - start + 1)
    rand = Math.round(rand)
    console.log(rand);
    return []
}
getFriendlyNumbers(250, 1000);
/* module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
} */