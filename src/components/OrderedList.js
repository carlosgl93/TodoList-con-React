import React from "react";

  const OrderedList = (props) =>  {
    

        return (
            <div>
                <ol>
                    {props.tasks.map((item, key) => {
                        return <li key={key}>{item}</li>
                    })}
                </ol>
            </div>
        );
    }


export default OrderedList;