import { Request, Response } from "express";
import { Task } from "../model/model";

export default async function taskDeleteController(req: Request, res: Response) {
    try {
        const taskId = req.params.taskId as string;
        // console.log(dbTasks);
        const result = await Task.deleteOne({ _id: taskId });
        // console.log(await Task.find());
        if (result.deletedCount === 0) {
            return res.status(404).json({ msg: "Task not found" });
        }
        
        res.json({ msg: "Task deleted successfully" });
        // res.json({ message: "DELETE /api/tasks/:taskId - Not implemented yet" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting task" });
    }
}