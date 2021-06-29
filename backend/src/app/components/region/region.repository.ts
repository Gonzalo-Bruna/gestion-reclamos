import { Region } from "../../models/region.model";
import regionSchema from './region.schema';

function getAllRegions(){
    return regionSchema.find();
}

function getRegionByName(name:string){
    return regionSchema.findOne({name: name});
}

export default { getAllRegions, getRegionByName };