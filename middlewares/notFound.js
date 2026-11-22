function notFound(req, res, next) {
    res.status(404).json({
        error: 'The endpoint you were looking for does not exist'
    })
}

export default notFound