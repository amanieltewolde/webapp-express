export default function sendErrors(response, status, message) {
    return response.status(status).json({
        error: message,
    })
}
