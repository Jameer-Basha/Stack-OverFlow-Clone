import mongoose from "mongoose";
import question from "../models/question.js";

export const postAnswer = async (req, res) =>{
    const { id: _id} = req.params;
    const {noOfAnswers , answerBody , userAnswered , userId} =req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question is unavable');
    }
    updateNoOfAnswer(_id, noOfAnswers )
    try{
        const updatedQuestion =await question.findByIdAndUpdate(_id, {$addToSet: {'answer': [{answerBody,userAnswered , userId}]}})
        res.status(200).json(updatedQuestion)
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
}

const updateNoOfAnswer = async (_id , noOfAnswers) =>{
    try{
        await question.findByIdAndUpdate(_id, {$set : {'noOfAnswers':noOfAnswers}})
    }
    catch(error){
        console.log(error)

    }
}

export const deleteAnswer =async (req, res) => {
    const {id :_id} = req.params;
    const {answerId, noOfAnswers}= req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question is unavable');
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        return res.status(404).send('answer is unavable');
    }
    updateNoOfAnswer(_id , noOfAnswers)
    try{
        await question.updateOne(
            { _id },
            { $pull :{'answer': {_id: answerId}}}
        )
        res.status(200).json({message : " Successfully deleted"})
    }catch(error){
        console.log(error)
        res.status(405).json(error)
    }
}