import React from 'react';
import { Card, CardContent, Container, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)(() => ({
  padding: '10px',
  borderRadius: 2,
  minWidth:'100%',
}));

const LoadingProject = () => {

  return (
    <Container>
    <Grid container justifyContent="center" spacing={2} className="p-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          className="flex justify-center"
        >
          <CustomCard className="skeleton-card">
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <Skeleton
              variant="rectangular"
              width="100%"
              height={60}
              style={{ borderRadius: 2, padding: '10px' }}
            />
            <CardContent>
              <>
                <Skeleton width="60%" />
                <Skeleton width="40%" />
                <div className="skeleton-circle-card flex justify-center mt-2">
                  <Skeleton variant="circular" width={30} height={30} />
                  <Skeleton variant="circular" width={30} height={30} className="ml-2" />
                </div>
              </>
            </CardContent>
          </CustomCard>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default LoadingProject;
