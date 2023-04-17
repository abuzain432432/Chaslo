import React from 'react'
import logoImage from '../../assets/images/logo.svg'
import LandingForm from './LandingForm';
import { TbPlayerPlay } from 'react-icons/tb';
import styles from './Landing.module.scss'
import WaitList from './WaitList';
import { Typography } from 'antd'

const { Title, Paragraph } = Typography;
export default function Landing() {
    const success = true;
    return (
        <div className={`align-items-center justify-content-center d-flex flex-column flex-grow-1 ${styles.landing}`}>
            <div >
                <div className={`text-centern ${styles['img-con']}`} >
                    <img src={logoImage} alt='chashola logo' />
                </div>
                {!success && (
                    <>
                        <Title className={`m-0 text-center ${styles.title}`}>
                            <span>One </span>
                            Dashboard
                        </Title>
                        <Title className={`m-0 text-center  ${styles.title}`}>
                            <span>One </span>
                            Monthly Payment
                        </Title>
                        <Title className={`m-0 text-center  ${styles.title}`}>
                            <span>All </span>
                            your credit accounts
                        </Title>
                    </>
                )}
                {success && <WaitList link='https://www.cashola.money/?ref=o4hgjs' waitingMember='2,000' email={'jim.smith@gmail.com'} />}
            </div>
            {!success &&
                (<>
                    <div className={styles['login-form-con']}>
                        <LandingForm />
                    </div>
                    <Paragraph className={`${styles['video-text']} d-flex align-items-center gap-2`}>
                        Watch this video
                        <span className={`border border-light d-flex align-items-center justify-content-center rounded-circle ${styles['icon-con']}`}>
                            <TbPlayerPlay color={'white'} size={20} />
                        </span>
                    </Paragraph>
                </>)
            }
        </div>
    )
}
