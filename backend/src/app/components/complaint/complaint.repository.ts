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

export default { getAllComplaints, getComplaintById, addComplaint };