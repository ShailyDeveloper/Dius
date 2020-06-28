import React from 'react';
import BowlVal from '../ui/bowlingfields';
import BowlBut from '../ui/bowlingbutton';
const BowlHeaders = (props) => {
    let element = []

    if (props.showsecond.str1Val !== null && props.showsecond.str1Val !== "10") {
        element.push(<option key={11}>Select</option>)
        for (let index = 0; index < 11 - props.showsecond.str1Val; index++) {
            element.push(<option key={index} value={index}>{index}</option>);
        }
    }
    else {
        element.push(<option key={11}>Select</option>)
        for (let index = 0; index < 11; index++) {
            element.push(<option key={index} value={index}>{index}</option>);
        }
    }


    let str1points = props.showsecond.str1Val ? <option key={props.showsecond.str1Val} value={props.showsecond.str1Val}>{props.showsecond.str1Val}</option> :
        element

    let str2points = props.showsecond.str2Val ? <option key={props.showsecond.str2Val} value={props.showsecond.str2Val}>{props.showsecond.str2Val}</option> :
        element



    let displaycontrol = props.showsecond.showval ?
        <div>
            <BowlVal
                strikecount='1'
                handleChange={props.handleChanged}
                elementval={str1points}></BowlVal>
            <BowlVal
                strikecount='2'
                elementval={str2points}
                handleChange={props.handleChanged}>
            </BowlVal>
        </div> : <BowlVal
            strikecount='1'
            handleChange={props.handleChanged}
            elementval={str1points}></BowlVal>

    if ((props.showsecond.str1Val === "10" || props.showsecond.str2Val === "10") && props.showsecond.laststrike !== 1) {
        displaycontrol = <div>
            <BowlBut
                handlebutton={props.buttonhandler} input=" It's a strike!! Click for the next round"></BowlBut>
        </div>
    }

    if ((+props.showsecond.str1Val + +props.showsecond.str2Val === 10) && props.showsecond.str1Val !== "10" && props.showsecond.str2Val !== "10" && props.showsecond.lastspare !== 1) {
        displaycontrol = <div>
            <BowlBut
                handlebutton={props.buttonhandler} input=" It's a spare!! Click for the next round"></BowlBut>
        </div>

    }

    if ((+props.showsecond.str1Val + +props.showsecond.str2Val < 10) && (props.showsecond.str1Val !== null && props.showsecond.str2Val !== null) && props.showsecond.lastspare !== 1 && props.showsecond.laststrike !== 1) {
        displaycontrol = <div>
            <BowlBut
                handlebutton={props.buttonhandler} input=" No bonus!! Click for the next round"></BowlBut>
        </div>

    }

    if (props.showsecond.roundcount === 10 && (props.showsecond.str1Val === "10" || props.showsecond.str2Val === "10") && props.showsecond.laststrike !== 1) {
        displaycontrol = <div> <BowlBut
            handlebutton={props.finalroundhandle}
            input="Click to get 2 more chances for a strike"></BowlBut></div>
    }

    if (props.showsecond.roundcount === 10 && (+props.showsecond.str2Val + +props.showsecond.str1Val === 10) && props.showsecond.str2Val !== "10" && props.showsecond.str1Val !== "10" && props.showsecond.lastspare !== 1) {
        displaycontrol = <div> <BowlBut
            handlebutton={props.finalroundspare}
            input="It's a spare Click to get 1 more chance for a strike"></BowlBut></div>
    }

    if (props.showsecond.roundcount > 10 && props.showsecond.lastspare !== 1 && props.showsecond.laststrike !== 1) {
        displaycontrol = <div> <BowlBut
            handlebutton={props.buttonhandler}
            input="Game over!!! Click to start a fresh game"></BowlBut></div>
    }



    return (
        <div>
            <b style={{ margin: '10px' }}>Round {props.showsecond.roundcount > 10 ? "10" : props.showsecond.roundcount}</b>
            <br></br>
            <br></br>
            {displaycontrol}
        </div>
    )
}

export default BowlHeaders