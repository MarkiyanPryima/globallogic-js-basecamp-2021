function mercedes (action) {
    const Actions = {
        start : 'The engine is working',
        stop : 'The engine is not working',
    }
    return Actions[action];
}

module.exports = mercedes;