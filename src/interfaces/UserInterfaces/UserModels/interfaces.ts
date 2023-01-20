import { TUserWithPassword, TUserAccountAll, TUserAccount } from "../../../types/userTypes";


export interface IUserModelCreateInterface {
	save(name: string, email: string, password: string): Promise<TUserAccount>
}


export interface IUserModelReadInterface {
	findByEmail(email: string): Promise<TUserAccount | null>
	findById(userId: string): Promise<TUserAccountAll | null>

}


export interface IUserModelLogin {
	getEmailAndPassword(email: string): Promise<TUserWithPassword | null>
}