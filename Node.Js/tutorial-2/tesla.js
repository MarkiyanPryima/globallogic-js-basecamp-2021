function tesla (action) {
    const Actions = {
        start : 'The battery is turn on',
        stop : 'The battery is turn off',
    }
    return Actions[action];
}

module.exports = tesla;