import { useState } from 'react';

import PageLayout from '../layouts/Page';

import styles from '../styles/Book.module.scss';

export default function BookATable () {
    const [state, setState] = useState({
        name: "",
        email: "",
        numGuests: 0,
        phone: "",
        dateAndTime: null,
        comments: ""
    });

    const submitHandle = () => {

    }

    return (
        <PageLayout>
            <div className={styles.wrapper}>
                <div className={styles.col}>
                    <form className={styles.form}>
                        <h2>BOOK A TABLE</h2>
                        <label htmlFor='fName'>Name</label>
                        <input 
                            type="text" 
                            id="fName" 
                            placeholder='Name'
                            onChange={e => setState({...state, name: e.target.value})}

                            value={state.name}
                        />
                        <label htmlFor='fEmail'>Email</label>
                        <input 
                            type="text" 
                            id="fEmail" 
                            placeholder='Email'

                            onChange={e => setState({...state, email: e.target.value})}

                            value={state.email}
                        />
                        <label htmlFor='fNumGuests'>Number of guests</label>
                        <input 
                            type="number" 
                            id="fNumGuests" 
                            min={0}
                            onChange={e => setState({...state, numGuests: e.target.value})}

                            value={state.numGuests}
                        />
                        <label htmlFor='fPhone'>Phone</label>
                        <input 
                            type="tel" 
                            id="fPhone" 
                            placeholder='Phone'

                            onChange={e => setState({...state, phone: e.target.value})}

                            value={state.phone}
                        />
                        <label htmlFor='fDayTime'>Day and Time</label>
                        <input 
                            type="datetime-local" 
                            id="fDayTime" 
                            placeholder='Day and time'
                            onChange={e => setState({...state, dateAndTime: e.target.value})}

                            value={state.dateAndTime}
                        />
                        <label htmlFor='fComments'>Comments</label>
                        <input 
                            type="text" 
                            id="fComments" 
                            placeholder='Comments'
                        />
                        <button
                            onClick={submitHandle}
                            >
                            Send inquiry
                        </button>
                    </form>
                </div>
                <div className={styles.col}>

                </div>
            </div>
        </PageLayout>
    )
}