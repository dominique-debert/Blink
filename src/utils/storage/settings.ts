import { getStore } from "./localStorage";

let SettingsStore: any = null;

/**
 * Initialize the settings store lazily on first use
 */
const ensureSettingsStore = async () => {
	if (!SettingsStore) {
		SettingsStore = getStore("settings");
	}
	return SettingsStore;
};

/**
 * settingKey should be of type:
 * 'settingDomain.settingKeyName'
 */

export const setSetting = async (settingKey: string, value: boolean) => {
	const store = await ensureSettingsStore();
	await store.set(settingKey, value);
	await store.save();
};

export const getSetting = async (settingKey: string) => {
	const store = await ensureSettingsStore();
	const value = await store.get(settingKey);
	console.log(`${settingKey} - ${value}`);
	if (value) return value;
	return false;
};

export const allSettings = {
	general: [
		{
			key: "general.enable_skip_intro_outro",
			name: "Enable Intro-Skipper plugin",
			description:
				"Shows a skip button for Intros and End Credit scenes in an episode. Note: this requires jumoog/intro-skipper plugin to be installed on server",
		},
	],
};
