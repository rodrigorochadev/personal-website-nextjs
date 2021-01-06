import React from 'react'
import useDarkMode from 'use-dark-mode'
import { HeaderNav, HeaderText } from '../../styles/header/headerStyles'
import { Logo } from '../../styles/misc/miscStyles'
import { Container, Flex, UnstyledButton } from '../../styles/shared/sharedStyles'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = ({onCursor}) => {

    const {value: isDark, toggle: toggleDarkMode} = useDarkMode()
    
    return(
        <HeaderNav>
            <Container small>
                <Flex noHeight spaceBetween alignCenter relative>
                    <Flex>
                        <Flex alignCenter style={{columnGap: '20px'}}>

                            <motion.div
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                            >
                                <Link href="/" aria-label="Back to Homepage">
                                    <Logo />
                                </Link>
                            </motion.div>
                            <UnstyledButton 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                aria-label="Toggle Theme" 
                                onClick={toggleDarkMode}>
                                    <HeaderText bold>Rodrigo Rocha</HeaderText>
                            </UnstyledButton>
                        </Flex>
                    </Flex>

                    <div 
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        onClick={onCursor}
                    >
                        <HeaderText uppercase bold biggerTracking><u>Book a free meeting!</u></HeaderText>
                    </div>
                </Flex>
            </Container>
            
        </HeaderNav>
    )
}

export default Header