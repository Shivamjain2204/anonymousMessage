import { z } from "zod";

export const messageSchema = z.object({
    content: z
            .string()
            .min(7, {message: 'Content must be atleast of 7 charcters'})
            .max(300, 'Content must be no longer than 300 characters')
})