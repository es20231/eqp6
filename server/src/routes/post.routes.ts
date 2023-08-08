import { Router } from 'express';
import { container } from 'tsyringe';

import { ensureAuthenticated } from '@shared/middlewares/ensureAuthenticate';
import { EnsureEmailConfirmationMiddleware } from '@shared/middlewares/EnsureEmailConfirmationMiddleware';

import { PostsController } from '@controllers/PostsController';

const postRouter = Router();
const postController = new PostsController();
const ensureEmailConfirmation = container.resolve(
  EnsureEmailConfirmationMiddleware,
);

postRouter.post(
  '/',
  ensureAuthenticated,
  ensureEmailConfirmation.execute,
  postController.create,
);

postRouter.get(
  '/user/',
  ensureAuthenticated,
  ensureEmailConfirmation.execute,
  postController.show,
);

postRouter.delete(
  '/',
  ensureAuthenticated,
  ensureEmailConfirmation.execute,
  postController.delete,
);

export { postRouter };