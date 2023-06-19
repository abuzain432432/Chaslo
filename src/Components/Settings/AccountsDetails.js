/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react'
import { Form, Input } from 'antd';
import PhoneInput from 'react-phone-number-input';
import CustomInput from './Input';
import FormButton from '../GeneralUI/FormSubmitButton/FormSubmitButton';
import styles from './AccountsDetails.module.scss'
import { Country, State, City } from 'country-state-city';
import AccountsDetailsSelect from './AccountsDetailsSelect';
import { getRequrieRules, getValidateEmailRules } from '../../FN/FormFn'

export default function AccountsDetails(props) {
    const { city: cityName, country: countryName, state: stateName, name, email, address, zpCode } = props.accountDetails;
    const [form] = Form.useForm();

    const allCountires = useMemo(() => { return Country.getAllCountries() }, [])
    const [selectedCountry, setSelectedCountry] = useState(allCountires.find(c => c.name === countryName))

    const [states, setStates] = useState(State.getStatesOfCountry(selectedCountry?.isoCode))
    const [selectedState, setSelectedState] = useState(null)

    const [cities, setCities] = useState(City.getCitiesOfState(selectedCountry?.isoCode, selectedState?.isoCode))
    const [selectedCity, setSelectedCity] = useState(City.getCitiesOfState(undefined));


    useEffect(() => {
        setStates(State.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry])


    useEffect(() => {
        const searchedState = states.find(s => s.name === stateName);
        setSelectedState(searchedState ? searchedState : states[0])

    }, [states])

    useEffect(() => {
        setCities(City.getCitiesOfState(selectedCountry?.isoCode, selectedState?.isoCode))
    }, [selectedState])


    useEffect(() => {
        const searchedCity = cities.find(c => c.name === cityName);
        setSelectedCity(searchedCity ? searchedCity : cities[0])
    }, [cities])

    const formSubmitHandler = (data) => {
        console.log(data)
    }
    return (
        <div className={`${styles['accounts-details']}`}>
            <Form
                scrollToFirstError
                initialValues={{
                    name,
                    email,
                    street1: address.street1,
                    street2: address.street2,
                    zpCode,
                }}
                form={form} onFinish={formSubmitHandler}
                layout='vertical'>
                <Form.Item name={'name'} label='Name' rules={[getRequrieRules('name')]}>
                    <Input size='large' disabled={true} />
                </Form.Item>
                <Form.Item validateTrigger="onChange"
                    validateFirst name={'email'} rules={[getRequrieRules('email address'), getValidateEmailRules()]} label='Email Address' >
                    <Input size='large' />
                </Form.Item>
                <CustomInput tage='street1' label='Address' name="street1" />
                <CustomInput tage='street2' name="street2" />
                <div>
                    <div className='w-50'>
                        <CustomInput tage='zp code' name="zpCode" required={true} />
                    </div>
                </div>
                <div className={`${styles['select-container']} d-flex gap-3 ${styles['city-state-con']}`}>
                    <AccountsDetailsSelect
                        required={true}
                        tag='Country'
                        name='country'
                        selectedOption={selectedCountry} setSelectedOption={setSelectedCountry}
                        options={allCountires} formInstance={form} />
                    <AccountsDetailsSelect name='state'
                        tag='State'
                        selectedOption={selectedState} setSelectedOption={setSelectedState}
                        options={states} formInstance={form} />
                </div>

                <AccountsDetailsSelect name='city'
                    tag='City'
                    selectedOption={selectedCity} setSelectedOption={setSelectedCity}
                    options={cities} formInstance={form} />

                <div className={styles['phone-number-con']}>
                    <Form.Item rules={[getRequrieRules('phone number')]} name={'phoneNumber'} className='phoneNumber' label='Mobile Number'>
                        <PhoneInput />
                    </Form.Item>
                </div>

                <div className={styles['btn-con']}>
                    <FormButton round={true} htmlType='submit' >Save</FormButton>
                </div>
            </Form>
        </div>
    )
}
