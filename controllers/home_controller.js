const express = require("express");
const Question = require("../models/question");

const getAllQue = async (req, res) => {
  try {
    const question = await Question.find();
    if (question.length > 0) {
      res.status(200).json({ question });
    } else {
      res.status(404).json({ msg: "NO QUESTOIN FOUND" });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createQue = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(200).json({ question });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteQue = async (req, res) => {
  try {
    const queID = req.params.id;
    const question = await Question.findByIdAndDelete({ _id: queID });
    if (!question) {
      res.status(400).json({ msg: `No question with ID: ${queID}` });
    }
    res.status(200).json({ question });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllQue, createQue, deleteQue };
