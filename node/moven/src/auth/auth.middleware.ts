import { Request, Response,NextFunction } from 'express';
export const authGard = (req: Request, res: Response, next: NextFunction) => {
    // console.log('demo-----------')
    next(new Error('UNAUTHORIZED'));
}
