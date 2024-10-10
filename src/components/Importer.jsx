import React, { useState, useEffect } from "react";
import axios from "axios";

const Importer = (props) => {
  // useEffect to fetch data on start and url change
  useEffect(() => {
    const fetchData = async () =>{
      try {
        const {data: response} = await axios.get(props.url);
        props.setFetchedData(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, [props.url]);
}

export default Importer