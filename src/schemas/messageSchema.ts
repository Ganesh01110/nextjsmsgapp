import { z } from "zod";

export const messageSchema=({
   content:z
     .string()
     .min(10,{message:"content must be at least 10 charaacter"})
     .max(300,{message:"content must be with in 300 charaacter"})
})