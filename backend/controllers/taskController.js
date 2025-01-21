const Task = require("../models/taskModel");

exports.createTask = async (req, res) => {
  try {
    const { title, description, status, deadline, assignedTo, project } = req.body;
    const task = new Task({ title, description, status, deadline, assignedTo, project });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: "Error creating task", error });
  }
};
