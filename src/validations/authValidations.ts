import {z} from "zod";

const emailSchema = z.email("Enter a valid email address");
const passSchema = z.string().min(8, "Password must be atleast 8 characters long");

export { emailSchema, passSchema };