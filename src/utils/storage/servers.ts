import type { RecommendedServerInfo } from "@jellyfin/sdk";
import { getStore } from "./localStorage";

export interface ServerInfo extends RecommendedServerInfo {
	id: string;
}

export interface ServerStore {
	defaultServer: string | null;
	servers: ServerInfo[];
}

let store: any = null;

/**
 * Initialize the servers store lazily on first use
 */
const ensureServersStore = async () => {
	if (!store) {
		store = getStore("servers");
	}
	return store;
};

/**
 * Set server in .servers.dat
 */
export const setServer = async (
	serverId: string,
	serverInfo: RecommendedServerInfo,
) => {
	const serversStore = await ensureServersStore();
	const servers = await getAllServers();
	const newServers = servers.filter((server) => server.id !== serverId);

	newServers.push({
		...serverInfo,
		id: serverId,
	});

	await serversStore.set("servers", newServers);
	await serversStore.save();
};

/**
 * Set default server
 */
export const setDefaultServer = async (
	serverId: ServerStore["defaultServer"],
) => {
	const serversStore = await ensureServersStore();
	await serversStore.set("defaultServer", serverId);
	await serversStore.save();
};

/**
 * Get a Server
 * @returns {ServerInfo}
 */
export const getServer = async (
	serverId: string | null,
): Promise<ServerInfo | undefined> => {
	const servers = await getAllServers();
	return servers.find((server) => server.id === serverId);
};

/**
 * Get all Servers
 */
export const getAllServers = async () => {
	const serversStore = await ensureServersStore();
	const servers =
		(await serversStore.get<ServerStore["servers"]>("servers")) || [];

	return servers;
};

/**
 * Get default server
 */
export const getDefaultServer = async () => {
	const serversStore = await ensureServersStore();
	return serversStore.get<ServerStore["defaultServer"]>("defaultServer");
};

/**
 * Delete the given server from client storage
 */
export const delServer = async (serverId: string) => {
	const serversStore = await ensureServersStore();
	const servers = await getAllServers();

	const newServers = servers.filter((server) => server.id !== serverId);

	await serversStore.set("servers", newServers);
	await serversStore.save();
};

/**
 * Delete the all servers from client storage
 */
export const delAllServer = async () => {
	const serversStore = await ensureServersStore();
	await serversStore.clear();
	// remove the default server
	await setDefaultServer(null);
	await serversStore.save();
};
