import { auth } from "@services";

export type IUser = typeof auth.currentUser;
