import {useEffect, useState} from "react";
import axios from "axios";

const useRequestDetails = (initialState, url) => {
    const [details, setDetails] = useState(initialState);

    const getDetails = () => {
        axios
           .get(url)
           .then(response => {
               setDetails(response.data);
           })
           .catch(error => {
               alert(error);
           })
    }

    useEffect(() => {
       getDetails();
    },[]);

    return details;
};

export default useRequestDetails;