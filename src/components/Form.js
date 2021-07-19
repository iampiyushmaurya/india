import React from 'react'
import "./Form.css"

const Form = () => {
    return (
        <div className="container">
            <form action="" >
                <div className = "row">
                    <div className="col-25">
                        <label htmlFor="FullName">Full Name</label>
                    </div>
                    <div className = "col-75">
                        <input type='text' name="FullName" id="FullName" placeholder="Full Name"/>
                    </div>
                </div>

                <div className = "row">
                    <div className="col-25">
                        <label htmlFor="Phone">Phone</label>
                    </div>
                    <div className = "col-75">
                        <input type='text' name="Phone" id="Phone" placeholder="Phone "/>
                    </div>
                </div>

                <div className = "row">
                    <div className="col-25">
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div className = "col-75">
                        <input type='text' name="Email" id="Email" placeholder="Email"/>
                    </div>
                </div>

                <div className = "row">
                    <div className="col-25">
                        <label htmlFor="query">Query</label>
                    </div>
                    <div className = "col-75">
                    <textarea id="subject" name="subject" placeholder="Write Your query" style={{height:'200px'}}></textarea>
                    </div>
                </div>
                <br />
                <div className="row">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
