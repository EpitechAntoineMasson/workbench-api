import logger from '../../utils/logger';
import { GuildModel } from '../models';
import { Response } from '../../utils';

/*
 *  Guilds route : /guild
 *  GET     - /     - return all guilds
 *  GET     - /:id  - return the requested guild
 *  POST    - /     - create a quild
 *  PUT     - /:id  - update the requested guild
 *  DELETE  - /:id  - delete requested guild
*/

/**
 * @swagger
 * paths:
 *   /guilds/:
 *     get:
 *       description: Get all guilds.
 *       operationId: getGuilds
 *       summary: Get all guilds informations.
 *       tags:
 *         - guilds
 *       responses:
 *         '200':
 *            description:
 *            content:
 *              application/json:
 *                schema:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Guild'
 */
const getGuilds = async ( req, res, next ) => {
  try {
    const guilds = await GuildModel.find();

    return Response.sendPayload(res, 200, guilds);
  } catch (err) {
    logger.error(err);
    return next(error);
  }
};

/**
 * @swagger
 * paths:
 *   /guilds/{id}:
 *     get:
 *       description: Get a guild informations thanks to a specific ID.
 *       operationId: getGuild
 *       summary: Get specific guild informations.
 *       tags:
 *         - guilds
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The MongoDB ID of the guild.
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description:
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Guild'
 *         '404':
 *           $ref: '#/components/responses/NotFound'
 */
const getGuild = async (req, res, next) => {
  try {
    const { id } = req.params;

    const guild = await GuildModel.findOne({ _id: id });
    if (!guild) return Response.sendNotFound(res, 'guild');
    return Response.sendPayload(res, 200, guild);
  } catch (err) {
    logger.error(err);
    return next(err);
  }
};

/**
 * @swagger
 * paths:
 *   /guilds:
 *     post:
 *       description: Create a new guild.
 *       operationId: createGuild
 *       summary: Create a new guild.
 *       tags:
 *         - guilds
 *       requestBody:
 *         description: Guild informations needed in order to create a guild.
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Guild'
 *       responses:
 *         '201':
 *           $ref: '#/components/responses/Created'
 *         '400':
 *           $ref: '#/components/responses/BadRequest'
 */
const createGuild = async ( req, res, next ) => {
  try {
    const newGuild = new GuildModel(req.body);

    await newGuild.validate();
    const guild = await newGuild.save();

    if (!guild) return Response.sendNotFound(res, 'guild');
    return Response.sendCreated(res, 'guild');
  } catch (err) {
    logger.error(err);
    return next(error);
  }
};

/**
 * @swagger
 * paths:
 *   /guilds/{id}:
 *     patch:
 *       description: Update a guild.
 *       operationId: patchGuild
 *       summary: Update a guild.
 *       tags:
 *         - guilds
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The MongoDB ID of the guild.
 *           schema:
 *             type: string
 *       requestBody:
 *         description: Guild informations needed in order to update a guild. Just fields which need to be updated are required.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Guild'
 *       responses:
 *         '200':
 *           $ref: '#/components/responses/OK'
 *         '400':
 *           $ref: '#/components/responses/BadRequest'
 *         '404':
 *          $ref: '#/components/responses/NotFound'
 */
const patchGuild = async (req, res, next) => {
  try {
    const { id } = req.params;

    const guild = await GuildModel.findOneAndUpdate({ _id: id }, req.body);
    if (!guild.ok || !guild.n) return Response.sendNotFound(res, 'guild');
    return Response.sendOk(res);
  } catch (err) {
    logger.error(err);
    return next(err);
  }
};

/**
 * @swagger
 * paths:
 *   /guilds/{id}:
 *     delete:
 *       description: Delete a guild thanks to a specific ID.
 *       operationId: deleteGuild
 *       summary: Delete a specific guild.
 *       tags:
 *         - guilds
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The MongoDB ID of the guild.
 *           schema:
 *             type: string
 *
 *       responses:
 *         '200':
 *           $ref: '#/components/responses/OK'
 *         '404':
 *           $ref: '#/components/responses/NotFound'
 */
const deleteGuild = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const result = await GuildModel.deleteOne({ _id: id });

    if (result.ok) return Response.sendOk(res);
    return Response.sendNotFound(res, 'guild');
  } catch (err) {
    logger.error(err);
    return next(err);
  }
};

export default router => {
  router.route('/')
    .get(getGuilds)
    .post(createGuild);
  router.route('/:id')
    .get(getGuild)
    .patch(patchGuild)
    .delete(deleteGuild);
};