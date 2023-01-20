import { TUserAccount, TUserAccountAll, TUserLogin } from './../../../types/userTypes';

export interface IUserServicesCreate {
	execute(name: string, email: string, password: string): Promise<TUserAccount>
}

export interface IUserServicesRead {
	findByEmail(email: string): Promise<TUserAccount>
	findById(userId: string): Promise<TUserAccountAll>
}

export interface IUserServicesLogin {
	execute(email: string, userPassword: string): Promise<TUserLogin | undefined>
}



