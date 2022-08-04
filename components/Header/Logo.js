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
                        console.log(expansionState);
                        setExpansionState(stateMachine.states[expansionState].on.click)
                        setExpanded(!expanded);                    
                    }
                }
                onMouseOver={() => {
                    //console.log(`currentState: ${expansionState} -- MOUSE OVER --> ${stateMachine.states[expansionState].on.mouseOver}`);
                    setExpansionState(stateMachine.states[expansionState].on.mouseOver)

                }}
                onMouseOut={() => {
                    //console.log(`currentState: ${expansionState} -- MOUSE OUT --> ${stateMachine.states[expansionState].on.mouseOut}`);

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