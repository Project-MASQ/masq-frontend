import React, {useState} from 'react';
import './styles.scss';
import EditInformation from "./EditInformation";
import ShowInformation from "./ShowInformation";

function Information () {
    /*State*/
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div>
            {
                !isEdit ?
                <ShowInformation
                    handleShowEdit={() => setIsEdit(true)}
                /> :
                <EditInformation />
            }
        </div>
    );
}

export default Information
