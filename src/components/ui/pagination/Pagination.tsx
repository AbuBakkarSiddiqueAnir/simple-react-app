import React, { useEffect,useState } from 'react';
import { Left, Right } from '../../../assets';
import { PaginationProps } from './../../../types/interfaces';


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {

    const [leftBtnDisabled, setLeftBtnDisabled] = useState(false)
    const [rightBtnDisabled, setRightBtnDisabled] = useState(false)

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    useEffect(()=>{
        if(currentPage >= totalPages) setRightBtnDisabled(true)
        else setRightBtnDisabled(false)
        if(currentPage <= 1) setLeftBtnDisabled(true)
        else setLeftBtnDisabled(false)
    },[currentPage])

    return (
        <div className="flex w-full bg-white  h-[50px]  my-8">
            <ul className="pagination flex gap-2 flex-end">
                <li>
                    <button
                        disabled={leftBtnDisabled}
                        className='font-semibold text-[13px] leading-4 w-8 h-8  flex justify-center items-center rounded-[8px] border border-solid border-[#F1F1F1] '
                        onClick={() => onPageChange(currentPage - 1)}
                    >
                        <img src={Left} alt="" />
                    </button>
                </li>

                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            className={`font-semibold w-8 h-8 text-[13px] leading-4  flex justify-center items-center rounded-[8px] border  border-solid border-[#F1F1F1] ${number === currentPage ? 'bg-[#2F80ED] text-white' : ''}`}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                       disabled={rightBtnDisabled}
                        className='font-semibold text-[13px] leading-4 w-8 h-8  flex justify-center items-center rounded-[8px] border border-solid border-[#F1F1F1]'
                        onClick={() => onPageChange(currentPage + 1)}
                    >
                        <img src={Right} alt="" />
                    </button>
                </li>

            </ul>
        </div>
    );
};

export default Pagination;