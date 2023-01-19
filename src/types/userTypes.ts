import { Comment, Like, Post } from "@prisma/client";

export type UserAccount = {
	userId: number
	name: string
	email: string
	password: string
};

export type TUserAccountAll = {
	userId: number
	name: string
	email: string
	comments: Comment[];
	postsCreate: Post[];
	postsLike: Like[]
}