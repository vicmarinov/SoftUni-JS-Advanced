function validateRequest (requestObj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^[A-Za-z0-9\.]+$/gm;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^[^<>\\&'"]*$/gm;

    if (
        !requestObj.hasOwnProperty('method') ||
        !validMethods.includes(requestObj.method)
    ) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (
        !requestObj.hasOwnProperty('uri') ||
        !(uriPattern.test(requestObj.uri) || requestObj.uri === '*')
    ) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (
        !requestObj.hasOwnProperty('version') ||
        !validVersions.includes(requestObj.version)
    ) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (
        !requestObj.hasOwnProperty('message') ||
        !messagePattern.test(requestObj.message)
    ) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return requestObj;
}


try {
    console.log(validateRequest(
        {
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        }
    ));
} catch (error) {
    console.log(error);
}


try {
    console.log(validateRequest(
        {
            method: 'OPTIONS',
            uri: 'git.master',
            version: 'HTTP/1.1',
            message: '-recursive'
        }
    ));
} catch (error) {
    console.log(error);
}


try {
    console.log(validateRequest(
        {
            method: 'POST',
            uri: 'home.bash',
            message: 'rm -rf /*'
        }
    ));
} catch (error) {
    console.log(error);
}