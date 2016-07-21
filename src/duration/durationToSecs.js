export default (duration, unit) => {
    switch (unit) {
        case 't':
        case 's': return duration;
        case 'm': return 60 * duration;
        case 'h': return 3600 * duration;
        case 'd': return 86400 * duration;
        default: throw new Error('Duration unit not valid');
    }
};
