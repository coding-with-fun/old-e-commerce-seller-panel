import Skeleton from '@mui/material/Skeleton';
import Paper from '@mui/material/Paper';
import { Fragment } from 'react';

const ProductsSkeleton = () => {
    return (
        <Fragment>
            {[...Array(5)].map((_, index) => {
                return (
                    <Paper
                        key={index}
                        elevation={0}
                        variant="outlined"
                        sx={{
                            padding: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            minHeight: '266px',
                            minWidth: '337px',
                        }}
                    >
                        <Skeleton variant="rounded" width={303} height={160} />

                        <Skeleton
                            variant="text"
                            sx={{
                                fontSize: '24px',
                            }}
                        />
                        <Skeleton
                            variant="text"
                            sx={{
                                fontSize: '24px',
                            }}
                        />
                        <Skeleton
                            variant="text"
                            sx={{
                                fontSize: '24px',
                            }}
                        />
                    </Paper>
                );
            })}
        </Fragment>
    );
};

export default ProductsSkeleton;
