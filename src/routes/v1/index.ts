/**
 * Copyright Marmoym 2017
 */
import { Router, Request, Response } from 'express';
import definitionRoute from './definitionRoute';
import userRoute from './userRoute';
import commentRoute from './commentRoute';

let router: Router = Router();

definitionRoute(router);
userRoute(router);
commentRoute(router);

export default router;