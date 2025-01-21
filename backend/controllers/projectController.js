const Project = require("../models/projectModel");

exports.createProject = async (req, res) => {
  try {
    const { title, description } = req.body;
    const project = new Project({ title, description, owner: req.user.id });
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: "Error creating project", error });
  }
};
