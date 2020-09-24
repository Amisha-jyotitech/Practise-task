import { render } from "@testing-library/react";
import React from "react";
import * as utils from '../config/utils';

export default class HoroscopeForm extends React.Component {
    state = {
        firstname: '',
        middlename: '',
        dob: '',
        placeofbirth: '',
        district: '',
        mobile: '',
        email: '',
        message: '',
        errors: {
            firstname: '',
            middlename: '',
            dob: '',
            placeofbirth: '',
            district: '',
            mobile: '',
            email: '',
            message: ''
        },
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstname':
                errors.firstname =
                    value && value.length >= 3
                        ? ''
                        : 'Name atleast 3 character!';
                break;
            case 'middlename':
                errors.middlename =
                    value && value.length >= 3
                        ? ''
                        : 'Father/Husband Name atleast 3 character!';
                break;
            case 'placeofbirth':
                errors.placeofbirth =
                    value && value.length >= 3
                        ? ''
                        : 'Place of birth atleast 3 character!';
                break;
            case 'district':
                errors.district =
                    value && value.length >= 3
                        ? ''
                        : 'District name atleast 3 character!';
                break;
            case 'email':
                errors.email =
                    value && value.length >= 0 && utils.validateEmail(value)
                        ? ''
                        : 'Please Enter Valid Email Address!';
                break;
            case 'mobile':
                errors.mobile =
                    value && value.length > 9 && utils.validateMobile(value)
                        ? ''
                        : 'Please Enter Valid Mobile Number!';
                break;
            case 'message':
                errors.message =
                    value && value.length > 0
                        ? ''
                        : 'Message is required!';
                break;
        }

        this.setState({ errors, [name]: value }, () => {
            // console.log(errors)
        })
    }
    render() {
        const { errors } = this.state;
        return (
            <div className="card card-nav-tabs">
                <div className="card-header card-header-danger">
                    <h3 className="card-title"> Horoscope Analysis </h3>
                </div>
                <div className="card-body ">


                    <form className="contact-form text-left">

                        <div className="form-group">
                            <label className="bmd-label-floating">Your Name</label>
                            <input type="text" className="form-control" name="firstname" onChange={this.handleChange} noValidate value={this.state.firstname} />
                            {errors.firstname.length > 0 &&
                                <small className="form-text text-danger">{errors.firstname}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">Father / Husband </label>
                            <input type="text" className="form-control" name="middlename" onChange={this.handleChange} noValidate value={this.state.lastname} />
                            {errors.middlename.length > 0 &&
                                <small className="form-text text-danger">{errors.middlename}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">Date of Birth </label>
                            <input type="text" className="form-control datetimepicker" id="dob"
                                name="dob" onSelect={this.handleChange} noValidate />
                            {errors.dob.length > 0 &&
                                <small className="form-text text-danger">{errors.dob}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">Place of Birth</label>
                            <input type="text" className="form-control" name="placeofbirth" onChange={this.handleChange} noValidate value={this.state.placeofbirth} />
                            {errors.placeofbirth.length > 0 &&
                                <small className="form-text text-danger">{errors.placeofbirth}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">District</label>
                            <input type="text" className="form-control" name="district" onChange={this.handleChange} noValidate value={this.state.district} />
                            {errors.district.length > 0 &&
                                <small className="form-text text-danger">{errors.district}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">Mobile</label>
                            <input type="text" className="form-control" name="mobile" onChange={this.handleChange} noValidate value={this.state.mobile} />
                            {errors.mobile.length > 0 &&
                                <small className="form-text text-danger">{errors.mobile}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label className="bmd-label-floating">Your Email</label>
                            <input type="email" className="form-control" name="email" onChange={this.handleChange} noValidate value={this.state.email} />
                            {errors.email.length > 0 &&
                                <small className="form-text text-danger">{errors.email}</small>
                            }
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleMessage" className="bmd-label-floating">Your
                                                            Message</label>
                            <textarea type="email" className="form-control" rows="4"
                                id="exampleMessage" name="message" onChange={this.handleChange} noValidate value={this.state.message}></textarea>
                            {errors.message.length > 0 &&
                                <small className="form-text text-danger">{errors.message}</small>
                            }
                        </div>

                        <div className="row">
                            <div className="col-md-4 ml-auto mr-auto text-center">
                                <button className="btn btn-danger btn-raised" type="submit">
                                    Submit
                            </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}