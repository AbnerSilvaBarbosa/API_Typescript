import { TUserAccountAll, UserAccount } from '../../types/userTypes';
import { Request, Response } from "express";

export interface IUserModelCreateInterface {
	save(name: string, email: string, password: string): Promise<UserAccount>


}


export interface IControler {
	execute(req: Request, res: Response): Promise<Response>
}


export interface IUserModelReadInterface {
	findByEmail(email: string): Promise<UserAccount | null>
	findById(userId: number): Promise<TUserAccountAll | null>

}
