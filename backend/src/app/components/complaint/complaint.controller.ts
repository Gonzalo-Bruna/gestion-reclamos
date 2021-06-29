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

export default { getAllComplaints, getComplaintById, addComplaint };