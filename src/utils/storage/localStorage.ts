/**
 * Simple localStorage wrapper for storage persistence
 */

export class LocalStorageStore {
	private prefix: string;

	constructor(storeName: string) {
		this.prefix = `blink_${storeName}_`;
	}

	async set(key: string, value: any): Promise<void> {
		localStorage.setItem(this.prefix + key, JSON.stringify(value));
	}

	async get<T = any>(key: string): Promise<T | null> {
		const value = localStorage.getItem(this.prefix + key);
		return value ? JSON.parse(value) : null;
	}

	async save(): Promise<void> {
		// localStorage auto-saves, nothing to do
	}

	async clear(): Promise<void> {
		const keys = Object.keys(localStorage);
		keys.forEach((key) => {
			if (key.startsWith(this.prefix)) {
				localStorage.removeItem(key);
			}
		});
	}
}

export const getStore = (storeName: string): LocalStorageStore => {
	return new LocalStorageStore(storeName);
};
