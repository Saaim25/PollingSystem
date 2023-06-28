const express = require("express");
const Question = require("../models/question");
const Option = require("../models/option");

const getAllOptoins = async (req, res) => {
  try {
    const option = await Option.find({});
    if (!option) {
      res.status(500).json({ msg: "NO OPTIONS FOUND" });
    }
    res.status(200).json({ option });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const createOption = async (req, res) => {
  try {
    const queID = req.params.id;
    const content = req.body;

    const question = await Question.findById(queID);

    if (!question) {
      res.status(404).json({ msg: `NO QUESTION FOUND` });
    }

    const newOption = new Option(content);

    const savedOption = await newOption.save();

    question.options.push(savedOption);

    await question.save();

    res.status(200).json({ question });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteOptoin = async (req, res) => {
  try {
    const optionID = req.params.id;

    const option = await Option.findByIdAndDelete({ _id: optionID });
    if (!option) {
      res.status(500).json({ msg: "NO OPTIONS FOUND" });
    }

    res.status(200).json({ option });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const vote = async (req, res) => {
  const optionID = req.params.id;
  const option = await Option.findById(optionID);
  const val = option.vote + 1;

  option.vote = val;

  await option.save();

  res.status(200).json({ option });
};

module.exports = {
  createOption,
  getAllOptoins,
  deleteOptoin,
  vote,
};
