function logger(url, mercedes, tesla) {
let text = '';
    switch (url) {
        case '/mercedes/start':
            text = mercedes('start');
            break;
        case '/mercedes/stop':
            text = mercedes('stop');
            break;
        case '/tesla/start':
            text = tesla('start');
            break;
        case '/tesla/stop':
            text = tesla('stop');
            break;
        default:
            text = 'Car is not chosen!';
    }
    return text;
}

module.exports = logger;