import { useState } from 'react';

import styles from './Header.module.scss';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import Title from './Title';

import Menu from './Menu';

const useExpansionState = () => {
    const [expanded, setExpanded] = useState(false);

    const NORMAL = 'NAV-STATUS/NORMAL',
            READY = 'NAV-STATUS/READY',
            CLOSED = 'NAV-STATUS/CLOSED',
            EXPANDED = 'NAV-STATUS/EXPANDED';

    const stateMachine = {
        initialState: NORMAL,
        states: {
            [NORMAL]: {
                on: {
                    mouseOver: READY,
                    mouseOut: NORMAL,
                    click: NORMAL
                }
            },

            [READY]: {
                on: {
                    mouseOut: NORMAL,
                    mouseOver: READY,
                    click: expanded? CLOSED: EXPANDED
                }
            },

            [EXPANDED]: {
                on: {
                    mouseOut: NORMAL,
                    mouseOver: EXPANDED,
                    click: CLOSED
                }
            },

            [CLOSED]: {
                on: {
                    mouseOut: NORMAL,
                    mouseOver: CLOSED,
                    click: EXPANDED
                }
            }
        }


    }
    
    const [expansionState, setExpansionState] = useState(stateMachine.initialState);

    return {
        expanded,
        setExpanded,
        expansionState,
        setExpansionState,
        stateMachine
    }
    
    
}


export default function Header() {
    const {expanded,
        setExpanded,
        expansionState,
        setExpansionState,
        stateMachine} = useExpansionState();


    return ( 
        <header 
            className={styles.wrapper} 
            data-expanded={expanded}>
            
            <section className={styles.label}>
                <Logo 
                    expanded={expanded}
                    setExpanded={setExpanded}
                    expansionState={expansionState}
                    setExpansionState={setExpansionState}
                    stateMachine={stateMachine}
                    />
                <Title />
                <SocialLinks />
            </section>

            <section 
                className={styles.menu}
                data-expanded={expanded}
                >
                <Menu expanded={expanded}/>
            </section>
            
            
        </header>
    )
}