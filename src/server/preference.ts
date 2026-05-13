import { env } from "cloudflare:workers";
import { createServerFn } from "@tanstack/react-start";

export type ExampleRow = {
	id: number;
	created_at: string;
};

export const getExample = createServerFn().handler(async () => {
	const result = await env.DB.prepare("SELECT * FROM example").all<ExampleRow>();
	return result.results;
});

export const insertExample = createServerFn()
	.inputValidator((data: { created_at: string }) => data)
	.handler(async ({ data }) => {
		await env.DB.prepare("INSERT INTO example (created_at) VALUES (?)")
			.bind(data.created_at)
			.run();
	});
