export const handleRelaunch = async (_event: unknown, reason?: string) => {
	if (reason && reason === "backdropClick") {
		return;
	}
	// Reload the page
	window.location.reload();
};
