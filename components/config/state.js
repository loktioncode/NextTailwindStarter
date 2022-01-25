import React,{useState, createContext} from 'react';

//In this folder is were we manage Cars context so it can be used in our App
export const NftContext = createContext();


//this data can then be accessed as props via wrapped content in App.js return method
export const NftProvider = props => {

    //this is our state with an array of nft's
    const [nftData, setNftData] = useState([]);


    return (
        //this makes data frm above state accessble to all components
        <NftContext.Provider value={[nftData, setNftData]}>
            {props.children}
        </NftContext.Provider>
    );

}