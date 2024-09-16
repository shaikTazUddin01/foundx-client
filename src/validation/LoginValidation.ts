import { z } from "zod";

const loginvalidation=z.object({
    email:z.string().trim().email('please enter a valid email'),
    password:z.string().trim().min(6,"enter at last 6 digite")
})

export default loginvalidation