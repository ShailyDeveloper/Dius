import React, { Component } from 'react';
import BowlHeaders from '../components/bowlhandler';


class Bowling extends Component {
    state = {
        strikevalues: {
            score: 0,
            spareanddoublestrike: 0,
            strike: 0,
            roundcount: 1,
            showval: null,
            str1Val: null,
            str2Val: null,
            laststrike: 0,
            lastspare: 0
        }

    }

    fnhandlebutton = () => {
        const resetValues = this.state.strikevalues;
        if (resetValues.roundcount === 10 && (resetValues.str1Val === "10" || resetValues.str2Val === "10")) {
            resetValues.roundcount = resetValues.roundcount + 1
        }
        else if (resetValues.roundcount <= 10) {
            resetValues.roundcount = resetValues.roundcount + 1
        }
        else {
            resetValues.roundcount = 1;
            resetValues.score = 0;
        }
        resetValues.showval = null;
        resetValues.str1Val = null;
        resetValues.str2Val = null;
        this.setState(
            {
                strikevalues: resetValues
            }
        )


    }

    fnHandleFinalRound = () => {
        const finalvalues = this.state.strikevalues;
        finalvalues.showval = true;
        finalvalues.str1Val = null;
        finalvalues.str2Val = null
        finalvalues.laststrike = 1;
        this.setState({
            strikevalues: finalvalues
        })
    }

    fnHandleFinalSpareRound = () => {
        const finalsparevalues = this.state.strikevalues;
        finalsparevalues.showval = false;
        finalsparevalues.str1Val = null;
        finalsparevalues.str2Val = null;
        finalsparevalues.lastspare = 1;
        this.setState({
            strikevalues: finalsparevalues
        })
    }



    fnHandle = (event) => {
        let ssval = this.state.strikevalues;
        if (ssval.laststrike !== 1 && ssval.lastspare !== 1) {
            if (!ssval.showval) { ssval.str1Val = event.target.value } else { ssval.str2Val = event.target.value }
            if (event.target.value < 10) { ssval.showval = true; } else { ssval.showval = false; }
            this.setState({
                strikevalues: ssval
            })
            this.fncalculatescore(ssval);
        }
        else if (ssval.laststrike === 1) {
            if (ssval.str1Val === null) {
                ssval.str1Val = event.target.value;
                if (ssval.spareanddoublestrike === 1 && ssval.strike === 1) { ssval.score = ssval.score + (+event.target.value * 2) }
                else { ssval.score = ssval.score + (+event.target.value) }
            }
            else if (ssval.str2Val == null) { ssval.str2Val = event.target.value; ssval.score = ssval.score + (+event.target.value); ssval.laststrike = 0; ssval.roundcount = 11 }
            ssval.strike = 0;
            ssval.spareanddoublestrike = 0;
            this.setState(
                { strikevalues: ssval }
            )

            this.fnsetState(ssval);

        }
        else if (ssval.lastspare === 1) {

            ssval.str1Val = event.target.value; ssval.score = ssval.score + (+event.target.value); ssval.lastspare = 0; ssval.roundcount = 11;
            ssval.strike = 0;
            ssval.spareanddoublestrike = 0;
            this.setState(
                { strikevalues: ssval }
            )

            this.fnsetState(ssval);
        }
    }
    fnsetState = (val) => {

        const resetValues = this.state.strikevalues;
        if (val.str2Val !== null && val.str2Val !== '10' && (val.str1Val + val.str2val === 10)) {
            resetValues.showval = null;
            resetValues.str1Val = null;
            resetValues.str2Val = null;
            if (resetValues.roundcount < 11) {
                resetValues.roundcount = resetValues.roundcount + 1
            }
        }
        this.setState(
            {
                strikevalues: resetValues
            }
        )

    }


    fncalculatescore = (ssval) => {
        if (ssval.str1Val === '10') {
            if (ssval.spareanddoublestrike === 1 && ssval.strike === 0) {
                ssval.score = ssval.score + (+ssval.str1Val * 2)
            }
            else if (ssval.spareanddoublestrike === 0 && ssval.strike === 1) {
                ssval.score = ssval.score + (+ssval.str1Val * 2)
            }
            else if (ssval.spareanddoublestrike === 1 && ssval.strike === 1) {
                ssval.score = ssval.score + (+ssval.str1Val * 3)
            }
            else {
                ssval.score = ssval.score + +ssval.str1Val
            }

            if (ssval.strike === 1) {
                ssval.spareanddoublestrike = 1
                ssval.strike = 1
            }
            if (ssval.strike === 0) {
                ssval.strike = 1;
                ssval.spareanddoublestrike = 0;
            }
        }
        else if (ssval.str2Val === '10') {
            if (ssval.spareanddoublestrike === 1 && ssval.strike === 0) {
                ssval.score = ssval.score + (+ssval.str2Val * 2)
            }
            else if (ssval.spareanddoublestrike === 0 && ssval.strike === 1) {
                ssval.score = ssval.score + (+ssval.str2Val * 2)
            }
            else if (ssval.spareanddoublestrike === 1 && ssval.strike === 1) {
                ssval.score = ssval.score + (+ssval.str2Val * 3)
            }
            else {
                ssval.score = ssval.score + +ssval.str2Val
            }

            if (ssval.strike === 1) {
                ssval.spareanddoublestrike = 1
                ssval.strike = 1
            }
            if (ssval.strike === 0) {
                ssval.strike = 1;
                ssval.spareanddoublestrike = 0;
            }
        }
        else if (ssval.str1Val !== '10' && ssval.str2Val !== null && ssval.str2Val !== "10") {
            if (ssval.spareanddoublestrike === 1 && ssval.strike === 0) {
                ssval.score = ssval.score + (+ssval.str1Val * 2 + +ssval.str2Val)
            }
            else if (ssval.spareanddoublestrike === 0 && ssval.strike === 1) {
                ssval.score = ssval.score + ((+ssval.str1Val + +ssval.str2Val) * 2)
            }
            else if (ssval.spareanddoublestrike === 1 && ssval.strike === 1) {
                ssval.score = ssval.score + (+ssval.str1Val + (+ssval.str1Val + +ssval.str2Val) * 2)
            }
            else {
                ssval.score = ssval.score + +ssval.str1Val + +ssval.str2Val
            }

            if (+ssval.str1Val + +ssval.str2Val === 10) {
                ssval.spareanddoublestrike = 1
                ssval.strike = 0

            }
            else {
                ssval.spareanddoublestrike = 0
                ssval.strike = 0
            }


        }
        this.setState({
            strikevalues: ssval
        }

        )
        this.fnsetState(this.state.strikevalues);
    }
    render() {
        return (
            <div>
                <h1 style={{ margin: '10px' }}>Bowling</h1>
                <BowlHeaders
                    showsecond={this.state.strikevalues}
                    handleChanged={(event) => this.fnHandle(event)}
                    buttonhandler={this.fnhandlebutton}
                    finalroundhandle={this.fnHandleFinalRound}
                    finalroundspare={this.fnHandleFinalSpareRound}>
                </BowlHeaders>
                <br></br>
                <br></br>
                <label style={{ margin: '10px' }}><b>Score</b></label> <label><b></b></label>
                <label style={{ margin: '10px' }}><b>{this.state.strikevalues.score}</b></label> <label><b></b></label>
            </div >
        )
    }
}

export default Bowling;