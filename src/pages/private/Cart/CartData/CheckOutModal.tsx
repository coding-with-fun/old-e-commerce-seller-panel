import { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

const CheckOutModal = (props: IProps) => {
    const { handleCloseCheckoutModal } = props;

    const [promoCode, setPromoCode] = useState('');

    const handleChangePromCode = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const regex = new RegExp(/^[a-zA-Z0-9]*$/);

        if (regex.test(e.target.value)) {
            setPromoCode(e.target.value);
        }
    };

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <CloseIcon
                    sx={{
                        cursor: 'pointer',
                    }}
                    onClick={handleCloseCheckoutModal}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: '0.5rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <InputBase
                    sx={{
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                        padding: '0.15rem 0.8rem',
                        borderRadius: '4px',
                        userSelect: 'none',
                        flex: 1,
                    }}
                    value={promoCode}
                    onMouseDown={(event) => {
                        if (event.detail > 1) {
                            event.preventDefault();
                        }
                    }}
                    onKeyDown={(event) => {
                        if (event.ctrlKey || event.altKey || event.metaKey) {
                            event.preventDefault();
                        }
                    }}
                    onChange={(e) => {
                        handleChangePromCode(e);
                    }}
                />

                <Button variant="outlined">Submit</Button>
            </Box>
        </Box>
    );
};

export default CheckOutModal;

interface IProps {
    handleCloseCheckoutModal: () => void;
}
