export const DF_API_CODE = {
    success: 0,
    validated: 403,
    unauthorized: 401,
};

export const DF_API_FORMAT = {
    code: 'code',
    msg: 'msg',
    data: 'data',
    page: 'page',
    pageData: 'data',
    pageSize: 'pageSize',
    count: 'count',
    totalPages: 'totalPages',
};

export const getApiCode = (code = {}) => ({ ...DF_API_CODE, ...code });

export const getApiDataFormat = (format = {}) => ({ ...DF_API_FORMAT, ...format });
