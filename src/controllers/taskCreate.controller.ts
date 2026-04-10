import { Request, Response } from "express";
// import { dbTasks } from "../model/model";

export default async function taskGetController(req: Request, res: Response) {
    const description = req.body.description as string;
    let urgency = parseInt(req.body.urgency as string);

    if (urgency < 1) urgency = 1;
    if (urgency > 5) urgency = 5;
        
    try {
        // const result = await dbTasks.insertOne({ description:description, urgency:urgency });
        // console.log(result);
        // res.json({msg: "Task created", taskId: result.insertedId.toString()});
        res.json({ message: "POST /api/tasks - Not implemented yet" });
    } catch (error) {
        res.status(500).json(error);
    }
}