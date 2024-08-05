exports.handler = async (event) => {
    let method = event['httpMethod'];
    let path = event['path'];

    if (method === 'GET' && path === '/hello') {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Hello from Lambda"
            }),
        };
        return response;
    } else {
        const response = {
            statusCode: 404,
            body: JSON.stringify({
                message: "Not Found"
            }),
        };
        return response;
    }
};
