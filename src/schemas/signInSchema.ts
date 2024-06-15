import { z } from "zod";

export const signinSchema=({
    identifier:z.string(),
    password:z.string(),
})