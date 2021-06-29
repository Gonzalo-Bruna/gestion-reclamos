import regionRepository from "./region.repository";
// import { Region } from '../../models/region.model';

function getAllRegions(){
    return regionRepository.getAllRegions();
}

function getRegionById(name: string){
    return regionRepository.getRegionByName(name);
}

export default { getAllRegions, getRegionById };