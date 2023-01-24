import { Comment, Like, Post } from "@prisma/client";

// TODO Organizar melhor esses types para serem independentes e poderem se juntar em um

export type TUserAccount = {
	userId: string
	name: string
	email: string
	password: string
};

export type TUserAccountAll = {
	userId: string
	name: string
	email: string
	comments: Comment[];
	postsCreate: Post[];
	postsLike: Like[]
}

export type TUserName = { name: string }

export type TUserWithPassword = TUserAccountAll & { password: string }

export type TUserLogin = TUserAccountAll & { token: string }