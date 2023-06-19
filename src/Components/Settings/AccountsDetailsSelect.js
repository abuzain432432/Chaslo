/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Select, Form } from 'antd'
import styles from './AccountsDetilsSelect.module.scss'
import { getRequrieRules } from '../../FN/FormFn'


export default function AccountsDetailsSelect(props) {
    const { options, name, setSelectedOption, selectedOption, formInstance, tag, required } = props;
    const changeHandler = (data) => {
        setSelectedOption(options.find(option => option.name === data));
    }
    useEffect(() => {
        formInstance.setFieldsValue({
            [name]: selectedOption?.name
        })
    }, [selectedOption])

    const rules = required && [getRequrieRules(tag)];

    return (
        <div className={styles['select-con']}>
            <p className={`${styles.tag} mb-0`}>{tag}</p>
            <Form.Item name={name} rules={rules}>
                <Select value={selectedOption?.name} onChange={changeHandler} showSearch filterOption={true}>{
                    options?.map(option => {
                        return (<Select.Option value={option?.name}>{option?.name}</Select.Option>)
                    })
                }</Select>
            </Form.Item>
        </div>
    )
}
