import React from "react";

 const productList = () => {
  fetch("http://192.168.43.196:3000/supreme/products/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
  }).then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    }).catch((error) => {
        console.error(error);
    });
}

export const productNumber = () => {
  fetch("http://192.168.43.196:3000/supreme/products/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    //   body: JSON.stringify({
    //     firstParam: 'yourValue',
    //     secondParam: 'yourOtherValue',
    //   }),
  }).then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    }).catch((error) => {
        console.error(error);
    });
}
