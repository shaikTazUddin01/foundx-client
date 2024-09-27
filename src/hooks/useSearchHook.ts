import { useMutation } from "@tanstack/react-query"
import { searchItems } from "../services/searchItem/Index"


export const useSearchItem=()=>{
    return useMutation({
        mutationKey:["SEARXH_KEY"],
        mutationFn:async (searchItem:string)=>await searchItems(searchItem)
    })
}