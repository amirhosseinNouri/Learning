const STATUS_CODE = {
  /**
   * 2xx
   */
  Ok: 200,
  Created: 201,
  NoContent: 204,
  /**
   * 4xx
   */
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  /**
   * 5xx
   */
  InternalServerError: 500,
};

module.exports = {
  STATUS_CODE_CREATED: 201,
  STATUS_CODE_BAD_REQUEST: 400,
  STATUS_CODE_OK: 200,
  STATUS_CODE_UNAUTHORIZED: 401,
  STATUS_CODE_FORBIDDEN: 403,
  STATUS_CODE_INTERNAL_SERVER_ERROR: 500,
  STATUS_CODE_NO_CONTENT: 204,
  STATUS_CODE,
};
