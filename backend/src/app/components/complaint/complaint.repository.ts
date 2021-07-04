import { Complaint } from "../../models/complaint.model";
import complaintSchema from './complaint.schema';

function getAllComplaints(){
    return complaintSchema.find();
}

function getComplaintById(id:string){
    return complaintSchema.findOne({_id: id});
}

function addComplaint(complaint: Complaint){
    return complaintSchema.create(complaint);
}

function getAllComplaintsByUser(userId: string){
    return complaintSchema.find({userid:userId});
}

export default { getAllComplaints, getComplaintById, addComplaint, getAllComplaintsByUser };