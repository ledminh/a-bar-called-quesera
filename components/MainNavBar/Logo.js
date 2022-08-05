import styles from './Logo.module.scss';

export default function Logo({expanded, 
    setExpanded,
    expansionState,
    setExpansionState,
    stateMachine}) {
    

    return (
        <section className={styles.logo}>
            <button 
                onClick={
                    () => {
                        setExpansionState(stateMachine.states[expansionState].on.click)
                        setExpanded(!expanded);                    
                    }
                }
                onMouseOver={() => {
                    setExpansionState(stateMachine.states[expansionState].on.mouseOver)

                }}
                onMouseOut={() => {

                    setExpansionState(stateMachine.states[expansionState].on.mouseOut);
                }}
                >
                <i 
                    className="fa fa-regular fa-life-ring"
                    data-expansion-state={expansionState}

                    />
            </button>
        </section>
    )
}