export default (err, req, res, next) => {
    console.error(`Async Handler: ${err.stack}`);
    const code = err.statusCode || 500;
    res.status(code).json({
        error: err.message,
        code: code,
        success: false
    });
};
