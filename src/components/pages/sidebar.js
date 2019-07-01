import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import '../../styles/sidebar.css';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        fontSize: "15px",
        margin: 0,
        padding: 0

    },

}));

export default class Sidebar extends Component {
    hidden=Boolean;
    constructor() {
        super()
        this.state=
        {
            hidden : false
        }

    }
    show=()=>
    {
        this.setState({hidden:true});
    }
    render() {

        return (
            <div className="sidebarr">
                <table>

                    <tr className="title"><span id="titlespan">Add Table</span></tr>
                    <tbody>
                    {this.state.hidden ? <tr> <Button className={useStyles.button} id="btn1">Add new text</Button></tr> : null}
                      
                        <tr>
                            <textarea></textarea></tr>
                        <tr>
                            <div id="add">

                                <Button className={useStyles.button} id="btn" onClick={this.show}><span id="black">Add </span> <span id="grey"> Your Text</span></Button></div> </tr>

                        {this.state.hidden ? <tr>xyz</tr> : null}


                    </tbody>
                </table>


            </div>
        )
    }
}


