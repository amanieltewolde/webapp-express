export default function isValidString(value) {
    return typeof value === 'string' && value.trim() !== '';
}