import logger from "./logger";

const sendCustom = ( res, statusCode, message, description ) => {
  res.status(statusCode).send({ message, description });
};

/**
 * @swagger
 *
 * components:
 *   responses:
 *     OK:
 *       description: OK.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 200
 *               message:
 *                 type: string
 *                 example: OK
 */
const sendOk = res => {
  sendCustom(res, 200, 'OK');
};

/**
 * @swagger
 *
 * components:
 *   responses:
 *     Created:
 *       description: The specified resource was successfully created.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 201
 *               message:
 *                 type: string
 *                 example: The specified resource was successfully created.
 *             required:
 *               - status_code
 *               - message
 */
const sendCreated = (res, origin) => {
  sendCustom(res, 201, `${origin} succesfully created`);
};


/**
 * @swagger
 *
 * components:
 *   responses:
 *     Success:
 *       description: Success.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 204
 *             required:
 *               - status_code
 */
const sendSuccess = res => {
  sendCustom(res, 204);
};


/**
 * @swagger
 *
 * components:
 *   responses:
 *     BadRequest:
 *       description: Cannot process the request may a malformed syntax request, invalid message framing, or deceptive request routing.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 400
 *               message:
 *                 type: string
 *                 example: Cannot process the request may a malformed syntax request, invalid message framing, or deceptive request routing.
 *               description:
 *                 type: string
 *                 example: More explicit error description. Optional.
 *             required:
 *               - status_code
 *               - message
 */
const sendBadRequest = res => {
  sendCustom(res, 400, 'Cannot process the request may a malformed syntax request, invalid message framing, or deceptive request routing');
};

/**
 * @swagger
 *
 * components:
 *   responses:
 *     Unauthorized:
 *       description: The request has not been applied because it lacks valid authentication credentials for the target resource.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 401
 *               message:
 *                 type: string
 *                 example: The request has not been applied because it lacks valid authentication credentials for the target resource.
 *               description:
 *                 type: string
 *                 example: More explicit error description. Optional.
 *             required:
 *               - status_code
 *               - message
 */
const sendUnauthorized = res => {
  sendCustom(res, 401, 'Unauthorized Access. Authentication required or invalid');
};

const sendForbidden = res => {
  sendCustom(res, 403, 'The request is valid but you do not have access to this resource');
};

/**
 * @swagger
 *
 * components:
 *   responses:
 *     NotFound:
 *       description: The requested resource could not be found.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status_code:
 *                 type: integer
 *                 example: 404
 *               message:
 *                 type: string
 *                 example: The requested resource could not be found.
 *               description:
 *                 type: string
 *                 example: More explicit error description. Optional.
 *             required:
 *               - status_code
 *               - message
 */
const sendNotFound = ( res, origin ) => {
  sendCustom(res, 404, `The requested ${origin} could not be found`);
};

const sendGone = ( res, origin ) => {
  sendCustom(res, 410, 'The requested resource is no longer available and will not be available again');
};

const sendInternalServerError = res => {
  sendCustom(res, 500, 'Woooops something went wrong');
};

const sendServiceUnavailable = res => {
  sendCustom(res, 503, 'The server is currently unavailable (because it is overloaded or down for maintenance)');
};

const sendPayload = ( res, statusCode, content ) => {
  res.status(statusCode).send(content);
}

export default {
  sendOk,
  sendCreated,
  sendSuccess,
  sendBadRequest,
  sendUnauthorized,
  sendForbidden,
  sendNotFound,
  sendGone,
  sendInternalServerError,
  sendServiceUnavailable,
  sendPayload
};