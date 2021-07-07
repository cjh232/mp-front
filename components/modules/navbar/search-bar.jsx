import {
    InputGroup,
    InputLeftElement,
    Input, 
    Box
} from '@chakra-ui/react'

// Icons
import { HiOutlineSearch } from 'react-icons/hi';

// CSS
import styles from './styles/search.module.css'

export default function Search (props) {

    return (
        <Box className={styles.search}>
            <form>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        color="gray.400"
                        children={<HiOutlineSearch  />}
                        mb="rem"
                    />
                    <Input 
                        variant="outline" 
                        w="700px" 
                        placeholder="Search for something nice..."
                        focusBorderColor="pink.300"
                        shadow="sm"
                        color="gray.500"
                        fontSize="14px"
                        onChange={(event) => onInputChange(event)}/>
                </InputGroup>
            </form>
        </Box>
    )
}