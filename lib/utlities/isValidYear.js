export default function isValidYear(value) {
    return typeof value === 'number' && Number.isInteger(value) && value >= 1900 && value <= 2100;
}