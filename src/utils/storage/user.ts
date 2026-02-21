import { getStore } from "./localStorage";

export interface UserStore {
	user: {
		Name: string;
		AccessToken: string;
		Id: string;
	};
}

let user: any = null;

/**
 * Initialize the user store lazily on first use
 */
const ensureUserStore = async () => {
	if (!user) {
		user = getStore("user");
	}
	return user;
};

/**
 * Set User details to .user.dat
 */
const saveUser = async (
	userName: string,
	accessToken: string,
	userId: string,
) => {
	const userStore = await ensureUserStore();
	userStore.set("user", {
		Name: userName,
		AccessToken: accessToken,
		Id: userId,
	});

	await userStore.save();
};

/**
 * Get saved user fro .user.dat
 * @return {object}
 */
const getUser = async () => {
	const userStore = await ensureUserStore();
	return userStore.get<UserStore["user"]>("user");
};

/**
 * Delete user from storage
 */
const delUser = async () => {
	sessionStorage.removeItem("accessToken");
	const userStore = await ensureUserStore();
	await userStore.clear();
	await userStore.save();
};

export { saveUser, getUser, delUser };
