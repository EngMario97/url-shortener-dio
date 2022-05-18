import { Request, Response } from 'express';
export declare class URLController {
    shorten(req: Request, res: Response): Promise<void>;
    redirect(req: Request, res: Response): Promise<void>;
}
