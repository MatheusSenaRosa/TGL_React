import { auth } from "@services";

export type userType = typeof auth.currentUser;
