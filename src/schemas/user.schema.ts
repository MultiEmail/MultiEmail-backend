import { z } from "zod";

/**
 * This schema is used to validate `PATCH /users/:id` request
 *
 * @author aayushchugh
 */
export const patchUserSchema = z.object({
	params: z.object({
		id: z.string({ required_error: "Id is required" }),
	}),
	body: z.object({
		username: z.string().optional(),
	}),
});

/**
 * This schema is used to validate `PATCH /users/marketing-emails/unsubscribe/:id` request
 *
 * @author arbaz23
 */
 export const updateUnsubscribeUserSchema = z.object({
	params: z.object({
		id: z.string({ required_error: "Id is required" }),
	}),
	body: z.object({
		receiveMarketingEmails : z.boolean().optional(),
	}),
});

/**
 * This type is generated using `patchUserSchema` and can be used
 * as express Request type generic
 *
 * @author aayushchugh
 */
export type PatchUserSchema = z.infer<typeof patchUserSchema>;
export type UpdateUnsubscribeUserSchema = z.infer<typeof updateUnsubscribeUserSchema>;
