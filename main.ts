import { Plugin, Notice, requestUrl } from "obsidian";

export default class MCPPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "mcp-process",
			name: "Process Vault with MCP (Python API)",
			callback: async () => {
				new Notice("Sending Vault to Python MCP Server...");
				const res = await requestUrl({
					url: "http://localhost:8000/process-vault",
					method: "POST",
					body: JSON.stringify({
						vault_path: "C:/Users/HjKim/Documents/TestVault",
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				new Notice(`MCP Finished: ${res.json.status}`);
			},
		});
	}
}