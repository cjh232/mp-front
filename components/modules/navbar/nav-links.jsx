import {
    HStack,
    Link,
    Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router'


export default function NavLinks () {

    const router = useRouter()

    const linkIsActive = (relativeName) => {
        /** Splitting path to account for nested paths (ie: /shop/all) */
        return router.asPath.split('/')[1] === relativeName;
    }

    return (
        <HStack w="300px" spacing="48px">
            <CustomLink 
                title="Home" 
                href="/" 
                isActive={linkIsActive("")}
            />
            <CustomLink title="Shop" href="/shop/all" isActive={linkIsActive("shop")} />
            <CustomLink title="News" href="/news" isActive={linkIsActive("news")}/>
            <CustomLink title="Forum" href="/forum" isActive={linkIsActive("forum")}/>
            
        
        </HStack>
    )
}

function CustomLink ({href, title, isActive}) {
    return (
        <Link 
        fontSize="14px"
        fontWeight="600"
        letterSpacing=".5px"
        color={isActive ? "heading" : "text_mute"}
        borderBottom={isActive ? "1px" : "0px"}
        _focus={{
            boxShadow: "none"
        }}
        _hover={{
            textDecoration: "none",
            color: "primary",
            borderBottom: "1px"
        }}
        href={href}
        >
            {title}
        </Link>
    )
}