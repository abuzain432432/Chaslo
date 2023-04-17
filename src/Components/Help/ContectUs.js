import React from 'react'
import styles from './ContectUs.module.scss'
import ContactForm from './ContactForm'
import ContactInformation from './ContactInformation'
export default function ContectUs() {
    return (
        <div className={`${styles['contects-us']} d-flex justify-content-between pe-5`}>
            <ContactInformation />
            <ContactForm />
        </div>
    )
}
