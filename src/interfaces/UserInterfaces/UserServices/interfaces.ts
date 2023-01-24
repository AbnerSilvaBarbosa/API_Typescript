import { TUserAccount, TUserAccountAll, TUserLogin, TUserName } from './../../../types/userTypes';

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

export interface IUserServicesUpdateName {
	execute(userId: string, name: string, email: string | string[] | undefined): Promise<TUserName>
}



