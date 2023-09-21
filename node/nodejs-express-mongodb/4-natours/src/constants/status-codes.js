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

module.exports = STATUS_CODE;
