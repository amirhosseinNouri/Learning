import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import { Equal, Expect } from '../helpers/type-utils';

type ParamsDictionary = { [key: string]: string };

const app = express();

const makeTypeSafeGet =
  <TReqQuery extends Request['query']>(
    parser: (queryParams: Request['query']) => TReqQuery,
    handler: RequestHandler<any, any, any, TReqQuery>,
  ) =>
  (
    req: Request<any, any, any, TReqQuery>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      parser(req.query);
    } catch (e) {
      res.status(400).send('Invalid query: ' + (e as Error).message);
      return;
    }

    return handler(req, res, next);
  };

const getUser = makeTypeSafeGet(
  (query) => {
    if (typeof query.id !== 'string') {
      throw new Error('You must pass an id');
    }

    return {
      id: query.id,
    };
  },
  (req, res) => {
    // req.query should be EXACTLY the type returned from
    // the parser above
    type tests = [Expect<Equal<typeof req.query, { id: string }>>];

    res.json({
      id: req.query.id,
      name: 'Matt',
    });
  },
);

app.get('/user', getUser);
