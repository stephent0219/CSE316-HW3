import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    const closeList = async () => {
        props.tps.clearAllTransactions();
		props.setActiveList({})
	}

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortColumn(1)}}>Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortColumn(2)}}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortColumn(3)}}>Status</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortColumn(4)}}>Assigned To</WButton>
            </WCol>

            <WCol size="3">
                <div className="table-header-buttons">

                    
                    <WButton className="sidebar-buttons undo-redo" onClick={props.tps.hasTransactionToUndo()?props.undo:clickDisabled} 
                             wType="texted" clickAnimation="ripple-light" shape="rounded" style={props.tps.hasTransactionToUndo()?{color:"#e9edf0"}:{color:"#322d2d"}}>
                        <i className="material-icons">undo</i>
                    </WButton>
                    <WButton className="sidebar-buttons undo-redo"  onClick={props.tps.hasTransactionToRedo()?props.redo:clickDisabled}
                             wType="texted" clickAnimation="ripple-light" shape="rounded" style={props.tps.hasTransactionToRedo()?{color:"#e9edf0"}:{color:"#322d2d"}}>
                        <i className="material-icons">redo</i>
                    </WButton>

                    
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => closeList()} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
        // <WRow className="table-header">
        //     <WCol size="4">
        //         <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortTaskColumn()}}>Task</WButton>
        //     </WCol>

        //     <WCol size="3">
        //         <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortDueDateColumn()}}>Due Date</WButton>
        //     </WCol>

        //     <WCol size="2">
        //         <WButton className='table-header-section' wType="texted" onClick = {()=>{props.sortStatusColumn()}}>Status</WButton>
        //     </WCol>

        //     <WCol size="3">
        //         <div className="table-header-buttons">

                    
        //             <WButton className="sidebar-buttons undo-redo" onClick={props.tps.hasTransactionToUndo()?props.undo:clickDisabled} 
        //                      wType="texted" clickAnimation="ripple-light" shape="rounded" style={props.tps.hasTransactionToUndo()?{color:"#e9edf0"}:{color:"#322d2d"}}>
        //                 <i className="material-icons">undo</i>
        //             </WButton>
        //             <WButton className="sidebar-buttons undo-redo"  onClick={props.tps.hasTransactionToRedo()?props.redo:clickDisabled}
        //                      wType="texted" clickAnimation="ripple-light" shape="rounded" style={props.tps.hasTransactionToRedo()?{color:"#e9edf0"}:{color:"#322d2d"}}>
        //                 <i className="material-icons">redo</i>
        //             </WButton>

                    
        //             <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
        //                 <i className="material-icons">add_box</i>
        //             </WButton>
        //             <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
        //                 <i className="material-icons">delete_outline</i>
        //             </WButton>
        //             <WButton onClick={props.disabled ? clickDisabled : () => closeList()} wType="texted" className={`${buttonStyle}`}>
        //                 <i className="material-icons">close</i>
        //             </WButton>
        //         </div>
        //     </WCol>

        // </WRow>
    );
};

export default TableHeader;