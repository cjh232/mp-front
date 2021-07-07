import React from 'react';
import {
    Box, 
    Button,
    Text, 
} from '@chakra-ui/react'

// Components
import FilterSection from './filter-section';
import Categories from './categories-list';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { applyFilters, clearFilters } from '../../../redux/store/store.actions';


import { SIZES, BRANDS, COLORS, CATEGORIES } from './constants';

export default function Filter ({parentCategory, currrentCategory, ...props}) {

    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters)
    const brandFilters = filters.brands
    const colorFilters = filters.colors
    const sizeFilters = filters.sizes
    const categories = useSelector(state => state.categories)

    const [ brands, setBrands ]  = React.useState(new Set())
    const [ sizes, setSizes ] = React.useState(new Set())
    const [ colors, setColors] = React.useState(new Set())
    
    const handleColorToggle = (value) => {

        if(colors.has(value)) {
            colors.delete(value)
        } else {
            colors.add(value)
        }

        setColors(new Set(colors))
    }

    const handleBrandToggle = (value) => {

        if(brands.has(value)) {
            brands.delete(value)
        } else {
            brands.add(value)
        }

        setBrands(new Set(brands))
    }

    const handleSizeToggle = (value) => {

        if(sizes.has(value)) {
            sizes.delete(value)
        } else {
            sizes.add(value)
        }

        setSizes(new Set(sizes))
    }


    const handleSubmit = () => {
        dispatch(applyFilters({
            category: currrentCategory,
            size: [...sizes],
            color: [...colors],
            brand: [...brands]
        }))
    }

    const handleClearFilters = () => {
        setBrands(new Set())
        setColors(new Set())
        setSizes(new Set())
        dispatch(applyFilters({
            category: currrentCategory,
            size: [],
            color: [],
            brand: []
        }))
    }

    return (
        <Box 
            w={{sm: "10%", md: "25%", lg: "15%", xl: "20%"}}
            display={{sm: "none", md: "block", lg: "block", xl: "block"}}
            h="600px"
        >
            <Text color="heading" fontWeight="600" fontSize="14px">Browse by:</Text>
            <Categories currrentCategory={currrentCategory} parentCategory={parentCategory} categories={categories.sub_categories} mt="24px"/>
            <Text color="heading" fontWeight="600" fontSize="14px" mt="24px">Filter by:</Text>
            <FilterSection 
                options={sizeFilters} 
                name="Size" 
                set={sizes}
                toggle={handleSizeToggle}
                mt="24px"
            />
            <FilterSection 
                options={brandFilters} 
                name="Brand" 
                set={brands}
                toggle={handleBrandToggle}
                mt="12px"
            />
            <FilterSection 
                options={colorFilters} 
                name="Color" 
                set={colors}
                toggle={handleColorToggle}
                mt="12px"
            />
            <Button 
                onClick={handleSubmit} 
                mt="12px"
                colorScheme="pink"
                variant="submit"
                isFullWidth
            >
                Apply Filters
            </Button>
            <Button 
                onClick={handleClearFilters} 
                mt="12px"
                colorScheme="pink"
                isFullWidth
                variant="secondary"
                >
                Clear Filters
            </Button>
        </Box>
    )
}

