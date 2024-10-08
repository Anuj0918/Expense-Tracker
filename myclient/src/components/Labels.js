import React from "react";
import { getLabels } from "../helper/helper";
import {default as api} from '../components/store/slice';

export default function Labels() {
    const { data, isFetching , isSuccess, isError } = api.useGetLabelsQuery()
    console.log(data);
    let Transactions;

    

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
    }else if(isError){
        Transactions = <div>Error</div>
    }

    
    return (
        <>
        {Transactions}
        </>
    )
}

function LabelComponent({ data }){
    if(!data) return <></>;
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
            <div className='w-2 h-2 rounded py-3' style={{background: data.color ?? '#f9c74f'}}></div>
                <h3 className="text-md">{data.type??""}</h3>
            </div>
            <h4 className="font-bold">{data.percent??0}</h4>
        </div>

    )
}