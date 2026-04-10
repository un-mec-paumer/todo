import { Request, Response } from "express";
// import { Task } from "../model/model";

export default async function taskGetController(req: Request, res: Response) {
    // const tasks = await Task.find({}).exec();
    res.json({ message: "GET /api/tasks - Not implemented yet" });
}