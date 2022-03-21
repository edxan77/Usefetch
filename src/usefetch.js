import { useState } from "react";

export function useFetch(){
    const [val,setval] = useState([])

    const getval = function(){
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                setval(data)
            })
    }

    return{
        val,
        getval
    }
}