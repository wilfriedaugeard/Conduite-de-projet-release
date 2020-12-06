const projectModel   = require("../models/project_model")
const taskModel      = require("../models/task_model")
const userStoryModel = require("../models/userStory_model")

function init(app, db, ObjectId) {
    app.get("/projectView/:projectId/tasks", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        res.render("pages/task.ejs", { project: project })
    })

    app.post("/projectView/:projectId/createTask", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const updateNbTask = project.task.length != 0 ? project.nbTask + 1 : 1
        const dod = cleanDod(req.body.dod)
        await taskModel.updateTaskNumber(db, ObjectId(req.params.projectId), updateNbTask)
        await taskModel.insertTask(
            db,
            ObjectId(req.params.projectId),
            updateNbTask.toString(),
            req.body.description,
            req.body.duree,
            dod,
            (req.body.dep == null ? [] : req.body.dep),
            (req.body.usRef == null ? [] : req.body.usRef),
        )
        await updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), (req.body.usRef == null ? [] : req.body.usRef), 1, 0)
        
        res.redirect("/projectView/" + req.params.projectId + "/tasks")

    })

    app.post("/projectView/:projectId/updateTask/:taskPos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const taskPos = parseInt(req.params.taskPos,10)
        const taskId = project.task[taskPos].id
        const etat = project.task[taskPos].etat
        const oldUsRef = project.task[taskPos].usRef
        const dod = cleanDod(req.body.dod)

        await taskModel.deleteTaskByPos(db, project, taskPos)
        await taskModel.updateTaskByPos(
            db,
            ObjectId(req.params.projectId),
            taskPos,
            taskId,
            (req.body.dep == null ? [] : req.body.dep),
            req.body.description,
            dod,
            (req.body.usRef == null ? [] : req.body.usRef),
            req.body.duree,
            etat
        )
        await updateUsRef(db, project, ObjectId(req.params.projectId), (req.body.usRef == null ? [] : req.body.usRef), oldUsRef, etat)
        
        res.redirect("/projectView/" + req.params.projectId + "/tasks")

    })

    app.get("/projectView/:projectId/tasks/:taskPos/updateState/:state", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const taskPos = parseInt(req.params.taskPos,10)
        const taskId = project.task[taskPos].id
        const dep = project.task[taskPos].dep
        const description = project.task[taskPos].description
        const dod = project.task[taskPos].dod
        const usRef = project.task[taskPos].usRef
        const duree = project.task[taskPos].duree
        const etat = project.task[taskPos].etat
        await taskModel.deleteTaskByPos(db, project, taskPos)
        await taskModel.updateTaskByPos(
            db,
            ObjectId(req.params.projectId),
            taskPos,
            taskId,
            dep,
            description,
            dod,
            usRef,
            duree,
            req.params.state
        )
        if(req.params.state == "DONE"){
            await updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, 0, 1)
        }else{
            if(etat == "DONE"){
                await updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, 0, -1)
            }

        }
        res.redirect("/projectView/" + req.params.projectId + "/tasks")
    })

    app.post("/projectView/:projectId/removeTask/:pos", async (req, res) => {
        const project = await projectModel.getProjectId(db, ObjectId(req.params.projectId))
        const taskPos = req.params.pos
        const usRef = project.task[taskPos].usRef
        const etat = project.task[taskPos].etat
        if(etat == "DONE"){
            await updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, -1,-1)
        }else{
            await updateTaskInfoByUSRef(db, project, ObjectId(req.params.projectId), usRef, -1, 0)
        }
        await taskModel.deleteTaskByPos(db, project, taskPos)
        res.redirect("/projectView/"+req.params.projectId+"/tasks")
    })
}




async function updateUsRef(db, project, objectId, usRef, oldUsRef, state){
    for(let x=0; x<usRef.length; x++){
        if(!oldUsRef.includes(usRef[x])){
            for(let i=0; i<project.us.length; i++){ // search us position
                if(project.us[i].id == usRef[x]){
                    let us = project.us[i]
                    let taskDone =  us.taskDone
                    if(state == "DONE")
                        taskDone+=1
                    await updateUSTaskInfo(db, project, objectId, us, us.taskTotal+1, taskDone, i)
                    break
                }
            }
        }
    }
    for(let x=0; x<oldUsRef.length; x++){
        if(!usRef.includes(oldUsRef[x])){
            for(let i=0; i<project.us.length; i++){ // search us position
                if(project.us[i].id == oldUsRef[x]){
                    let us = project.us[i]
                    let taskDone =  us.taskDone
                    if(state == "DONE")
                        taskDone-=1
                    await updateUSTaskInfo(db, project, objectId, us, us.taskTotal-1, taskDone, i)
                    break
                }
            }
        }
    }
}

function removeItemAll(arr, value) {
    let i = 0
    while (i < arr.length) {
        if (arr[i] === value || arr[i] === " ") {
            arr.splice(i, 1)
        } else {
            ++i
        }
    }
    return arr
}

function cleanDod(dod){
    let split = dod.split("/")
    return removeItemAll(split, "")
}

async function updateUSTaskInfo(db, project, objectId, us, taskTotal, taskDone, pos){
    const usId           = us.id
    const entantque      = us.entantque
    const jesouhaite     = us.jesouhaite
    const afinde         = us.afinde
    const importance     = us.importance
    const difficulte     = us.difficulte
    const plannification = us.plannification
    const etat           = us.etat
    await userStoryModel.deleteUserStoryAtPos(db, project, pos)
    await userStoryModel.insertUserStoryAtPos(
        db,
        objectId,
        usId,
        pos,
        entantque,
        jesouhaite,
        afinde,
        importance,
        difficulte,
        plannification,
        etat,
        taskTotal,
        taskDone
    )
}

async function updateTaskInfoByUSRef(db, project, objectId, usRef, taskTotalToAdd, taskDoneToAdd){
    for(let x=0; x<usRef.length; x++){
        for(let i=0; i<project.us.length; i++){
            if(project.us[i].id == usRef[x]){
                await updateUSTaskInfo(db, project, objectId, project.us[i], project.us[i].taskTotal+taskTotalToAdd, project.us[i].taskDone+taskDoneToAdd, i)
                break
            }
        }
    }
}


module.exports = {
    init,
}
