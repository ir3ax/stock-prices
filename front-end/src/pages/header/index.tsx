import React, { useState, useEffect } from 'react';
import { fetchStocksDataSearch } from '../../services/api';
import { useAtom } from 'jotai';
import { searchStock } from '../../atom/stockSearchAtom';

interface StockSearchResult {
    "1. symbol": string;
    "2. name": string;
    "3. type": string;
    "4. region": string;
    "5. marketOpen": string;
    "6. marketClose": string;
    "7. timezone": string;
    "8. currency": string;
    "9. matchScore": string;
}

const Header = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState<StockSearchResult[]>([]);
    const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [, setSearchValueAtom] = useAtom(searchStock);

    useEffect(() => {
        if (searchValue) {
            fetchStocksDataSearch(searchValue).then(data => {
                const matches = data.bestMatches || [];
                setSearchResults(matches);
                setDropdownVisible(matches.length > 0);
                setIsError(matches.length === 0);
            });
        } else {
            setSearchResults([]);
            setDropdownVisible(false);
            setIsError(false);
        }
    }, [searchValue]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleResultClick = (symbol: string) => {
        setSearchValueAtom(symbol)
        setSearchValue(symbol);
        setDropdownVisible(false);
        setIsError(false);
    };

    return (
        <div className='w-full flex flex-col'>
            <h1 className='text-4xl font-bold mb-6'>
                Stock Market
            </h1>
            <div className='relative w-full max-w-lg'>
                <input
                    type='search'
                    value={searchValue}
                    onChange={handleInputChange}
                    className='w-full p-2 border rounded-t-lg'
                    placeholder='Search for a stock...'
                />
                {isDropdownVisible && searchResults.length > 0 && (
                    <ul className='absolute w-full bg-white border border-t-0 max-h-60 overflow-y-auto rounded-b-lg z-10'>
                        {searchResults.map((result, index) => (
                            <li
                                key={index}
                                onClick={() => handleResultClick(result["1. symbol"])}
                                className='p-2 cursor-pointer hover:bg-gray-200'
                            >
                                {result["1. symbol"]} - {result["2. name"]}
                            </li>
                        ))}
                    </ul>
                )}
                {isError && searchValue && (
                    <div className='absolute w-full bg-white border border-t-0 p-2 rounded-b-lg z-10'>
                        <p className='text-red-500 w-full flex justify-center items-center'>Stock not found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
