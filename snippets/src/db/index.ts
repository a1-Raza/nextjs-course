import { PrismaClient } from "@prisma/client";
// "handle" onto our database, used for save, delete, edit, etc.
export const db = new PrismaClient();

/*
// example creating snippet

db.snippet.create({
    data:{
        title: "Title!",
        code: "const abc = () => {}"
    }
})
*/