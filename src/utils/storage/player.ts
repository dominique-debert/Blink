import { getStore } from "./localStorage";

let PlayerStore: any = null;

/**
 * Initialize the player store lazily on first use
 */
const ensurePlayerStore = async () => {
	if (!PlayerStore) {
		PlayerStore = getStore("player");
	}
	return PlayerStore;
};

export const setPlayerVolume = async (
	type: "audio" | "video",
	volume: number,
) => {
	const store = await ensurePlayerStore();
	await store.set(`${type}.volume`, volume);
	await store.save();
};

export const getPlayerVolume = async (type: "audio" | "video") => {
	const store = await ensurePlayerStore();
	const value = await store.get<number>(`${type}.volume`);
	return value ?? 0.8;
};

export const setPlayerMuted = async (
	type: "audio" | "video",
	muted: boolean,
) => {
	const store = await ensurePlayerStore();
	await store.set(`${type}.muted`, muted);
	await store.save();
};

export const getPlayerMuted = async (type: "audio" | "video") => {
	const store = await ensurePlayerStore();
	const value = await store.get<boolean>(`${type}.muted`);
	return value ?? false;
};
