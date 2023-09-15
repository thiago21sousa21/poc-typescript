import errorsList from "../utils/error.list";
import peopleRepository from "../repositories/people.repository"

import { misturar } from "../utils/utils";

const sort = async()=>{
    const array = await peopleRepository.getIds()

    if(array.length === 0 )throw errorsList.notFound('ids')    

    array.sort(misturar)
    console.log(array)
    const people = await peopleRepository.getPeople(array[0].id)
    return people
}

export const peopleService = {
    sort
}