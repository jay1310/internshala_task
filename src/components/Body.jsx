import React from "react";
import {Nav} from './Nav';
import {Table} from './Table1'



const Body = () =>{
    return(
        <>
            <body>
                <Nav />
                <div className="section">
                <main>
                <Table />
                </main>
            </div>
            </body>
        </>
    )
}

export {Body};