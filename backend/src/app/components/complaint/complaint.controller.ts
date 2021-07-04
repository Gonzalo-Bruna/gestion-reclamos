import complaintRepository from "./complaint.repository";
import { Complaint } from '../../models/complaint.model';

function getAllComplaints(){
    return complaintRepository.getAllComplaints();
}

function getComplaintById(id: string){
    return complaintRepository.getComplaintById(id);
}

function addComplaint(complaint: Complaint){
    return complaintRepository.addComplaint(complaint);
}

function getAllComplaintsByUser(userId: string){
    return complaintRepository.getAllComplaintsByUser(userId);
}

export default { getAllComplaints, getComplaintById, addComplaint, getAllComplaintsByUser };