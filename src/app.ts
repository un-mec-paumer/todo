import Express, { Request, Response, NextFunction } from "express";
import path from "path";

import taskGetController from "./controllers/taskGet.controller";
import taskCreateController from "./controllers/taskCreate.controller";
import taskDeleteController from "./controllers/taskDelete.controller";



// (async () => {
//     console.log(await dbTasks?.find({}).toArray());
// })();

const app = Express();
const port = 3000;
app.use(Express.json());

app.use((req:Request, res:Response, next:NextFunction ) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use(Express.static(path.join(__dirname.replace("src", ""), 'public')));
app.use(Express.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Server started! on http://localhost:${port}`));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!");
});

app.get("/todo", (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(__dirname.replace("src", ""), "public", "todo.html"));
});

// app.get("/api/tasks", (req: Request, res: Response, next: NextFunction) => {
//     taskGetController(req, res);
// });

// app.post("/api/tasks", (req: Request, res: Response, next: NextFunction) => {
//     taskCreateController(req, res);
// });

// app.delete("/api/tasks/:taskId", (req: Request, res: Response, next: NextFunction) => {
//     taskDeleteController(req, res);
// });
