import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FlexContainer, HeaderContainer, ImageContainer, SearchIcon, SettingsIcon,SearchInput } from './style'

interface HeaderProps {
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setSearchQuery }: HeaderProps) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const router = useRouter()

  const toggleSearch = () => {
    setSearchVisible(!searchVisible)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchQuery) {
      setSearchQuery(event.target.value)
    }
  }

  const isHomePage = router.pathname === '/'

  return (
    <HeaderContainer>
      <FlexContainer>
        {isHomePage && <SearchIcon onClick={toggleSearch} />}
        {searchVisible && (
          <SearchInput
            as={motion.input}
            initial={{ x: '-40%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            type="text"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        )}
      </FlexContainer>
      <ImageContainer>
        <Image src="/backtothepast.png" alt="Back to the Past" width={170} height={80} />
      </ImageContainer>
      <FlexContainer>
        <Link href={`/settings`}>
          <SettingsIcon />
        </Link>
      </FlexContainer>
    </HeaderContainer>
  )
}

export default Header;